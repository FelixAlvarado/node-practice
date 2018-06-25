const router = require('express').Router();

router.get('/private', (req,res) => {
    let obj = {
        message: 'This is a secret ROUTE',
        secret: 'YOU MAY PASS',
        _id: req._id
    };
    return res.status(200).send(obj);
});

module.exports = router;