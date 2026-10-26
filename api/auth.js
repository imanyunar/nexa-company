import { getDb, verifyPassword, createToken, verifyToken, sendJson, handleCors, parseJsonBody } from './_utils.js'

export default async function handler(req, res) {
  if (handleCors(req, res)) return

  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null

    // GET /api/auth -> Verify current token
    if (req.method === 'GET') {
      const payload = verifyToken(token)
      if (!payload) {
        return sendJson(res, 401, { error: 'Unauthorized: Token tidak valid atau sudah kedaluwarsa' })
      }
      return sendJson(res, 200, {
        authenticated: true,
        admin: {
          id: payload.id,
          email: payload.email,
          name: payload.name
        }
      })
    }

    // POST /api/auth -> Login
    if (req.method === 'POST') {
      const body = await parseJsonBody(req)
      const { email, password } = body

      if (!email || !password) {
        return sendJson(res, 400, { error: 'Email dan password wajib diisi' })
      }

      const sql = getDb()
      const rows = await sql`
        SELECT id, email, password_hash, name 
        FROM admins 
        WHERE LOWER(email) = LOWER(${email.trim()}) 
        LIMIT 1
      `

      if (!rows || rows.length === 0) {
        return sendJson(res, 401, { error: 'Email atau password salah' })
      }

      const admin = rows[0]
      const isValid = verifyPassword(password, admin.password_hash)

      if (!isValid) {
        return sendJson(res, 401, { error: 'Email atau password salah' })
      }

      const payload = {
        id: admin.id,
        email: admin.email,
        name: admin.name
      }

      const authToken = createToken(payload)

      return sendJson(res, 200, {
        success: true,
        token: authToken,
        admin: payload
      })
    }

    return sendJson(res, 405, { error: 'Method not allowed' })
  } catch (error) {
    console.error('Auth handler error:', error)
    return sendJson(res, 500, { error: 'Internal Server Error: ' + error.message })
  }
}
