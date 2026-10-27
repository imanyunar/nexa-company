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

      const safeTrim = (val) => (val && typeof val === 'string' ? val.trim() : '')
      const titleStr = safeTrim(title)
      const dateStr = typeof event_date === 'string' ? event_date.trim() : event_date
      const startTimeStr = typeof start_time === 'string' ? start_time.trim() : start_time

      if (!titleStr || !dateStr || !startTimeStr) {
        return sendJson(res, 400, { error: 'Judul, tanggal kegiatan, dan waktu mulai wajib diisi.' })
      }

      const rows = await sql`
        INSERT INTO events (
          title, description, category, event_date, start_time, end_time,
          location_type, location_name, link, color, is_published, updated_at
        ) VALUES (
          ${titleStr}, ${safeTrim(description)}, ${category || 'Event'}, ${dateStr}, ${startTimeStr}, ${end_time ? String(end_time).trim() : null},
          ${location_type || 'online'}, ${safeTrim(location_name)}, ${safeTrim(link)}, ${color || 'purple'}, ${is_published !== undefined ? Boolean(is_published) : true}, NOW()
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

      const safeTrimOrNull = (val) => (val && typeof val === 'string' ? val.trim() : (val === null || val === '' ? '' : null))

      const rows = await sql`
        UPDATE events
        SET
          title = CASE WHEN ${title !== undefined} THEN ${safeTrimOrNull(title) || title} ELSE title END,
          description = CASE WHEN ${description !== undefined} THEN ${safeTrimOrNull(description) ?? ''} ELSE description END,
          category = CASE WHEN ${category !== undefined} THEN ${category || 'Event'} ELSE category END,
          event_date = CASE WHEN ${event_date !== undefined} THEN ${event_date} ELSE event_date END,
          start_time = CASE WHEN ${start_time !== undefined} THEN ${start_time} ELSE start_time END,
          end_time = CASE WHEN ${end_time !== undefined} THEN ${end_time ? String(end_time).trim() : null} ELSE end_time END,
          location_type = CASE WHEN ${location_type !== undefined} THEN ${location_type || 'online'} ELSE location_type END,
          location_name = CASE WHEN ${location_name !== undefined} THEN ${safeTrimOrNull(location_name) ?? ''} ELSE location_name END,
          link = CASE WHEN ${link !== undefined} THEN ${safeTrimOrNull(link) ?? ''} ELSE link END,
          color = CASE WHEN ${color !== undefined} THEN ${color || 'purple'} ELSE color END,
          is_published = CASE WHEN ${is_published !== undefined} THEN ${Boolean(is_published)} ELSE is_published END,
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
