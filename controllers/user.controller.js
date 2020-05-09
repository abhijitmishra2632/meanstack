const moongoose = require('mongoose');

const User = moongoose.model('User');

module.exports.register = (req,res,next)=>{
    console.log('inside register function...');
    var user = new User();
    user.fullName = req.body.fullName;
    user.mobile = req.body.mobile;
    user.email = req.body.email;
    user.password = req.body.password;
    console.log("1."+req.body.mobile);
    user.save((err,doc)=>{
        if(!err)
            res.send('Saved successfully : '+doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                res.send('Some Error : '+err);
            }
    });
}