const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/post/:id', postController.getPostsByUser)
router.get('/post', postController.getPostsAll)
router.put('/post', postController.updatePost)
router.delete('/post', postController.deleteAllPost)

module.exports = router