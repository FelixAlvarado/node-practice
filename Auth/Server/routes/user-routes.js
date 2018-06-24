const express = require('express');
const router = express.Router;

router.post('/register', (req,res) => {
    console.log('this is a register route');
});

module.exports = router;