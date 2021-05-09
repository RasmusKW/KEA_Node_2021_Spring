const router = require("express").Router();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const transport = nodemailer.createTransport({

  host: "smtp-mail.outlook.com",
  port: 587,
  secure: true, // use TLS
    auth: {
        user: 'nodefolio@outlook.com',
        pass: 'mytestpass!'
    },
    tls: {
        rejectUnauthorized: false
    }
})


function sendMail(mail){
    var mailOptions ={
        from: mail.email,
        to: 'nodefolio@outlook.com',
        subject: mail.subject,
        html: mail.message
    }

    transport.sendMail(mailOptions, function(err,info) {
        if(err){
            console.log(err);
        }
        else{
            console.log("Email sent"+ info.reponse);
        }
    })
}
router.post("/api/contact", (req, res) => {
    mail = {
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    sendMail(mail);
    res.redirect("/");
});

module.exports = {
    router
};