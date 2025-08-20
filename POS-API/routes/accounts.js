var express = require('express');
var bcrypt = require('bcrypt');
//var jwt = require('jsonwebtoken');
const { create } = require('../db/requests');
var router = express.Router();
const { body, validationResult } = require('express-validator');

/* POST Create Account */
router.post('/signup',
    body('email').isEmail().withMessage('Must be a valid Email'),
    body('password').isLength({min: 8}).withMessage('The password needs to be at least 8 characters long'),
    function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const newAccount = req.body;
        bcrypt.hash(newAccount.password, 12, function (err, hash) {
            if (err) {
                return next(err);
            }
        create('accounts', { email: newAccount.email, hash}, (err, account) => {
            if(err){
                return next(err);
            }
            console.log('created new account');
            res.send(account);
        });
    });
});

module.exports = router;