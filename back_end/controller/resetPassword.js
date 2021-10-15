mongoose = require('mongoose');
const crypto = require('crypto');
var bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

var user = mongoose.model('user');


module.exports.resetPassword = function (req, res) {
    user.find({
        email: req.body.params.email,
    }, function (err, documents) {
        if (err) {
            console.log("Database connection error")
        } else {

            if (documents.length > 0) {

                const tokenCrypto = crypto.randomBytes(20).toString('hex');
                /*let resetLink = "https://fast-inlet-83724.herokuapp.com/resetPassword/" + tokenCrypto;*/
                let resetLink = "http://localhost:3001/resetpassword/" + tokenCrypto;

                user.updateOne(
                    {email: req.body.params.email},
                    {resetPasswordToken: tokenCrypto, resetPasswordExpires: Date.now() + 3600000},
                ).then(resalt => console.log(resalt));
                var AppConfig = {
                    'sendEmailID': 'girmaytadesepop@gmail.com',
                    'sendEmailFromName': 'girmaytadesepop@gmail.com',
                    'sendEmailPassword': 'popgirma@2'
                };
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: '587',
                    secure: false,

                    auth: {
                        user: 'girmaytadesepop@gmail.com',
                        pass: 'uqyzinohxbqrilkb',
                    },
                    secureConnection: 'false',

                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false,

                    }
                });
                console.log(req.body.params.email);
                const mailOptions = {
                    to: req.body.params.email,
                    subject: "Back to School Account Reset Password",
                    /*html: messageText*/
                    text: "Back to School Has received a request to reset the password for your account.\n" +
                        "If you did not request to reset you password,\n" +
                        "please ignore this email.  \n\n" + resetLink,
                    /*text: """ You are receiving this because you agree, click this "
                        + "http://localhost:3000/resetPassword/" + token,*/

                };
                console.log("sending email");
                transporter.sendMail(mailOptions, (err, response) => {
                    if (err) {
                        console.error('There was an error: ', err);
                        res.send(err)
                    } else {
                        console.log("here is the res: ", response);
                        res.send("Sent")
                    }
                })
            } else {
                res.send("notUser")

            }
        }

    });
};
module.exports.resetPasswordToken = function (req, res) {
    const token = req.body.params;
    console.log(req.body, 'mememe');
    user.findOne({
        resetPasswordToken: token
    }, function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            console.log('just', "and the and then", docs);
            if (docs) {
                let now = Date.now();
                let tokenGiven = docs.resetPasswordExpires;
                if (tokenGiven > now) {
                    res.send(docs.email)
                } else {
                    res.send("Token Expired")
                }
            } else {
                res.send("Invalid Token")
            }
        }
    })
};
module.exports.changePassword = function (req, res) {
    const myPlaintextPassword = req.body.params.password;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            // Store hash in your password DB.

            user.updateOne({email: req.body.params.email}, {password: hash})
                .then(response => {
                    res.send({token: 'Acg33Lkw5e0tF80PFjBD1QRHkcDKVcIt', message: "Password Changed"});
                    console.log(response);
                })
        })
    });

};
