mongoose = require('mongoose');
var user = mongoose.model('user');
var multer = require('multer');
var path = require('path');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const fileUpload = function(req, res){
    console.log('here I am ');
    var i = 0;
    var storage = multer.diskStorage({

        destination: './public/images/products/',
        filename: function (req, file, cb) {

            cb(null, '3a' + Date.now() + userToken + path.extname(file.originalname));
        }
    });

    var upload = multer({
        i: 2,
        storage: storage,
        limits: {fileSize: 10000000},
        fileFilter: function (req, file, cb) {
            console.log(req.body.description, 'and then');
            //validate the inputs

            checkFileType(file, cb);
        },
    }).single('file');

    function checkFileType(file, cb) {
        const filetypes = /pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: pdf Only')
        }
    }


    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");
    const decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.send('Failed to authenticate');
        console.log(decoded);
        return decoded
    });
    user.findOne({email:decodedEmail}, function (err, docs) {
        if(err){
            console.log(err);
        }else{
            upload(req, res, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(req.file, 'before');
                }
            })
        }
    })

};


module.exports = fileUpload;