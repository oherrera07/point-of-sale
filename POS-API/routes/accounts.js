var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { create, requestAccount } = require('../db/requests');
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

router.post('/login',
    body('email').isEmail().withMessage('Must be a valid Email'),
    body('password').isLength({min: 8}).withMessage('The password needs to be at least 8 characters long'),
    function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const credentials = req.body;

        requestAccount(credentials.email, (err, [account]) => {
            if(err){
                return next(err);
            }
            if(!account){
                return res.sendStatus(404);
            }
            bcrypt.compare(credentials.password, account.hash, function(err, result) {
                if(err) return next(err);
                if(!result) return res.sendStatus(401);
                let token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + 60,
                    id: account.id
                  }, process.env.SECRET);
                res.send({ token: token });
            });
        })
    })

module.exports = router;