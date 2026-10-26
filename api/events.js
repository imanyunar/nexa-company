import { getDb, verifyToken, sendJson, handleCors, parseJsonBody } from './_utils.js'

export default async function handler(req, res) {
  if (handleCors(req, res)) return

  try {
    const sql = getDb()
    const authHeader = req.headers.authorization || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null
    const adminUser = verifyToken(token)

    // GET /api/events
    if (req.method === 'GET') {
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
      const showAll = url.searchParams.get('all') === 'true' && !!adminUser
      const category = url.searchParams.get('category')

      let query
      if (showAll) {
        if (category && category !== 'all') {
          query = sql`
            SELECT id, title, description, category, event_date, start_time, end_time, 
                   location_type, location_name, link, color, is_published, created_at
            FROM events
            WHERE category = ${category}
            ORDER BY event_date ASC, start_time ASC
          `
        } else {
          query = sql`
            SELECT id, title, description, category, event_date, start_time, end_time, 
                   location_type, location_name, link, color, is_published, created_at
            FROM events
            ORDER BY event_date ASC, start_time ASC
          `
        }
      } else {
        if (category && category !== 'all') {
          query = sql`
            SELECT id, title, description, category, event_date, start_time, end_time, 
                   location_type, location_name, link, color, is_published, created_at
            FROM events
            WHERE is_published = TRUE AND category = ${category}
            ORDER BY event_date ASC, start_time ASC
          `
        } else {
          query = sql`
            SELECT id, title, description, category, event_date, start_time, end_time, 
                   location_type, location_name, link, color, is_published, created_at
            FROM events
            WHERE is_published = TRUE
            ORDER BY event_date ASC, start_time ASC
          `
        }
      }

      const rows = await query
      return sendJson(res, 200, { data: rows })
    }

    // Protect all write operations (POST, PUT, DELETE)
    if (!adminUser) {
      return sendJson(res, 401, { error: 'Akses ditolak: Hanya admin internal yang diizinkan mengelola kegiatan.' })
    }

    // POST /api/events -> Add event
    if (req.method === 'POST') {
      const body = await parseJsonBody(req)
      const {
        title,
        description = '',
        category = 'Event',
        event_date,
        start_time,
        end_time = null,
        location_type = 'online',
        location_name = '',
        link = '',
        color = 'purple',
        is_published = true
      } = body

      if (!title || !event_date || !start_time) {
        return sendJson(res, 400, { error: 'Judul, tanggal kegiatan, dan waktu mulai wajib diisi.' })
      }

      const rows = await sql`
        INSERT INTO events (
          title, description, category, event_date, start_time, end_time,
          location_type, location_name, link, color, is_published, updated_at
        ) VALUES (
          ${title.trim()}, ${description.trim()}, ${category}, ${event_date}, ${start_time}, ${end_time || null},
          ${location_type}, ${location_name.trim()}, ${link.trim()}, ${color}, ${is_published}, NOW()
        )
        RETURNING *
      `

      return sendJson(res, 201, { success: true, data: rows[0] })
    }

    // PUT /api/events -> Update event
    if (req.method === 'PUT') {
      const body = await parseJsonBody(req)
      const {
        id,
        title,
        description,
        category,
        event_date,
        start_time,
        end_time,
        location_type,
        location_name,
        link,
        color,
        is_published
      } = body

      if (!id) {
        return sendJson(res, 400, { error: 'ID kegiatan wajib disertakan untuk update.' })
      }

      const rows = await sql`
        UPDATE events
        SET
          title = COALESCE(${title ? title.trim() : null}, title),
          description = COALESCE(${description !== undefined ? description.trim() : null}, description),
          category = COALESCE(${category || null}, category),
          event_date = COALESCE(${event_date || null}, event_date),
          start_time = COALESCE(${start_time || null}, start_time),
          end_time = ${end_time !== undefined ? (end_time || null) : null},
          location_type = COALESCE(${location_type || null}, location_type),
          location_name = COALESCE(${location_name !== undefined ? location_name.trim() : null}, location_name),
          link = COALESCE(${link !== undefined ? link.trim() : null}, link),
          color = COALESCE(${color || null}, color),
          is_published = COALESCE(${is_published !== undefined ? is_published : null}, is_published),
          updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `

      if (!rows || rows.length === 0) {
        return sendJson(res, 404, { error: 'Kegiatan tidak ditemukan.' })
      }

      return sendJson(res, 200, { success: true, data: rows[0] })
    }

    // DELETE /api/events -> Delete event
    if (req.method === 'DELETE') {
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
      const queryId = url.searchParams.get('id')
      let id = queryId ? parseInt(queryId, 10) : null

      if (!id) {
        const body = await parseJsonBody(req).catch(() => ({}))
        id = body.id ? parseInt(body.id, 10) : null
      }

      if (!id) {
        return sendJson(res, 400, { error: 'ID kegiatan wajib disertakan untuk menghapus.' })
      }

      const rows = await sql`
        DELETE FROM events
        WHERE id = ${id}
        RETURNING id
      `

      if (!rows || rows.length === 0) {
        return sendJson(res, 404, { error: 'Kegiatan tidak ditemukan.' })
      }

      return sendJson(res, 200, { success: true, message: 'Kegiatan berhasil dihapus.' })
    }

    return sendJson(res, 405, { error: 'Method not allowed' })
  } catch (error) {
    console.error('Events handler error:', error)
    return sendJson(res, 500, { error: 'Internal Server Error: ' + error.message })
  }
}
