const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: 'Full name can\'t be empty'
    },
    mobile:{
        type:Number,
        required: 'Mobile Number can\'t be empty',
        unique: true
    },
    email:{
        type:String,
        required: 'Email can\'t be empty'
    },
    password:{
        type:String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltsecrete:String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.pre('save',function(next){
    console.log('Password is: '+this.password);
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(this.password,salt,(err , hash)=>{
            this.password = hash;
            this.saltsecrete = salt;
            next();
        })
    })
})
mongoose.model('User', userSchema);