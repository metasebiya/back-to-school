const jwt = require('jsonwebtoken');
const moment = require('moment');
const dotenv = require('dotenv');

var event = mongoose.model('event');

function showEvent(req, res) {
    event.find({},function (err, eventDocs) {
        if (err) {
            console.log(err);
        } else {
            res.send(eventDocs)
        }
    })
}
module.exports = showEvent;
