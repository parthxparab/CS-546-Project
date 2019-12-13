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