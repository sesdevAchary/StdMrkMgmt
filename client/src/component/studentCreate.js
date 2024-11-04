import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Notification from './notification'

const API_URL = process.env.REACT_APP_API_URL; /* Retrieves the API URL from the environment variables, which is used to send requests to the server.*/


const PatientAdd = ({onPatientAdd=()=>{}})=>{   {/* functional component with a prop*/}
    const [name,setName]=useState(' '); /* store student's  name*/
    const[gender,setGender] = useState( ' ') /* stores student's gender*/
    const[roll_no,setNumber]=useState( ' ');
    


}