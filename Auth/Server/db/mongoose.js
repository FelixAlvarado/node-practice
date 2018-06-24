const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('')
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;