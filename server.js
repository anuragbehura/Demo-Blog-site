const express = require('express')
const blogRouter = require('./routes/blogs')

const app = express()

app.set('view engine', 'ejs')

app.use('/blogs', blogRouter)

app.get('/', (req, res) => {
    const blogs = [
      {
        title: 'Test Blog',
        createdAt: Date.now(),
        description: "Test description",
      },
      {
        title: 'Test Blog 2',
        createdAt: Date.now(),
        description: "Test description 2 ",
      }]
    res.render('index', { blogs: blogs })
})

app.listen(5000)