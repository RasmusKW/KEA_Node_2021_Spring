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
    service: "gmail",
    auth: {
        user: 'businessnoneofyour65@gmail.com',
        pass: 'mytestpass!'
    },
    tls: {
        rejectUnauthorized: false
    }
})


function sendMail(mail){
    var mailOptions ={
        from: mail.email,
        to: 'businessnoneofyour65@gmail.com',
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
    res.redirect("/email");
});

module.exports = {
    router
};