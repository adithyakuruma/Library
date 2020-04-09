const Like = require("../database/models/Like");

module.exports = async (req, res) => {
    try {
        await Like.create({
            likedUser: req.session.userId,
            postLiked: req.params.id
        })
        res.redirect(`/post/${req.params.id}`);
    } catch (error) {
        console.log("[updateLike e]", error)
    }
}