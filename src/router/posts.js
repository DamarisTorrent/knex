const {getPostById, getAllPosts} = require('../controller/posts')


const posts = (app) => {

  app.get('/posts', getAllPosts)

  app.get('/posts/:id', getPostById)
}

module.exports = posts