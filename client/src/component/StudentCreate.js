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


import React, { useState } from 'react';
import Link from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { slide, ToastContainer, toast } from 'react-tostify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const CreateStudent = (props) => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    attendence: '',
    total_score: '',
    avg_cgpa: ''

  });
  const [showToast, setToast] = useState(false);

  // form change handler //
  const onChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    // [e.target.cgpa]:e.target.value
  }


  // form change handler 
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/students', student)  // sends a post reuest to the /api/student on the server ,to add a new book//
      .then((res) => {
        setStudent({
          first_name: '',
          unique_id: '',
          mail_id: '',
          current_address: '',
          attendence: '',
          total_score: '',
          avg_cgpa: ''
        });
        console.log(student);
        toast.success('student created successfully !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: slide,
        });
        setTimeOut = (() => {
          setToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })

      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ');
        console.log(err);
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: slide,
        });

      });
  };

  return (
    <div className='CreateStudent'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={slide}
      />
      <div className='Container  d-flex align-items-center justify-content-center'>
        <div className='row w-100'>
          <div className='col md-8 m-auto'>
            <br />
            <Link to='/create-student' className='btn btn-outline-warning float-left'>
              Complete Student List
            </Link>
            </div>
            <div className='col md-8 m-auto style={{display:"flex" align-item:"center" flexDirection: "column" }}'>
              <h1 className='display-4 text-center'>Add Student Here </h1>
              <p className='lead text-center'>Create A New Student</p>


              <form noValidate onSubmit={onsubmit}>

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the Name of the STUDENT'
                    name='first_name'
                    className='form-controller'
                    value='student.first_name'
                    onChange={onChange}
                  />

                </div>

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the Roll number of the STUDENT'
                    name='unique_id'
                    className='form-controller'
                    value='student.unique_id'
                    onChange={onchange}
                  />
                </div>


                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the mail ID of the STUDENT'
                    name='mail_id'
                    className='form-controller'
                    value='student.mail_id'
                    onChange={onchange}
                  />
                </div>



                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the current address  of the STUDENT'
                    name='current_address'
                    className='form-controller'
                    value='student.current_address'
                    onChange={onchange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the attendence number  of the STUDENT'
                    name='attendence'
                    className='form-controller'
                    value='student.attendence'
                    onChange={onchange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the total score   of the STUDENT'
                    name=' total_score'
                    className='form-controller'
                    value='student.total_score'
                    onChange={onchange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the cgpa obtained by the STUDENT'
                    name=' avg_cgpa'
                    className='form-controller'
                    value='student.avg_cgpa'
                    onChange={onchange}
                  />
                </div>

                <br />

                <div className="button-group">
                  <button type="submit" className="btn btn-add">Submit</button>
                  <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
                </div>


              </form>
            </div>

          
        </div>
      </div>
    </div>
  );
};
export default CreateStudent;
