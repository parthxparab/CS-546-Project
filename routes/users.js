const signup = require("../login-signup-utils/signup");
const login = require("../login-signup-utils/login");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render("templates/index");
    });

    app.get('/login', function(req, res) {
        res.render("templates/login");
    });

    app.get('/signup', function(req, res) {
        res.render("templates/signup");


    });


    app.post('/login', async function(req, res){
        const username = req.body.username;
        const password = req.body.password;

        let result = await login.loginUser(username, password);
        console.log("Result: " + result);

        if (result === "Success"){
            res.render("templates/success");

        }else{
            res.render("templates/login", {error: result});
        }



    });

    app.post('/createacc', async function(req, res) {
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
            console.log("Test 1");
           let result = await signup.createAcc(firstname, lastname, email, username, password);
            console.log(result);
           if (result === "Success"){
                res.render("templates/success");
               console.log("Test 2");

           }else{
               console.log("Test 3");

               res.render("templates/signup", {error: result});
           }


    });


};

