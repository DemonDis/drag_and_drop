const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {title, content, user_id} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`, [title,content,user_id])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req, res) {
        const id = req.params.id
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id])
        res.json(posts.rows)
    }
    async getPostsAll(req, res) {
        const post = await db.query(`SELECT * FROM post`)
        res.json(post.rows)
    }
    async updatePost(req, res) {
      const {title, content, id, user_id} = req.body
      const post = await db.query(`UPDATE post SET id = $1, title = $2, content = $3, user_id = $4 WHERE id = $1 RETURNING *`, [id, title, content, user_id])
      res.json(post.rows[0])
    }
    async deleteAllPost(req, res) {
      const posts = await db.query('DELETE FROM post')
      res.json(posts.rows)
  }
}

module.exports = new PostController()
exports