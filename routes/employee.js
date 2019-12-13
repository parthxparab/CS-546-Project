const express = require('express');
const router = express.Router();
const tran = require('../database-utils/transaction')
const emp = require('../database-utils/Employee')
const xss = require("xss")


router.get('/transaction', async(req, res) => {
    try {
        x = Object.keys(req.query).toString()
        console.log("X "+x)
        const tra = await tran.getTransactionByUsername(x)
        console.log("transaction: ", tra)
        
        //res.render('templates/employee_profile_two', { searchDetail: post });
        res.status(200).json(tra);
    } catch (e) {
        res.status(500).json({ error: e });
    }


});

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

router.get('/empprof_two/:id', async(req, res) => {
    try {
        //console.log('this')
   //     console.log(req.params.id)
        if (!req.params.id) {
            res.status(400).render("error", { errorMsg: "Something wrong with parameters" })
        }
        // if (isNaN(req.params.id)) {
        //     res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        // }

        const post = await emp.getEmployeeByUser(req.params.id);
     //   console.log(post)
        res.render('templates/employee_profile_two', { searchDetail: post });
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/employeedetails', async(req, res) => {
    try {
        res.render('templates/employee_details');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeehours/success', async(req, res) => {
    try {
        res.render('templates/employee_hourssuccess');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeehours/failure', async(req, res) => {
    try {
        res.render('templates/employee_hoursfailed');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post('/employeehrs', async(req, res) => {
    try {
        var userName = xss(req.body.UsernameEmp)
        var start = xss(req.body.startdate)
        var end = xss(req.body.enddate)
        var hours = xss(req.body.Workinghours)
        const updatehours = await emp.updateHours(userName, hours, start, end)
        console.log(updatehours)
        if (typeof(updatehours) === "undefined") {
            console.log("test")
                //res.render("templates/employee_hoursupdate", {error: "Update failed please check the information"});
                //res.redirect('/employee/employeehours/failure')
                //return
                //httpsMsgs.send500(req,res,"Update Not successful")
            res.sendStatus(403)
            return
        }
        res.json({ success: true });
        //res.redirect('/employeehours/success')
        //res.render("templates/newemployee_main", {error: "Working hours updated successfuly"});
        //res.json({suc: true});
        //res.render('templates/employee_hoursupdate');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/employeehours', async(req, res) => {
    try {
        res.render('templates/employee_hoursupdate');
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

// router.post('/emphours', async(req, res) => {

//     try {
//         if ((!req.body.id) || (!req.body.Workinghours) || (!req.body.name) || (req.body.Workinghours < 0) || (isNaN(req.body.Workinghours) || (typeof(req.body.name) != 'string'))) {
//             res.status(400).render("templates/error", { errorMsg: "Please enter correct parameters" })
//         }
//         const data = await emp.updateHours(req.body.id, req.body.Workinghours)
//         console.log(data)
//         if (!data) {
//             res.status(400).render("templates/error", { errorMsg: "Something wrong with the paramenters" })
//         } else {
//             res.render('templates/successhrs', { searchDetail: data });
//         }

//     } catch (e) {
//         res.status(500).json({ error: e });
//     }


// });



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
    } catch (e) {
        res.status(500).json({ error: e });
    }
});





module.exports = router;