mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/event';
mongoose.connect(dbUrl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('errorho', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


var user = mongoose.Schema({
    name: String,
    email: String,
    password: {
        type:String,
    },
});

var editevent = mongoose.Schema({
    userId:String,
    description : String,
    dateCreated: Date,

});
var feedback=mongoose.Schema({
    email:String,
    feedback:String,
})
;

var event = mongoose.Schema({
    userId:String,
    description : String,
    dateCreated: Date,
});
var register = mongoose.Schema({
    email:String,
    name:String,
    phoneNumber:Number,
    company:String,
    country:String,
    message:String,
});

var contact=mongoose.Schema({
    name: String,
    email: String,
    phoneNumber:Number,
    company: String,
    country:String,
})

var hackhaton = mongoose.Schema({
    name:String,
    email:String,
    phoneNumber:Number,
    title:String,
    nameOFSchool:String,
    year:String,
    level:String,
    topicOfInterest:String,
    knowledge:String,
    personalLaptop:String,
    gender:String,
    reasonForParticipation:String,
    whatWillYouDo:String,
    comment:String,
});

mongoose.model('event', event);
mongoose.model('contact', contact);
mongoose.model('hackhaton', hackhaton);
mongoose.model('register', register);
mongoose.model('feedback',feedback)
mongoose.model('event', event);
mongoose.model('editevent', editevent);
mongoose.model('user', user);
