// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Notification from './Notification';

// const API_URL = process.env.REACT_APP_API_URL; // Retrieves the API URL from environment variables

// const StudentAdd = ({ onPatientAdd = () => {} ) => {
//   const [name, setName] = useState(''); // Initialize with empty strings
//   const [gender, setGender] = useState('');
//   const [roll_no, setNumber] = useState('');
//   const [showNotification, setShowNotification] = useState(null);

//   const navigate = useNavigate(); // Correct use of useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !gender || !roll_no) return; // Don't proceed if fields are empty

//     try {
//       const response = await axios.post(API_URL, { name, gender, roll_no });
//       const newStudentID = response.data.id;

//       // Clear form fields
//       setName('');
//       setgender('');
//       setNumber('');

//       // Show success notification
//       setShowNotification({ type: 'success', text: `Patient "${response.data.name}" added successfully!` });

//       // Navigate to the new student's detail page after 2 seconds
//       setTimeout(() => navigate(`/detail/${newStudentID}`), 2000);
//     } catch (error) {
//       console.error('Error while adding a new student', error);
//       setShowNotification({ type: 'error', text: 'Failed to add new student. Please try again.' });
//     }
//   };

//   const handleCloseNotification = () => {
//     setShowNotification(null);
//   };

//   return (
//     <div className="box-container">
//       <h2>Add Patient</h2>
//       <form onSubmit={handleSubmit} className="form-container">
       
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="input-field"
//         />
//          <br/>
        
//         <select
//           placeholder="Select Gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//           className="input-field"
//         >
//                     <option value="select gender">Select geder</option>

//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <br/>
//         <input
//           type="number"
//           placeholder="Roll No"
//           value={roll_no}
//           onChange={(e) => setNumber(e.target.value)}
//           required
//           className="input-field"
//         />
//         <br/>
//         <div className="button-group">
//           <button type="submit" className="btn btn-add">
//             Add Student
//           </button>
//           <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>
//             Cancel
//           </button>
//         </div>
//       </form>
//       {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
//     </div>
//   );
// };

// export default StudentAdd;


import React, {useState} from 'react';
import Link from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {slide,ToastContainer,toast} from 'react-tostify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const CreateStudent=(props)=>{
  const navigate = useNavigate();
  const [student,setStudent]=useState({
    name:'',
    roll_no:' ',
    mail_id:' ',
    score:' ',
    cgpa:' ',
    dob:' ',
    attendance:''

  });
  const [showToast,setToast]=useState(false);

  // form change handler //
  const onChange=(e)=>{
    console.log(e.target.value);  
    setStudent({...student,[e.target.name]:e.target.value});
    // [e.target.cgpa]:e.target.value
  }


  // form change handler 
}