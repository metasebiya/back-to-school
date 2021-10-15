mongoose = require('mongoose');
fs = require('fs');
mongoose = require('mongoose');
var contact = mongoose.model('contact');
module.exports.addNewContact = function (req, res) {
    contact.create({
        email: req.body.email,
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        company:req.body.company,
        country:req.body.country,
    }, function (err, registerDocs) {
        if (err) {
            console.log(err);
        } else {
            res.send(registerDocs);
        }
    })
};
