const mongoose = require('mongoose');

const studentInfoSchema= new mongoose.Schema({
    first_name:{
        type: String,
        required: true,  // student  name is compulsory 
      },
      unique_id:{
        type: Number,
        required:true,
      },
      mail_id:{
        type: String,
        required:true,
      },
      current_address:{ 
        type: String,
        required: true
      },
      attendence:{
        type: Number,
        required:true
      },
      total_score:{
        type: Number,
        required:true
      },
      avg_cgpa:{
        type: Number,
        required:true
         }
    
});

const studentModel= mongoose.model('Student',studentInfoSchema)

module.exports= studentModel;