import React, { useState, useEffect } from 'react'; /*React hooks for managing state and side effects in functional components.*/
import axios from 'axios';    /* a promise based http client for making request */
import { useParams, Link, useNavigate } from 'react-router-dom';  /* useParams: To access the route parameters (specifically, the student ID in this case).*/
import Notification from './Notification';


// API URL ENVIRONMENT VARIABLES //

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);   /* for debugging the apI url*/


// Component State and Variables //
const StudentDetails=()=>{

const { id } = useParams();       /* access the student id from the url params */
const navigate = useNavigate();    /* hook to navigate programmatically to different routes */
const [student, setStudent] = useState(null);     /* to hold the patient Data */
const [showNotification, setShowNotification] = useState(null);   /* State to handle notifications.*/


// Fetching Student Data //

useEffect(() => {
    const fetchStudent = async () => {
        try {
            console.log("fetching the Student's data..");
            const response = await axios.get(`${API_URL}/${id}`);
            console.log(response.data);
            setStudent(response.data);
        } catch (error) {
            console.errror(`error in fetching student data:`, error.response || error.message);
            setShowNotification({ type: 'error', text: 'Error loading student  details.' });
        }

    };
    fetchStudent();
}, [id]);


// delete student data //

const deleteStudent = async () => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        setShowNotification({ type: 'Success', text: 'student  deleted successfully' });
        setTimeout(() => navigate('/'), 3000);
    } catch (error) {
        console.error(`error fetching the student `, error);
        setShowNotification({ type: 'error', text: 'could not find the student' });
    }

};



// to close notifcation state //
const handleCloseNotification = () => {
    setShowNotification(null); 

}



// to check whether the student and showNotfication are falsy(e.g. null, undefined, or false)  //
if (!student && !showNotification) {
    return <div className='box-container'>Loading still </div>; 

};




// if  the student  data is still not loaded for there shows an error notification //
if (!student && showNotification) {
    return <div className="box-container">Error loading patient details.</div>;
}



// The Jsx Content //
return(
   <div clssName='box-container'><h2>Name:{student.name}</h2> {/* it will render the student name inside the h2 tag*/}

   <div className='student-info'><p> gender:{student.gender}</p></div>
 
   <div className="patient-info"><p>roll_no: {student.roll_no}</p></div>

  <div className='student-actions'>
    <Link to={`/edit/${student.id}`} className="btn btn-update">Edit</Link>; {/*to prop specidies the target route to navigate,uses template literals to dynamically generate the url(e.g.edit/21) */}
  

   <button onclick={deleteStudent} className='btn btn-delete'>Delete</button>; {/* button triggers the deleteStudent function when clicked */}
   
   <link to='/' className='btn btn-back'>Back to home</link>  {/* Another Link component that takes the user back to the home page (/) */}
</div>

{showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
</div>
);
};

export default StudentDetails;