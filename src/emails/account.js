const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send( {
        to: email,
        from: 'vinayakpatilcs229@gmail.com',
        subject: 'Welcome to the app',
        html: `welcome to the app <h3> ${name} </h3> Let me know how you get along with the app`
    })
}

module.exports = {
    sendWelcomeEmail
}
