const User = require('../database/models/User');
var nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    const user = await User.findOne({ _id: req.session.userId });
    const email = user.email;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adithyakondra007@gmail.com ',
            pass: 'aditya@007'
        }
    });
    var mailOptions = {
        from: 'adithyakondra007@gmail.com ',
        to: email,
        subject: 'Email Verification',
        text: 'Hello,\n\n' + 'Please verify your account : \nhttp:\/\/' + req.headers.host + '' + token + '.\n'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).send("email_sent_successfully");


}