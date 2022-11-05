const nodemailer = require('nodemailer')

exports.SendMailer = async() => {

    let transporter = nodemailer.createTransport({
        // service:'hotmail',
        host:"smtp.mailtrap.io",
        port: 2525,
   
        auth: {
            user: "9770ff5f456da6",
            pass: "5ec4da30b94e7d"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '9770ff5f456da6',
        to:'zefroholire-3265@yopmail.com',
        subject: 'mailtrap test',
        text: 'this the first test',
    });

    if(!info){
        console.log("Failed to send email.")
    }
    else{
        console.log("Email send successfully")
    }
}