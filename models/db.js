const mongoose = require('mongoose');

//MongoClient.connect(url, {useNewUrlParser: true } )
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err) => {
    if(!err) {console.log('Connection Successfull...')}
    else { console.log('Error in mongoDB connection :' + JSON.stringify(err,undefined,2));}
});
/* mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err) {console.log('Connection Successfull...')}
    else { console.log('Error in mongoDB connection :' + JSON.stringify(err,undefined,2));}
}); */

require('./user.model');