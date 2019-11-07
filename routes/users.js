const signup = require("../login-signup-utils/signup");
const login = require("../login-signup-utils/login");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use('/', router);
app.use(loginError);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = function(app){

    app.get('/', function(req, res){
        res.render("templates/index");
    });

    app.get('/login', function(req, res){
       res.render("templates/login");
    });

    app.get('/signup', function(req, res){
        res.render("templates/signup");


    });

    app.post('/login', async function(req, res){
        const username = req.body.username;
        const password = req.body.password;
        try {
            await login.loginUser(username, password);
            res.send("Successfully logged in!");
        }catch(e){
            res.send("An error occurred.");

        }
    });

    app.post('/createacc', async function(req, res){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
       try{
           await signup.createAcc(firstname, lastname, email, username, password);
           res.render("templates/success");

       }catch(e){
            res.send("Account creation unsuccessful!");
       }

    });

    app.post('/createacc', async function(req, res){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        await signup.createAcc(firstname, lastname, email, username, password);

        res.render("templates/success");
    });

};

function loginError (err, req, res, next) {
    console.error(err.stack);
    next(err)
}