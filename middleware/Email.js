const nodemailer = require("nodemailer");
const { smtpUserName, smtpPassword } = require("../secret/secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: smtpUserName,
    pass: smtpPassword,
  }
});

const sendMail = async (emailData) => {

    const info = await transporter.sendMail({
        from: emailData.email, // sender address
        to: smtpUserName, // list of receivers
        subject: emailData.subject, // Subject line
       
        html: emailData.html, // html body
      });
      console.log("Message sent: %s", info.response);
}

module.exports = sendMail