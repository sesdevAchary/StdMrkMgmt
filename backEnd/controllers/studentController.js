const studentModel = require('../model/studentModel'); //importing the student model 

exports.createStudentInfo = async (req, res) => {
    try {
        let newStudent = new studentModel({
            first_name: req.body.first_name,
            unique_id: req.body.unique_id,
            mail_id: req.body.mail_id,
            current_address: req.body.current_address,
            attendence: req.body.attendence,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa
        });
        newStudent = await newStudent.save();
        res.send(newStudent)
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong

    }
};


// get single student information

exports.getstudentInfo = async (req, res) => {
    try {
        const studentInfo = await studentModel.find(); //get all the student info from the db
        res.send(studentInfo);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// get studetnt by id........
exports.getstudentInfoById = async (req, res) => {
    try {
        const studentInfoById = await studentModel.findById(req.params.Id);
        if (!studentInfoById) {
            res.status(404).send("student ID not found")
        }

        else {
            res.send(studentInfoById)
        }
        res.send
    } catch (error) {
        res.status(400).send(error.message)
    }
}


// update student info by ID//


// delete a student by its Id
exports.deleteStudentById = async (req, res) => {
    try {
        const deleteStudentById = await studentModel.findByIdAndDelete(req.params.Id)
        if (!deleteStudentById) return res.status(404).send("failed to update")
        else {
            res.send("deleted")
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

// update student info by ID//
exports.updateStudentById = async(req,res) => {
    try{
     const updateStudent = await studentModel.findByIdAndUpdate(req.params.Id ,{
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        unique_id: req.body.unique_id,
        mail_id: req.body.mail_id,
        current_address: req.body.current_address,
        attendence: req.body.attendence,
        total_score: req.body.total_score,
        avg_cgpa: req.body.avg_cgpa
}, { new: true });
     if(!updateStudent) res.status(404).send("coudln't update  student Id")
         else{
        res.send(updateStudent)
     }
    }catch(error){
     res.status(400).send(error)
    }
}

// exports.updatePatient = async (req, res) => {
//     try {
//         const updatedPatient = await ClinicModel.findByIdAndUpdate(req.params.id, {
//             Patient_name: req.body.name, age: req.body.age, gender:req.body.gender, 
//             contact_number:req.body.contact_number, admit_Date: req.body.admit_Date,
//             medical_history:req.body.medical_history,admit:req.body.admit
//         }, { new: true }); // Return the updated patientinfo

//         if (!updatedPatient) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
//         res.send(updatedPatient); // Send the updated patientinfo as a response
//     } catch (err) {
//         res.status(400).send(err.message); // Send an error response if something goes wrong
//     }
// };
