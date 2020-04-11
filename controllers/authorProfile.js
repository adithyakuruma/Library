const Company = require('../database/models/Company')

module.exports = async (req, res) => {
    const company = await Company.findById(req.session.userId)
    res.render('authorProfile', {
        company,
    });

}
