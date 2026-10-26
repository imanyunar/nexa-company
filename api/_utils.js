import { neon } from '@neondatabase/serverless'
import crypto from 'crypto'

const JWT_SECRET = process.env.JWT_SECRET || 'nexa_studio_jwt_secret_key_2026_secured_entropy'

export function getDb() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('DATABASE_URL is not defined in environment variables')
  }
  return neon(url)
}

/**
 * Hash password with PBKDF2
 */
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')
  return `${salt}:${hash}`
}

/**
 * Verify password against stored salt:hash
 */
export function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false
  const [salt, hash] = stored.split(':')
  const verify = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(verify, 'hex'))
}

/**
 * Create a simple tamper-proof HMAC-SHA256 session token
 */
export function createToken(payload, expiresInSeconds = 7 * 24 * 3600) {
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds
  const data = JSON.stringify({ ...payload, exp })
  const base64Data = Buffer.from(data).toString('base64url')
  const signature = crypto.createHmac('sha256', JWT_SECRET).update(base64Data).digest('base64url')
  return `${base64Data}.${signature}`
}

/**
 * Verify session token and return payload
 */
export function verifyToken(token) {
  if (!token || typeof token !== 'string') return null
  const parts = token.split('.')
  if (parts.length !== 2) return null
  const [base64Data, signature] = parts
  const expectedSignature = crypto.createHmac('sha256', JWT_SECRET).update(base64Data).digest('base64url')
  
  if (signature !== expectedSignature) return null

  try {
    const payload = JSON.parse(Buffer.from(base64Data, 'base64url').toString('utf8'))
    const now = Math.floor(Date.now() / 1000)
    if (payload.exp && payload.exp < now) {
      return null // Expired
    }
    return payload
  } catch {
    return null
  }
}

/**
 * Standard CORS & JSON response helpers
 */
export function sendJson(res, statusCode, data) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.end(JSON.stringify(data))
}

export function handleCors(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.end()
    return true
  }
  return false
}

export async function parseJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      if (!body) return resolve({})
      try {
        resolve(JSON.parse(body))
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}
