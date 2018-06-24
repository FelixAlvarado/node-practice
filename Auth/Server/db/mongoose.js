const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://authUser:a123456@ds217131.mlab.com:17131/auth')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;