mongoose = require('mongoose');
fs = require('fs');
mongoose = require('mongoose');
var hackhaton = mongoose.model('hackhaton');
module.exports.addNewHackhaton = function (req, res) {
    hackhaton.create({
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        title:req.body.title,
        nameOFSchool:req.body.nameOFSchool,
        year:req.body.year,
        level:req.body.level,
        topicOfInterest:req.body.topicOfInterest,
        knowledge:req.body.knowledge,
        personalLaptop:req.body.personalLaptop,
        gender:req.body.gender,
        reasonForParticipation:req.body.reasonForParticipation,
        whatWillYouDo:req.body.whatWillYouDo,
        comment:req.body.comment,
    }, function (err, hackhatonDocs) {
        if (err) {
            console.log(err);
        } else {
            res.send(hackhatonDocs);
        }
    })
};
