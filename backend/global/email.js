const nodemailer = require("nodemailer");

exports.sendEmail=async (req,res)=>{
        // create reusable transporter object using the default SMTP transport
        console.log('sendemail')
        let transporter = await nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
         // secure: false, // true for 465, false for other ports
          auth: {
            user: 'b3ed1eb3cf88f1', // generated ethereal user
            pass: 'fb0f747d3e8822', // generated ethereal password
          },
        });
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <0dfcfa8a73-628114@inbox.mailtrap.io>', // sender address
          to: "0dfcfa8a73-628114@inbox.mailtrap.io", // list of receivers
          subject: "Confirmar de cadastro", // Subject line
          html: `<div>
                        <h2>title</h2>
                        <div>
                        <span>corpo</span>
                        </div>
          </div>`, // html body
        }); 
        console.log(info)
        console.log("Message sent: %s", info.messageId); 
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.status(200).send(info)
}