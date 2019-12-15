const express = require('express');
const router = express.Router();
const xss=require("xss")
const emp = require('../database-utils/Employee')
const man = require('../database-utils/Manager')
const utils = require("../login-signup-utils/utils");



router.get('/', async(req, res) => {
    try {
        res.render('templates/newemployee_main');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post('/',async(req,res)=>{

    try {
        console.log(req.body)
        var firstName=xss(req.body.firstName)
        var lastName=xss(req.body.lastName)
        var userName=xss(req.body.newusername)
        userName=userName.toLowerCase();
        var email=xss(req.body.empemail)
        var hours=xss(req.body.emphours)
        var salary=xss(req.body.empsalary)
        var managerid=xss(req.body.managerID)
        managerid=managerid.toLowerCase();
        var paydate=xss(req.body.date)
        var jobtitle=xss(req.body.jobtitle)
        console.log(managerid)
        const empusercheck=await utils.usernameExists(userName)
        if(empusercheck===true){
            console.log("Username already taken!");
            res.render('templates/newemployee_main',{error:"Please try different employee username"});
            return
        }
        const usernamecheckemp=await emp.getEmployeeByUser(userName)
        console.log(usernamecheckemp)
        if(usernamecheckemp!==null){
            console.log("Username already taken!");
            res.render('templates/newemployee_main',{error:"Please try different employee username"});
            return
        }
        const mancheck=await utils.usernameExists(managerid)
        if(mancheck!==true){
            console.log("Wrong employee id");
            res.render('templates/newemployee_main',{error:"Please check the manager id"});
            return
        }
        const empAdd= await emp.addEmployee(firstName,lastName,userName,email,hours,salary,managerid,paydate,jobtitle)
        console.log(empAdd)
        res.render('templates/newemployee_main',{success:"Employee Added successfuly"})

  } catch (e) {
        res.status(500).json({ error: e });
    }
});



module.exports = router;