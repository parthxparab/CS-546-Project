const express = require('express');
const router = express.Router();
const emp = require('../database-utils/Employee')
const xss=require("xss")


router.get('/', async(req, res) => {
    try {
        res.render('templates/employee_main');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/empprof/:id', async(req, res) => {
    try {
        //console.log('this')
        console.log(req.params.id)
        if (!req.params.id) {
            res.status(400).render("templates/error", { errorMsg: "Something wrong with parameters" })
        }
        // if (isNaN(req.params.id)) {
        //     res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        // }

        const post = await emp.getEmployeeByUser(req.params.id);
        console.log(post)
        res.render('templates/employee_profile', { searchDetail: post });
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeehours', async(req, res) => {
<<<<<<< HEAD
    try {
        res.render('templates/employee_hours');
=======
    try{
        res.render('templates/employee_hoursupdate');
>>>>>>> 22e5ea73b12bb721b62fe08dfe2f064fbd789baa
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post('/employeehours', async(req, res) => {
    try{
        var userName=xss(req.body.userName)
        var start=xss(req.body.start)
        var end=xss(req.body.end)
        var hours=xss(req.body.hours)
        const updatehours=await emp.updateHours(userName,hours,start,)
        console.log(updatehours)

        //res.render('templates/employee_hoursupdate');
        //res.status(200);
    }catch (e) {
        res.status(500).json({ error: e });
    }
});



router.get('/employeereports', async(req, res) => {
    try {
        res.render('templates/employee_reports');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeeconman', async(req, res) => {
    try {
        res.render('templates/employee_con_man');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/successhours', async(req, res) => {
    try {
        console.log
        res.render('templates/hours_success');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.post('/emphours', async(req, res) => {
<<<<<<< HEAD

    try {
        if ((!req.body.id) || (!req.body.Workinghours) || (!req.body.name) || (req.body.Workinghours < 0) || (isNaN(req.body.Workinghours) || (typeof(req.body.name) != 'string'))) {
            res.status(400).render("templates/error", { errorMsg: "Please enter correct parameters" })
        }
        const data = await emp.updateHours(req.body.id, req.body.Workinghours)
        console.log(data)
        if (!data) {
            res.status(400).render("templates/error", { errorMsg: "Something wrong with the paramenters" })
        } else {
            res.render('templates/successhrs', { searchDetail: data });
        }

    } catch (e) {
        res.status(500).json({ error: e });
=======
    try{
    console.log(req.body)
    console.log(req.body.id);
    console.log(req.body.Workinghours);
    console.log(req.body.names)
    const data = await emp.updateHours(req.body.id, req.body.Workinghours)
    console.log(data)
    if (!data) {
        res.status(400).render("error", { errorMsg: "Something wrong with the paramenters" })
    } else {
        res.render('templates/success', { searchDetail: data });
>>>>>>> 22e5ea73b12bb721b62fe08dfe2f064fbd789baa
    }
    }catch (e) {
    res.status(500).json({error: e});
    }


});


module.exports = router;