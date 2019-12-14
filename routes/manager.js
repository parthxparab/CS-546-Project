const express = require('express');
const manager = require('../database-utils/Manager')
const help = require('../database-utils/Help')
const router = express.Router();
const tran = require('../database-utils/transaction')
const emp = require('../database-utils/Employee')

router.get('/transaction', async(req, res) => {
    try {
        x = Object.keys(req.query).toString()
        const tra = await tran.getTransactionByUsernameMan(x)
        console.log("transaction: ", tra)
        
        //res.render('templates/employee_profile_two', { searchDetail: post });
        res.status(200).json(tra);
    } catch (e) {
        res.status(500).json({ error: e });
    }

});

router.get('/', async(req, res) => {
    try {
        const man = await manager.getAllManager();
        if (man.length == 0) {
            res.render('error', { errorMsg: "No data to display" });
        } else {
            res.render('templates/manager_main', { searchDetail: man });
        }
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/resolve/:id', async(req, res)=> {

    let id = req.params.id
    let managerName = await help.getManagerByTicketID(id)

    if (req.session.user !== managerName.managerID){
        res.status(403).send("Forbidden")
        return
    }

   await help.markResolved(id)

    //res.redirect("/manager/" + managerName.managerID)
    res.redirect('back')



});

router.get('/pending/:id', async(req, res) => {


    try {
       // console.log(req.params.id)
        if (!req.params.id) {
            res.status(400).render("error", { errorMsg: "Something wrong with parameters" })
        }
        const man = await emp.getEmployeeByPay(req.params.id);
        if (man.length == 0) {
            res.render('error', { errorMsg: "No manager found for the respective id" });
        } else {
            res.render('templates/pending', { searchDetail: man });
        }
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/users/:id', async(req, res) => {


    if (req.session.user !== req.params.id){
        res.status(403).send("Forbidden")
        return
    }
    const ticketArray = await help.getHelpData(req.params.id)
    const employeeList = await emp.getEmployeesByManager(req.params.id)

    console.log(employeeList)



    try {
        if (!req.params.id) {
            res.status(400).render("error", { errorMsg: "Something wrong with parameters" })
        }
        // if (isNaN(req.params.id)) {
        //     res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        // }
        const man = await manager.getManagerByUserID(req.params.id);
        if (man.length == 0) {
            res.render('error', { errorMsg: "No manager found for the respective id" });
        } else {



            res.render('templates/manager_details', { searchDetail: man, tickets: ticketArray, employees: employeeList });
        }
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.post('/manager_details', async(req, res) => {
    try {
        console.log('starthere')
        console.log(req.body.payinput)
        const man = await manager.isPaid(req.body.payinput);
        console.log("MAN BELOW")
        console.log(man)
        if (man.length == 0) {
            res.render('error', { errorMsg: "No data to display" });
        } else {
            res.redirect('back');
        }
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});






module.exports = router;