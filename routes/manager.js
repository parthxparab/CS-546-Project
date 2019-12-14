const express = require('express');
const manager = require('../database-utils/Manager')
const router = express.Router();


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


router.get('/:id', async(req, res) => {
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
            res.render('templates/manager_details', { searchDetail: man });
        }
        res.status(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.post('/manager_details', async(req, res) => {
    try {
        console.log('starthere')
        console.log(req.body)
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

router.post('/update', async(req, res) => {
    try {
        const firstName = res.body.FirstNameMan;
        const man = await manager.getManagerByUserID()
        console.log(man)
        if (man.length == 0) {
            res.render('error', { errorMsg: "No data to display" });
        } else {
            res.render('templates/manager_update', { searchDetail: man });
            res.status(200);
        }
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.post('/updated', async(req, res) => {
    try {
        const firstName = res.body.FirstNameMan;
        const lastName = res.body.LastNameEmp;
        const email = res.body.EmailEmp;
        const budget = res.body.BudgetEmp;

        const man = await manager.updatedManager(firstName, lastName, email, budget)
        console.log(man)
        if (man.length == 0) {
            res.render('error', { errorMsg: "No data to display" });
        } else {

            res.status(200);
        }
    } catch (e) {
        res.status(500).json({ error: e });
    }
});










module.exports = router;