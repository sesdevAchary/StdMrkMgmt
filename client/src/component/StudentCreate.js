


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Material-UI Imports
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

const CreateStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    total_score: '',
    avg_cgpa: '',
  });



  const Base_URL = process.env.REACT_APP_API_URL; // Access environment variable
  
  if (! Base_URL) {
    console.error('API_URL is not defined in the environment variables'); // Log error 
  }


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
    const requiredFields = ['first_name', 'unique_id', 'mail_id', 'current_address',  'total_score', 'avg_cgpa'];
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
      .post(`${Base_URL}/api/student`, student)
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

        // Redirect to list page  after success
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
      <ToastContainer position="top-right" autoClose={5000} theme="dark" transition={Slide} />
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, backgroundColor: 'background.paper', color: 'text.primary' }}>
        <Typography variant="2" gutterBottom align="center">
          Create A New Student Here
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
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
              />
            </Grid>

           

            {/* Total Score */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Total Score"
                name="total_score"
                value={student.total_score}
                onChange={handleChange}
                type="number"
                variant="outlined"
                required
              />
            </Grid>

            {/* Average CGPA */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Average CGPA"
                name="avg_cgpa"
                value={student.avg_cgpa}
                onChange={handleChange}
                type="number"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="space-between" mt={6}>
            <Button variant="contained" color="primary" type="submit" sx={{ borderRadius: '8px', padding: '10px 20px' }}>
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/')}
              sx={{ borderRadius: '8px', padding: '10px 20px' }}
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
          borderRadius: 5,
          boxShadow: 50,
          p: 2,
          fontsize: '2.2rem',
          textdecoration: 'underline',
          fontweight: 'bold',
          backgroundColor: 'fffff',
          mt: 4,
        }}
      >
        If you want to go to the HomePage, click on the "STUDENT MANAGEMENT" link above.
      </Box>
    </Container>
  );
};

export default CreateStudent;
