const express = require('express');
const router = express.Router();
const emp = require('../database-utils/Employee')


router.get('/', async(req, res) => {
    try {
        res.render('templates/employee_main');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/empprof', async(req, res) => {
    try {
        //console.log('this')
        console.log(req.params.id)
        if (!req.params.id) {
            res.status(400).render("error", { errorMsg: "Something wrong with parameters" })
        }
        if (isNaN(req.params.id)) {
            res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        }

        const post = await emp.getEmployeeById(req.params.id);
        // res.render('posts/single', { details: post });
        // res.render(post)
        console.log(post)
        res.render('templates/employee_profile', { searchDetail: post });
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeehours', async(req, res) => {
    try{
        res.render('templates/employee_hours');
        res.status(200);
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
        res.render('templates/hours_success');
        res.status(200);
    } catch (e){
        res.status(500).json({ error: e });
    }
});


module.exports = router;