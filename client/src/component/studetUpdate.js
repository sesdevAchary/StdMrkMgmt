import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL) // logs the URL to the console for debugging purposes.//


const studentId=()=>{
    const {id} =useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', roll_no:'',gender:''});



    // to fetech studnet data when id changes //
    useEffect(()=>{
        const fetchStudent= async()=>{
            try{
                const response = await axios .get(`${API_URL}/$ {id}`);
                setStudent(response.data);
            } catch (error){
                console.error("error fetching the student:",error);
            }
        };
        fetchStudent();
    } ,[id]);



// to handle change in forms updates the patient state with the new value of the form field. //
    const handleChange=(e)=>{
        const{name,value}=e.target; {/* destructuring the e.target object to extract the name and value properties.*/}
        setStudent({...student,[name]:value}); {/* e.g.-> name:Rohan */}
    }




// handle update phase //
 const handleUpdate = async(e)=>{
    e.preventDefault();
    try{
        await axios.put(`${API_URL}/${id}`,student);{/*id is used in the url and the student obj contains the updated data sent as request body*/}
        navigate(`/detail/${id}`); {/* comes from r-r-d,user is redirected to the student's detail page after the updation */}


    }catch(error){
        console.log(`error in updating the student details:`,error);
    }

 };


 // handle cancel operation //
 const handleCancel =()=>{
    navigate (`/detail/${id}`); {/* navigating back to the student details page */}
 };


 // handleHome function //
  const handleHome=()=>{
    navigate('/'); {/* navigating back to the home page */}
  }
 


  // the jsx content //
reutrn (
  <div className='box-container'>
    <h1>Update Student</h1>  
    <form onSubmit = {handleUpdate} className="form-container"
    <input type='text' name='name' placeholder='Name' value ={student.name}  onChange={}
  </div>
)


}