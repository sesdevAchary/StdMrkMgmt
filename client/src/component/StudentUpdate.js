
// // import React, { useState, useEffect } from 'react';
// // import { Link, useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // function StudentUpdate (props) {
// //   const [student, setStudent] = useState({
// //     first_name: '',
// //     unique_id: '',
// //     mail_id: '',
// //     current_address: '',
// //      total_score: '',
// //     avg_cgpa: '',
// //   });

// //   const { id } = useParams();
// //   const navigate = useNavigate();


// //   // const Base_URL = process.env.REACT_APP_API_URL; // Access environment variable
  
// //   // if (! Base_URL) {
// //   //   console.error('API_URL is not defined in the environment variables'); // Log error 
// //   // }



// //   useEffect(() => {
// //     axios
// //       .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
// //       .then((res) => {
// //         setStudent({
// //           name: res.data.first_name,
// //           unique_id: res.data.unique_id,
// //            mail_id: res.data.mail_id,
// //           current_address: res.data.current_address,
// //           total_score: res.data.total_score,
// //           avg_cgpa: res.data.avg_cgpa
// //         });
// //       })
// //       .catch((err) => {
// //         console.log('Error from GET request');
// //         console.log(err);
// //       });
// //   }, [id]);

// //   const onChange = (e) => {
// //     setStudent({ ...student, [e.target.name]: e.target.value });
// //   };

// //   const onSubmit = (e) => {
// //     e.preventDefault();

// //     const data = {
    
// //        first_name: student.first_name,
// //         unique_id:student.unique_id,
// //          mail_id: student.mail_id,
// //         current_address: student.current_address,
// //         total_score: student.total_score,
// //         avg_cgpa: student.avg_cgpa,
// //     };

// //     axios
// //       .put(`https://stdmrkmgmt.onrender.com/${id}`, data)
// //       .then((res) => {
// //         navigate(`/list`);
// //       })
// //       .catch((err) => {
// //         console.log('Error in UpdateStudentInfo PUT request');
// //         console.log(err);
// //       });
// //   };

// //   return (
// //     <div className='StudentUpdate'>
// //       <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
// //         <div className='row'>
// //           <div className='col-md-8 m-auto'>
// //             <br />
// //             <Link to='/list' className='btn btn-outline-warning float-left'>
// //               Show Student List
// //             </Link>
// //           </div>
// //           <div className='col-md-8 m-auto'>
// //             <h1 className='display-4 text-center'>Edit Student</h1>
// //             <p className='lead text-center'>Update Student's Info</p>
// //           </div>
// //         </div>

// //         <div className='col-md-8 m-auto'>
// //           <form noValidate onSubmit={onSubmit}>
// //             <div className='form-group'>
// //               <label htmlFor='first_name'>Name</label>
// //               <input
// //                 type='text'
// //                 placeholder='Name of the student'
// //                 name='first_name' 
// //                 className='form-control'
// //                 value={student.first_name}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />

// //             <div className='form-group'>
// //             <label htmlFor='unique_id'>Unique ID</label>
// //               <input
// //                 type='unique_idl'
// //                 placeholder='unique_id'
// //                 name='unique_id'
// //                 className='form-control'
// //                 value={student.unique_id}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />

// //             <div className='form-group'>
// //             <label htmlFor='mail_id'>Email ID</label>
// //               <input
// //                 type='email'
// //                 placeholder='Email'
// //                 name='mail_id'
// //                 className='form-control'
// //                 value={student.mail_id}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />


// //             <div className='form-group'>
// //               <label htmlFor='current_address'>Address</label>
// //               <input
// //                 type='text'
// //                 placeholder='Enter your current address'
// //                  name='current_address'
// //                 className='form-control'
// //                 value={student.current_address}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />
           
// //             <div className='form-group'>
// //               <label htmlFor='total_score'>Score</label>
// //               <input
// //                 type='number'
// //                 placeholder='Enter the Total Score'
// //                 name='total_score'
// //                 className='form-control'
// //                 value={student.total_score}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />

  
// //             <div className='form-group'>
// //               <label htmlFor='avg_cgpa'>CGPA</label>
// //               <input
// //                 type='number'
// //                 placeholder='Enter Average CGPA'
// //                 name='avg_cgpa'
// //                 className='form-control'
// //                 value={student.avg_cgpa}
// //                 onChange={onChange}
// //               />
// //             </div>
// //             <br />

// //             <button
// //                 type='submit'
// //                className='btn btn-outline-info btn-lg btn-block'
// //             >
// //               Update Student
// //             </button>
// //             <br /><br />
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentUpdate ;




// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function StudentUpdate () {
//   const [student, setStudent] = useState({
//     first_name: '',
//     unique_id: '',
//     mail_id: '',
//     current_address: '',
//     total_score: '',
//     avg_cgpa: '',
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
//       .then((res) => {
//         setStudent({
//           first_name: res.data.first_name,
//           unique_id: res.data.unique_id,
//           mail_id: res.data.mail_id,
//           current_address: res.data.current_address,
//           total_score: res.data.total_score,
//           avg_cgpa: res.data.avg_cgpa,
//         });
//       })
//       .catch((err) => {
//         console.log('Error from GET request');
//         console.log(err);
//       });
//   }, [id]);

