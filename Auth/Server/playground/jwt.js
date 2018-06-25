const jwt = require('jsonwebtoken');

//jwt
let payload = {
    _id:"hello JWT"
};

let secret = '12345678';

let token = jwt.sign(payload,secret, {
    algorithm:''
});

// console.log('my token is',token);

let decoded = jwt.verify(token, secret);

console.log(decoded);