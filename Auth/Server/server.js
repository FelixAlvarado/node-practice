const express = require('express');

const app = express();
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const private = require('./routes/private');

app.use(bodyParser.json());
// const bcrypt = require('bcrypt');

// let pw = "myPW";
// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync("myPW", salt);
// console.log("my hashed password is", hashedPassword);

// let compare = bcrypt.compareSync(pw,hashedPassword);
// console.log("comparing pw ", compare);

// const userRoutes = require('./routes/user_roues');
// const bodyParser = require('body-parser');
// app.user(body)




app.get('/', (req,res) => {
    res.send('welcome');
});

app.use('/user', userRoutes);
app.use('/private', private);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});