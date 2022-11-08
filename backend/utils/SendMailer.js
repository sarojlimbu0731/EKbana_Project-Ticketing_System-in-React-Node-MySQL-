const nodemailer = require('nodemailer')

exports.SendMailer = async(mailer) => {
        // console.log(mailer)
    let transporter = nodemailer.createTransport({
        // service:'hotmail',
        host:"smtp.mailtrap.io",
        port: 2525,
   
        auth: {
            user: "9770ff5f456da6",
            pass: "5ec4da30b94e7d"
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    let info = await transporter.sendMail({
        from: 'admin@gmail.com',
        to:mailer.userEmail,
        subject: 'Booked Ticket',
        text: `${mailer.userEmail} has booked ${mailer.seatName} seat of ${mailer.busName}`,
    });

    if(!info){
        console.log("Failed to send email.")
    }
    else{
        console.log("Email send successfully")
    }
}