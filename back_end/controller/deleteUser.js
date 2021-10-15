const event = mongoose.model('event');
const user = mongoose.model('user');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

process.env.TOKEN_SECRET = "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
const images = require('./readImages')

function deleteUser(req, res) {
    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");

    let decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.send('Failed to authenticate')
        } else {
            return decoded

        }
    });

    if (decodedEmail === 'justt@gmail.com') {
        user.deleteOne({_id: req.query.id}, function (err, docs) {
            if (err) {
                console.log(err);

            } else {
                event.deleteMany({userId:req.query._id}, function (err, comDocs) {
                    if(err){
                        console.log(err);
                    }else{
                        res.send(docs)
                    }
                })

            }
        })
    } else {
        //unauthorized user accessing events
        res.send([])
    }

}

module.exports = deleteUser;