//   const onChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       first_name: student.first_name,
//       unique_id: student.unique_id,
//       mail_id: student.mail_id,
//       current_address: student.current_address,
//       total_score: student.total_score,
//       avg_cgpa: student.avg_cgpa,
//     };

//     axios
//       .put(`https://stdmrkmgmt.onrender.com/api/student/${id}`, data)
//       .then((res) => {
//         navigate(`/list`);
//       })
//       .catch((err) => {
//         console.log('Error in UpdateStudentInfo PUT request');
//         console.log(err);
//       });
//   };

//   return (
//     <div className='StudentUpdate'>
//       <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
//         <div className='row'>
//           <div className='col-md-8 m-auto'>
//             <br />
//             <Link to='/list' className='btn btn-outline-warning float-left'>
//               Show Student List
//             </Link>
//           </div>
//           <div className='col-md-8 m-auto'>
//             <h1 className='display-4 text-center'>Edit Student</h1>
//             <p className='lead text-center'>Update Student's Info</p>
//           </div>
//         </div>

//         <div className='col-md-8 m-auto'>
//           <form noValidate onSubmit={onSubmit}>
//             <div className='form-group'>
//               <label htmlFor='first_name'>Name</label>
//               <input
//                 type='text'
//                 placeholder='Name of the student'
//                 name='first_name'
//                 className='form-control'
//                 value={student.first_name}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//               <label htmlFor='unique_id'>Unique ID</label>
//               <input
//                 type='text'
//                 placeholder='unique_id'
//                 name='unique_id'
//                 className='form-control'
//                 value={student.unique_id}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//               <label htmlFor='mail_id'>Email ID</label>
//               <input
//                 type='email'
//                 placeholder='Email'
//                 name='mail_id'
//                 className='form-control'
//                 value={student.mail_id}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//               <label htmlFor='current_address'>Address</label>
//               <input
//                 type='text'
//                 placeholder='Enter your current address'
//                 name='current_address'
//                 className='form-control'
//                 value={student.current_address}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//               <label htmlFor='total_score'>Score</label>
//               <input
//                 type='number'
//                 placeholder='Enter the Total Score'
//                 name='total_score'
//                 className='form-control'
//                 value={student.total_score}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//               <label htmlFor='avg_cgpa'>CGPA</label>
//               <input
//                 type='number'
//                 placeholder='Enter Average CGPA'
//                 name='avg_cgpa'
//                 className='form-control'
//                 value={student.avg_cgpa}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <button type='submit' className='btn btn-outline-info btn-lg btn-block'>
//               Update Student
//             </button>
//             <br /><br />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentUpdate;




import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function StudentUpdate() {
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    total_score: '',
    avg_cgpa: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
      .then((res) => {
        setStudent({
          first_name: res.data.first_name,
          unique_id: res.data.unique_id,
          mail_id: res.data.mail_id,
          current_address: res.data.current_address,
          total_score: res.data.total_score,
          avg_cgpa: res.data.avg_cgpa,
        });
      })
      .catch((err) => {
        console.log('Error from GET request');
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: student.first_name,
      unique_id: student.unique_id,
      mail_id: student.mail_id,
      current_address: student.current_address,
      total_score: student.total_score,
      avg_cgpa: student.avg_cgpa,
    };

    axios
      .put(`https://stdmrkmgmt.onrender.com/api/student/${id}`, data)
      .then((res) => {
        navigate(`/list`);
      })
      .catch((err) => {
        console.log('Error in UpdateStudentInfo PUT request');
        console.log(err);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          letterSpacing: '1px',
          color: '#333',
          mb: 2,
        }}
      >
        Edit Student Information
      </Typography>

      <Link to="/list">
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            mb: 3,
            borderRadius: '8px',
            fontSize: '16px',
            color: '#FF5722',
            '&:hover': {
              backgroundColor: '#FFCCBC',
            },
          }}
        >
          Show Student List
        </Button>
      </Link>

      <form onSubmit={onSubmit}>
        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="first_name"
          value={student.first_name}
          onChange={onChange}
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* Unique ID Field */}
        <TextField
          label="Unique ID"
          variant="outlined"
          fullWidth
          name="unique_id"
          value={student.unique_id}
          onChange={onChange}
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* Email Field */}
        <TextField
          label="Email ID"
          variant="outlined"
          fullWidth
          name="mail_id"
          value={student.mail_id}
          onChange={onChange}
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* Address Field */}
        <TextField
          label="Current Address"
          variant="outlined"
          fullWidth
          name="current_address"
          value={student.current_address}
          onChange={onChange}
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* Total Score Field */}
        <TextField
          label="Total Score"
          variant="outlined"
          fullWidth
          name="total_score"
          value={student.total_score}
          onChange={onChange}
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* CGPA Field */}
        <TextField
          label="Average CGPA"
          variant="outlined"
          fullWidth
          name="avg_cgpa"
          value={student.avg_cgpa}
          onChange={onChange}
          sx={{
            mb: 3,
            '& .MuiInputBase-root': {
              fontFamily: 'Arial, sans-serif',
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px',
            },
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1976D2',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565C0',
            },
          }}
        >
          Update Student
        </Button>
      </form>
    </Container>
  );
}

export default StudentUpdate;
