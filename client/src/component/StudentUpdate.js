



import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL) // logs the URL to the console for debugging purposes.//


const StudentUpdate=()=>{
    const {id} =useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', roll_no:'',gender:''});



    // to fetech student  data when id changes //
    useEffect(()=>{
        const fetchStudent= async()=>{
            try{
                const response = await axios.get(`${API_URL}/$ {id}`);
                setStudent(response.data);
            } catch (error){
                console.error("error fetching the student:",error);
            }
        };
        fetchStudent();
    } ,[id]);



// to handle change in forms updates the patient state with the new value of the form field. //
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setStudent({...student,[name]:value}); 
    }




// handle update phase //
 const handleUpdate = async(e)=>{
    e.preventDefault();
    try{
        await axios.put(`${API_URL}/${id}`,student);
        navigate(`/detail/${id}`);


    }catch(error){
        console.log(`error in updating the student details:`,error);
    }

 };


 // handle cancel operation //
 const handleCancel =()=>{
    navigate (`/detail/${id}`); 
 };


 // handleHome function //
  const handleHome=()=>{
    navigate('/list'); 
  }
 


  // the jsx content //
return (
  <div className='box-container'>
    <h1>Update Student</h1>  
    <form onSubmit = {handleUpdate} className="form-container">
    <input type='text' name='name' placeholder='Name' value ={student.name}  onChange={handleChange} required className ='input-field' />

    <select type='select' placeholder='select gender' value={student.gender} onchange={handleChange} require className='input-field'>
      
      
         <option value="male">Male</option>
         <option value ="female">Female</option>
         <option value="other">Others</option>  </select>


        <div className="person-actions">
        <button type="submit" className="btn btn-update">Update</button>
        <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
        <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
        </form>
        </div>
        
      
     );

};

export default StudentUpdate;