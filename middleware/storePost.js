module.exports = (req, res, next) => {
  if (!req.files.image || !req.body.title || !req.body.subtitle || !req.body.content || req.body.pdf) {
    return res.redirect('/posts/new')
  }

  next()
}
