const signup = require("../login-signup-utils/signup");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use('/', router);

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

    app.post('/login', function(req, res){
       res.send("Successfully logged in!");
    });

    app.post('/createacc', function(req, res){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        let signupSuccessful = signup.createAcc(firstname, lastname, email, username, password);

          res.render("templates/success", {successful: signupSuccessful});
    });

    app.post('/createacc', async function(req, res){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        await signup.createAcc(firstname, lastname, email, username, password);

        res.render("templates/success", {successful: signupSuccessful});
    });

};