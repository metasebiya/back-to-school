mongoose = require('mongoose');
fs = require('fs');
mongoose = require('mongoose');
var register = mongoose.model('register');
module.exports.addNewregister = function (req, res) {
    register.create({
        phoneNumber:req.body.phoneNumber,
        company:req.body.company,
        country:req.body.country,
        message:req.body.message,
        email: req.body.email,
        name:req.body.name,
    }, function (err, registerDocs) {
        if (err) {
            console.log(err);
        } else {
            res.send(registerDocs);
        }
    })
};
