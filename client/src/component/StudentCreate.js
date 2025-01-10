



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// // Material-UI Imports
// import { Box, Button, Container, Grid, Paper, TextField, Typography, useTheme, useMediaQuery } from '@mui/material';

// const CreateStudent = () => {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const [student, setStudent] = useState({
//     first_name: '',
//     unique_id: '',
//     mail_id: '',
//     current_address: '',
//     total_score: '',
//     avg_cgpa: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation: Ensure no fields are empty
//     const requiredFields = ['first_name', 'unique_id', 'mail_id', 'current_address', 'total_score', 'avg_cgpa'];
//     for (let field of requiredFields) {
//       if (!student[field]) {
//         toast.error('Please fill in all required fields.', {
//           position: 'top-right',
//           autoClose: 5000,
//           theme: 'dark',
//         });
//         return;
//       }
//     }

//     // Make API request to create student
//     axios
//       .post(`https://stdmrkmgmt.onrender.com/api/student`, student)
//       .then((res) => {
//         setStudent({
//           first_name: '',
//           unique_id: '',
//           mail_id: '',
//           current_address: '',
//           total_score: '',
//           avg_cgpa: '',
//         });

//         toast.success('Student created successfully!', {
//           position: 'top-left',
//           autoClose: 3000,
//           theme: 'dark',
//           transition: Slide,
//         });

//         // Redirect to list page after success
//         setTimeout(() => {
//           navigate('/list');
//         }, 4000);
//       })
//       .catch((err) => {
//         toast.error('Something went wrong, try again!', {
//           position: 'top-right',
//           autoClose: 5000,
//           theme: 'dark',
//           transition: Slide,
//         });
//       });
//   };

//   return (
//     <Container maxWidth="md">
//       <ToastContainer position="top-right" autoClose={5000} theme={isDarkMode ? 'dark' : 'light'} transition={Slide} />
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           background: isDarkMode
//             ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' // Dark mode gradient
//             : 'linear-gradient(135deg, #67b26f 0%, #4ca2cd 100%)', // Light mode gradient
//           color: isDarkMode ? 'white' : 'black',
//         }}
//       >
//         <Typography variant="h4" gutterBottom align="center" sx={{ color: 'inherit', fontWeight: 600 }}>
//           Create A New Student
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit} noValidate>
//           <Grid container spacing={3}>

//             {/* Student Name */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Student Name"
//                 name="first_name"
//                 value={student.first_name}
//                 onChange={handleChange}
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Roll Number */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Roll Number"
//                 name="unique_id"
//                 value={student.unique_id}
//                 onChange={handleChange}
//                 type="number"
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Email */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email ID"
//                 name="mail_id"
//                 value={student.mail_id}
//                 onChange={handleChange}
//                 type="email"
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Current Address */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Current Address"
//                 name="current_address"
//                 value={student.current_address}
//                 onChange={handleChange}
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Total Score */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Total Score"
//                 name="total_score"
//                 value={student.total_score}
//                 onChange={handleChange}
//                 type="number"
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Average CGPA */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Average CGPA"
//                 name="avg_cgpa"
//                 value={student.avg_cgpa}
//                 onChange={handleChange}
//                 type="number"
//                 variant="outlined"
//                 required
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderRadius: '8px',
//                     backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                   },
//                 }}
//               />
//             </Grid>

//           </Grid>

