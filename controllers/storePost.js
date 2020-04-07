const path = require('path')
const Post = require('../database/models/Post')

module.exports = (req, res) => {
  const { image } = req.files
  const { flnk } = req.files
  flnk.mv(path.resolve(__dirname, '..', 'public/pdf', flnk.name),
    image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
      Post.create({
        ...req.body,
        image: `/posts/${image.name}`,
        flnk: `/pdf/${flnk.name}`,
        author: req.session.userId
      }, (error, post) => {
        res.redirect("/");
      });
    }))
}