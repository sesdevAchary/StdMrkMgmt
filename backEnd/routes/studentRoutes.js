import express from 'express'
const router= express.Router();

const studentController = require('../controllers/studentController.js');


router.post('/student', studentController.createstudent);      // Create a newSTUDENT 
router.get('/student', studentController.getAllRstudent);      // Get all STUDENT 
router.get('/student/:id', studentController.getstudentById);  // Get a singleSTUDENT  by ID
router.put('/student/:id', studentController.updatestudent);   // Update aSTUDENT  by ID
router.delete('/student/:id', studentController.deletestudent);// Delete aSTUDENT  by ID

module.exports = router;
