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
        try{
        console.log("fetching the Student's data..");
        const response = await axios.get(`${API_URL}/${id}`);
        console.log(response.data);
        setStudent(response.data);
        } catch(error){
            console.errror(`error in fetching student data:`,error.response || error.message);
            setShowNotification({ type: 'error', text: 'Error loading student  details.' });


        }

    };
    fetchStudent();
},[id]);


const deleteStudent=async()=>{
    try{
        await axios.delete(`${API_URL}/${id}`);
        setShowNotification({type:'Success',text:'student  deleted successfully'}); 
        setTimeout(()=>navigate('/'),3000);
    } catch(error){
        console.error(`error fetching the student `,error);
        setShowNotification({type:'error',text:'could not find the student'});
    }

};



// to close notifcation state //
const handleCloseNotification=()=>{
    setShowNotification(null);      {/* there is no notification to show anymore*/}

}



// to check whether the student and showNotfication are falsy(e.g. null, undefined, or false)  //
if(!student && !showNotification ){
    return <div className='box-container'>Loading still </div> ; {/* if true  then it renders that the prson data is being fetched || not yet available */};

};




// if  the patient data is still not loaded for there shows an error notification //
if (!patient && showNotification) {
    return <div className="box-container">Error loading patient details.</div>; {/* displays an error message indicating that there was an issue loading the patient details.*/}
  }