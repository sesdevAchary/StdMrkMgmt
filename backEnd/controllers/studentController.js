import studentModel from '../model/studentModel'; //importing the student model 

exports.createStudentInfo=async(req,res)=>{
    try{
        let newStudent=new studentModel({
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            unique_id: req.body.unique_id,
            mail_id: req.body.mail_id,
            current_address: req.body.current_address,
            attendence: req.body.attendence,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa
        });
        newStudent=await newStudent.save();
        res.send(newStudent)
    }catch(error)
    {
        res.status(400).send(err.message); // Send an error response if something goes wrong

    }
};


// get single student information

exports.getstudentInfo=async(res,req)=>{
    try{
        const studentInfo=await  studentModel.find(); //get all the student info from the db
        res.send(studentInfo);
    }catch(err){
        res.status(400).send(err.message)
    }
    
}



// get student by Id 

exports.getstudentInfoById= async(req,res)=>{
    try{
        const studentInfoById=await studentModel.findById(req.params.id);
        if(!studentInfoById)return res.status(404).send("Student id not found");
        res.send(studentInfoById);
    }catch(err){
        res.status(400).send(err.message)
    }
}


// update student information by Id
exports.updateStudentInfo=async(req,res)=>{
    try{
        const updateInfo = await studentModel.updateById(req.params.id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            unique_id: req.body.unique_id,
            mail_id: req.body.mail_id,
            current_address: req.body.current_address,
            attendence: req.body.attendence,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa


        },{new:true}); // return the updated code .......
        if(!updateInfo) return res.status(404).send("Updated student id not found")
            else{
        res.send("Updated student id  found ",updateInfo);
        };
    } 
   
    catch(err){
        res.status(400).send(err)
    }

    }
