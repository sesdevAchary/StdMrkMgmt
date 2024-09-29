import express from "express"
const router = express.Router();

const studentMarkManagement= require('../models/studentMark')

// Routes for Crud APi

router.post('/studentinfo', studentMarkManagement.createinfo);
router.get('/studentinfo', studentMarkManagement.getinfo);
router.get('/studentinfo/:id', studentMarkManagement.getinfobyId);
router.put('/studentinfo/:id', studentMarkManagement.updateinfo);
router.delete('/studentinfo/:id', studentMarkManagement.deleteinfo);


module.exports = router;