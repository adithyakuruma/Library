const Post = require('../database/models/Post')
const Company = require('../database/models/Company')
const User = require('../database/models/User')
const Like = require("../database/models/Like");


module.exports = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author');
  const company = await Company.findById(req.session.userId)
  const user = await User.findById(req.session.userId)
  const likes_count = await Like.find({ postLiked: req.params.id }).countDocuments();
  const liked = await Like.findOne({ likedUser: req.session.userId, postLiked: req.params.id })
  const header = req.headers.host
  res.render("post", {
    post, company, user, header, likes_count, liked

  });
}