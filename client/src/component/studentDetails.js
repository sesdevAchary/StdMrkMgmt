import React,{useState,useEffect}from 'react'; /*React hooks for managing state and side effects in functional components.*/
import axios from 'axios';    /* a promise based http client for making request */
import {useParams,Link,useNavigate} from 'react-router-dom';  /* useParams: To access the route parameters (specifically, the student ID in this case).*/
import Notification from './Notification';


// API URL ENVIRONMENT VARIABLES //

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);   /* for debugging the apI url*/


// Component State and Variables //

const {id} = useParams();       /* access the student id from the url params */
const navigate = useNavigate();    /* hook to navigate programmatically to different routes */
const [student,setStudent]=useState(null);     /* to hold the patient Data */
const [showNotification, setShowNotification] = useState(null);   /* State to handle notifications.*/


// Fetching Student Data //

useEffect(()=>{
    const fetchStudent = async()=>{
        console.log("fetching the Student's data..");
        const respone = await axios.get(`${API_URL}/${id}`);

    }
})