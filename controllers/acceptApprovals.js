const Company = require('../database/models/Company')


module.exports = async (req, res) => {
    Company.findByIdAndUpdate(req.params.id, {
        status: "Approved"
    }, (error, done) => {
        if (error) {
            // console.log(err)
            res.redirect('/users/authors')
        } else {
            res.redirect('/users/authors')
        }
    })
}