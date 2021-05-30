const transporter = require('../config/mail.config')

require('dotenv').config()

function sendVerificationEMail(receiver, subject, host, token) {
    transporter.sendMail({
        to: receiver,
        from: process.env.GMAIL_USER,
        subject: subject,
        html: 
        `
            <p>Перейдите по ссылке, чтобы подтвердить почту</p>
            <a href=${host}/verification/${token}>Ссылка</a>
        `
    })
}

const crypto = require('crypto')



module.exports = sendVerificationEMail