const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    likedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postLiked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
})

module.exports = mongoose.model('Like', LikeSchema)
