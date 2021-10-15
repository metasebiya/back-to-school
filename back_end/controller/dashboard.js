const jwt = require('jsonwebtoken');
const moment = require('moment');
const dotenv = require('dotenv');

var event = mongoose.model('event');
var user = mongoose.model('user');


function dashboard(req, res) {
    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");

    let decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.send('Failed to authenticate');
        return decoded
    });
    //check if the email is admin's email.
    if (decodedEmail === 'justt@gmail.com') {
        user.find({}, function (err, eventDocs) {
            if (err) {
                console.error(err)
            } else {
                const adminDetail = {
                    docs: {email: 'justt@gmail.com', name: 'justt'},
                    eventDocs,
                    auth: "Admin"
                };
                res.send(adminDetail)

            }
        });

    } else {
        user.find({email: decodedEmail}, function (err, docs) {
            if (err) {
                console.error(err)
            } else {
                event.find({userId: docs[0]._id}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        const finalDocs = {eventDocs, docs, auth:"User"};
                        res.send(finalDocs)
                    }
                })

            }
        });

    }

}

module.exports = dashboard;
