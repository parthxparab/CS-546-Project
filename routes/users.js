const signup = require("../login-signup-utils/signup");
const login = require("../login-signup-utils/login");
const xss=require('xss')
const express = require('express');
const router = express.Router();


    router.get('/', function(req, res) {
       try{ 
        res.render("templates/index");
        }catch (e) {
        res.status(500).json({error: e});
      }
    });

    router.get('/login', function(req, res) {
        try{
        res.render("templates/login");
        }catch (e) {
        res.status(500).json({error: e});
        }
    });

    router.get('/signup', function(req, res) {
        try{
        res.render("templates/signup");
        }catch (e) {
        res.status(500).json({error: e});    
        }
    });


    router.post('/login', async function(req, res){
        try{
        const username = xss(req.body.username);
        const password = xss(req.body.password);
        console.log(req.session)
        if(!username){
            res.render("templates/login" , {error: "Username is empty"})
            res.status(401)
            return
            }
        
        if(!password){
            res.render("templates/login" , {error: "Password is empty"})
            res.status(401)
            return
            }

        let result = await login.loginUser(username, password);
        console.log("Result: " + result);

        if (result === true){
            req.session.manager=true
            req.session.username=username
            res.redirect("/manager/users/"+username);
            //res.render("templates/success");

        }else{
            res.render("templates/login", {error: result});
        }
    }catch (e) {
        res.status(500).json({error: e});
    }


    });

    router.post('/createacc', async function(req, res) {
        try{
        let firstname = xss(req.body.firstname);
        let lastname = xss(req.body.lastname);
        let email = xss(req.body.email);
        let username = xss(req.body.username);
        let password = xss(req.body.password);
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
        }catch (e) {
            res.status(500).json({error: e});
            }

    });


module.exports = router;