mongoose = require('mongoose');
fs = require('fs');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

const event = mongoose.model('event');
const user = mongoose.model('user');

const updateevent = function (req, res) {
    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");

    const decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.send('Failed to authenticate');
        return decoded
    });
    user.findOne({email:decodedEmail}, function (err, docs) {
        if (err){
            console.log(err);
        }else{
            event.updateOne({userId:docs._id, _id:req.body.params.id}, {description:req.body.params.description},function (err, eventDocs) {
                if(err){
                    console.log(err);
                }else{
                    res.send(docs);
                }
            })
        }
    })



};

module.exports = updateevent;
