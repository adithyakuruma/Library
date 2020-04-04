const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email.']
  },
  password: {
    type: String,
    required: [true, 'Please provide your password.']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide your phone Number.']
  },

  address: {
    type: String,
    required: [true, 'Please provide your password.']
  },
  role: {
    type: String,
    default: "user"
  },
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  },

})

UserSchema.pre('save', function (next) {
  const user = this

  bcrypt.hash(user.password, 10, function (error, encrypted) {
    user.password = encrypted
    next()
  })
})

module.exports = mongoose.model('User', UserSchema)
