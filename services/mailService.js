const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
})

module.exports = {
    sendMail: (toMail, param) => {
        const link = 'http://localhost:' + process.env.PORT + '/changePwd/' + param;
        const mailOption = {
            from: process.env.USER,
            to: toMail,
            subject: 'Reset password',
            html: '<a href="' + link + '">Click here to reset password</a>'
        }
        transporter.sendMail(mailOption);
    }
}


