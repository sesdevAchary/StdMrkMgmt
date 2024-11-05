import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Notification from './notification'

const API_URL = process.env.REACT_APP_API_URL; /* Retrieves the API URL from the environment variables, which is used to send requests to the server.*/


const PatientAdd = ({onPatientAdd=()=>{}})=>{      {/* functional component with a prop*/}
    const [name,setName]=useState(' ');            /* store student's  name*/
    const[gender,setGender] = useState( ' ')       /* stores student's gender*/
    const[roll_no,setNumber]=useState( ' ');       /* stores student's roll number*/
    const[ navigate]=useNavigate();                /*to programmatically navigate to different routes. */
    const [showNotification, setShowNotification] = useState(null); /* for showing notifications, initialized to null*/


// handle form submsission //

const handleSubmit= async(e)=>{
    e.preventdefault()

    if(!name || !gender || !roll_no  ) return ; {/* f any of them are missing, the function exits early (does not proceed with the API request*/}

   try{
    const response = await axios.post(API_URL, {name,gender,roll_no});
    const newStudentID = response.data.id;


// clearing the form fields
    setName( ' ');
    setGender( ' ');
    setNumber( ' ');

// To show success notification//
setShowNotification({type:'success', text: `Patient "${response.data.name}" added successfully!`});
   }

}



}