//           <Box display="flex" justifyContent="space-between" mt={4}>
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               sx={{
//                 borderRadius: '8px',
//                 padding: '12px 24px',
//                 background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
//                 color: 'white',
//                 '&:hover': {
//                   background: 'linear-gradient(45deg, #feb47b, #ff7e5f)',
//                 },
//               }}
//             >
//               Submit
//             </Button>
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={() => navigate('/')}
//               sx={{
//                 borderRadius: '8px',
//                 padding: '12px 24px',
//                 borderColor: '#ff4081',
//                 color: '#ff4081',
//                 '&:hover': {
//                   borderColor: '#ff4081',
//                   backgroundColor: '#ff4081',
//                   color: 'white',
//                 },
//               }}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </Box>
//       </Paper>

//       {/* Additional message */}
//       <Box
//         display="flex"
//         justifyContent="center"
//         sx={{
//           borderRadius: 5,
//           boxShadow: 5,
//           p: 2,
//           fontSize: '1.2rem',
//           fontWeight: 'bold',
//           backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
//           mt: 4,
//         }}
//       >
//         If you want to go to the HomePage, click on the "STUDENT MANAGEMENT" link above.
//       </Box>
//     </Container>
//   );
// };

// export default CreateStudent;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Material-UI Imports
import { Box, Button, Container, Grid, Paper, TextField, Typography, useTheme, useMediaQuery } from '@mui/material';

const CreateStudent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    total_score: '',
    avg_cgpa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure no fields are empty
    const requiredFields = ['first_name', 'unique_id', 'mail_id', 'current_address', 'total_score', 'avg_cgpa'];
    for (let field of requiredFields) {
      if (!student[field]) {
        toast.error('Please fill in all required fields.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
        return;
      }
    }

    // Make API request to create student
    axios
      .post(`https://stdmrkmgmt.onrender.com/api/student`, student)
      .then((res) => {
        setStudent({
          first_name: '',
          unique_id: '',
          mail_id: '',
          current_address: '',
          total_score: '',
          avg_cgpa: '',
        });

        toast.success('Student created successfully!', {
          position: 'top-left',
          autoClose: 3000,
          theme: 'dark',
          transition: Slide,
        });

        // Redirect to list page after success
        setTimeout(() => {
          navigate('/list');
        }, 4000);
      })
      .catch((err) => {
        toast.error('Something went wrong, try again!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <Container maxWidth="md">
      <ToastContainer position="top-right" autoClose={5000} theme={isDarkMode ? 'dark' : 'light'} transition={Slide} />
      <Paper
        elevation={12}
        sx={{
          padding: 4,
          borderRadius: 3,
          background: isDarkMode
            ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' // Dark mode gradient
            : 'linear-gradient(135deg,rgb(41, 108, 48) 0%,rgb(33, 81, 105) 100%)', // Light mode gradient
          color: isDarkMode ? 'white' : 'black',
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'inherit', fontWeight: 600 }}>
          Create A New Student
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>

            {/* Student Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Student Name"
                name="first_name"
                value={student.first_name}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#ddd',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>

            {/* Roll Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Roll Number"
                name="unique_id"
                value={student.unique_id}
                onChange={handleChange}
                type="number"
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#ddd',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email ID"
                name="mail_id"
                value={student.mail_id}
                onChange={handleChange}
                type="email"
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#ddd',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>

            {/* Current Address */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Address"
                name="current_address"
                value={student.current_address}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#ddd',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>

            {/* Total Score */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Score"
                name="total_score"
                value={student.total_score}
                onChange={handleChange}
                type="number"
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#00BCD4',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>

            {/* Average CGPA */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Average CGPA"
                name="avg_cgpa"
                value={student.avg_cgpa}
                onChange={handleChange}
                type="number"
                variant="outlined"
                required
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: isDarkMode ? '#888' : '#ddd',
                    '&:hover': {
                      borderColor: isDarkMode ? '#fff' : '#4caf50',
                    },
                    '&.Mui-focused': {
                      borderColor: isDarkMode ? '#ffab00' : '#1e88e5',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(45deg,rgb(216, 131, 110), #feb47b)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #feb47b, #ff7e5f)',
                },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/')}
              sx={{
                borderRadius: '8px',
                padding: '12px 24px',
                borderColor: '#ff4081',
                color: '#ff4081',
                '&:hover': {
                  borderColor: '#ff4081',
                  backgroundColor: '#ff4081',
                  color: 'white',
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Additional message */}
      <Box
  display="flex"
  justifyContent="center"
  sx={{
    borderRadius: 2, // Smooth rounded corners
    boxShadow: 3, // Softer shadow
    p: 3, // More padding for a spacious feel
    fontSize: '1.25rem', // Slightly larger font size for better readability
    fontWeight: '600', // Bold font weight for prominence
    backgroundColor: isDarkMode ? '#212121' : '#E3F2FD', // Dark and Light mode colors
    color: isDarkMode ? '#E0E0E0' : '#1E2A47', // Light text in dark mode, dark text in light mode
    textAlign: 'center', // Center text alignment
    mt: 4,
    transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
    '&:hover': {
      backgroundColor: isDarkMode ? '#333333' : '#B3E5FC', // Lighter shades on hover
      boxShadow: 4, // Increase shadow on hover for focus effect
    },
  }}
>
  If you want to go to the HomePage, click on the "STUDENT MANAGEMENT" link above.
</Box>

    </Container>
  );
};

export default CreateStudent;
