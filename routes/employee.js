const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  try{
  res.render('templates/employee_main');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});

router.get('/empprof', async (req, res) => {
  try{
  res.render('templates/employee_profile');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});


router.get('/employeehours', async (req, res) => {
  try{
  res.render('templates/employee_hours');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});

router.get('/employeereports', async (req, res) => {
  try{
  res.render('templates/employee_reports');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});


router.get('/employeeconman', async (req, res) => {
  try{
  res.render('templates/employee_con_man');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});


module.exports = router;