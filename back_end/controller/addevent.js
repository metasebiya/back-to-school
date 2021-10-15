mongoose = require('mongoose');
fs = require('fs');
const dotenv = require('dotenv');


const moment = require('moment');
const jwt = require('jsonwebtoken');


var user = mongoose.model('user');
var event = mongoose.model('event');

module.exports.addNewEvent = function (req, res) {
    console.log(req.body);

    console.log(req.body,'thefiles');

    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");
    const decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.send('Failed to authenticate');

        console.log(req.body);
        return decoded
    });
    console.log(req.body);

    user.findOne({email: decodedEmail}, function (err, docs) {
        if(err){
            console.log(err);
        }else{
        event.create({
            userId: docs._id,
            description : req.body.newLaunchDetails.description,
            dateCreated: moment()

        }, function (err, eventDocs) {
            if(err){
                console.log(err);
            }else {
                res.send(eventDocs);
            }

        })}
    });
};








