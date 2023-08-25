const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {title, content, user_id, id} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id, id) VALUES ($1, $2, $3, $4) RETURNING *`, [title,content,user_id,id])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req, res) {
        const id = req.params.id
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1 ORDER BY position ASC`, [id])
        res.json(posts.rows)
    }
    async getPostsAll(req, res) {
        const post = await db.query(`SELECT * FROM post`)
        res.json(post.rows)
    }
    async updatePostNewPostion(req, res) {
      const {position, id} = req.body
      const post = await db.query(`UPDATE post SET position = $1 WHERE id = $2`, [position, id])
      res.json(post.rows[0])
    }
    // async updatePostPostion(req, res) {
    //   const {position, id} = req.body
    //   const post = await db.query(`UPDATE post SET position = $1 WHERE id = $2`, [position, id])
    //   res.json(post.rows[0])
    // }
    async deleteAllPost(req, res) {
      const posts = await db.query('DELETE FROM post')
      res.json(posts.rows)
  }
}

module.exports = new PostController()
exports