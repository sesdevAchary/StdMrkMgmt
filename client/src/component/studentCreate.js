import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Notification from './notification'

const API_URL = process.env.REACT_APP_API_URL; /* Retrieves the API URL from the environment variables, which is used to send requests to the server.*/


const PatientAdd = ({onPatientAdd=()=>{}})=>{      {/* functional component with a prop*/}
    const [name,setName]=useState(' ');            {/* store student's  name*/}
    const[gender,setGender] = useState( ' ');       {/* stores student's gender*/}
    const[roll_no,setNumber]=useState( ' ');      { /* stores student's roll number*/}
    const[ navigate]=useNavigate();               { /*to programmatically navigate to different routes. */}
    const [showNotification, setShowNotification] = useState(null);{ /* for showing notifications, initialized to null*/}


// handle form submsission //

const handleSubmit= async(e)=>{
    e.preventdefault()

    if(!name || !gender || !roll_no  ) return ; {/* f any of them are missing, the function exits early (does not proceed with the API request*/}

   try{
    const response = await axios.post(API_URL, {name,gender,roll_no});
    const newStudentID = response.data.id;


// clearing the form fields
    setName( ' ' );
    setGender( ' ' );
    setNumber( ' ' );

// To show success notification//
setShowNotification({type:'success', text: `Patient "${response.data.name}" added successfully!`});


// To navigate into new person's page//
setTimeout(()=>navigate(`/detail/${newPatientId}`),2000);  {/* wait for 2 second before navigating*/}

   } catch(error){
    console.error(`error while adding a new person into this`,error);
    setShowNotification({type:'error',text:`failed to add new student here . we sincerely request you to go through it again `});
   }
};

const handleCloseNotification = () => {
    setShowNotification(null);

};

return(
    <div className="box-container">
                <h2>Add Patient</h2>
                <form onSubmit={handleSubmit} className="form-container">
                <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required className="input-field"/>
                <input type="text" placeholder="gender" value={gender} onChange={(e) => setAge(e.target.value)} required className="input-field" />
                <input type="number" placeholder="roll_no" value={roll_no} onChange={(e) => setNumber(e.target.value)} required className="input-field" />
                

                <select type='select' placeholder="SelectGender" value={gender} onChange={(e) => setGender(e.target.value)} required className='input-field'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option> </select>

                <div className="button-group">
                <button type="submit" className="btn btn-add">Add Patient</button>
                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
                </div>
                </form>
                {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
                </div>
        );
    };


    export default PatientAdd;