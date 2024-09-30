import mongoose from 'mongoose'

const studentInfoSchema= new mongoose.scheema({
    first_name:{
        type: String,
        required: true,  // student  name is compulsory 
      },
      last_name:{
        type: String,
        required: true,
      },
      unique_id:{
        type:integer,
        required:true,
        unique:true
      },
      mail_id:{
        type:string,
        required:true,
        unique:true
      },
      current_address:{ 
        type: String,
        required: true
      },
      attendence:{
        type:float,
        required:true
      },
      total_score:{
        type:float,
        required:true
      },
      avg_cgpa:{
        type:float,
        required:true
         },
    
});

const studentModel= mongoose.model(studentInfoSchema)

module.exports= studentModel;