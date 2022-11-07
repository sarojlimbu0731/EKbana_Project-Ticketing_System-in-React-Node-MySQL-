const nodemailer = require('nodemailer')

exports.SendMailer = async(mailer) => {
        // console.log(mailer)
    let transporter = nodemailer.createTransport({
        // service:'hotmail',
        host:"smtp.mailtrap.io",
        port: 2525,
   
        auth: {
            user: "094d25fac05757",
            pass: "653399b179fb53"
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