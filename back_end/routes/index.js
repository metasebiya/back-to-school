

var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
adminDetail = require('../controller/adminDetail');
signup = require('../controller/signup');
loginUser = require('../controller/login');
addevent = require('../controller/addevent');
editaddevent = require('../controller/editEvent');
dashboard = require('../controller/dashboard');
showEvent=require('../controller/showEvent')
feedback=require('../controller/feedback')
updateevent = require('../controller/updateevent');
deleteUser = require('../controller/deleteUser');
fileUpload = require('../controller/fileUpload');
editevent=require('../controller/editevent');
adminChangeStatus = require('../controller/adminChangeStatus');
register=require('../controller/register');
hackhaton=require('../controller/Hackhaton');
contact=require('../controller/contact');

/* GET event page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//
// var multer = require('multer')
//
// var storage = multer.diskStorage({
//
//   destination: './public/images/products/',
//   filename: function (req, file, cb) {
//
//     cb(null, '3a' + Date.now()  + path.extname(file.originalname));
//   }
// });
//
// function checkFileType(file, cb) {
//   const filetypes = /pdf/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: pdf Only')
//   }
// }
//
// var upload = multer({
//   i: 2,
//   storage: storage,
//   limits: {fileSize: 10000000},
//   fileFilter: function (req, file, cb) {
//     console.log(req.body.description, 'and then');
//     //validate the inputs
//
//     checkFileType(file, cb);
//   },
// }).single('file');
// console.log('andhere  to this');
//
// const validateUser = function(req, res, next){
//   const dotenv = require('dotenv');
//   dotenv.config();
//   var userToken = req.headers['x-access-token'];
//   if (!userToken) return res.send("no token provided");
//   var jwt = require("jsonwebtoken");
//   const decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
//     if (err) return res.send('Failed to authenticate');
//     console.log(decoded, 'here the validate');
//     return decoded
//   });
//   const user = require('./users');
//
//   user.findOne({email:decodedEmail}, function (err, docs) {
//     if(err){
//       console.log(err);
//     }else{
//       if(!docs){
//         return res.send("no token provided")
//       }else{
//         next()
//       }
//     }
//   })
// };

router.get('/adminDetail', adminDetail);
router.post('/loginUser', loginUser);
router.post('/signUpUser', signup);
// router.post('/uploadeventImage', addevent.uploadProductImage);
/*router.post('/editeventUpdate', addevent.editaddeventUpdate);*/
router.get('/dashboard', dashboard);
router.get('/showEvent',showEvent);
router.post('/feedback', feedback.addNewFeedback);
router.post('/register', register.addNewregister);
router.post('/hackhaton', hackhaton.addNewHackhaton);
router.post('/contact', contact.addNewContact);

router.post('/changeeventStatus', adminChangeStatus);
//router.route('/addevent').post(validateUser, upload, addevent.addNewEvent );
router.post('/addevent',addevent.addNewEvent );
router.post('/updateevent', updateevent);
router.get('/editevent', editevent);
router.get('/deleteUser', deleteUser);

module.exports = router;






