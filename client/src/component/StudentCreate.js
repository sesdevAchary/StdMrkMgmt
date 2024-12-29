import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Material-UI Imports
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const CreateStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    attendence: '',
    total_score: '',
    avg_cgpa: '',
  });

  // Handle form input changes
  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const onSubmit = (e) => {
    e.preventDefault();

    if (!student.first_name || !student.unique_id || !student.mail_id || !student.avg_cgpa || !student.current_address || !student.total_score || !student.current_address) {
      toast.error('Please fill in all required fields.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
      return;
    }

    axios
      .post('https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student', student)
      .then((res) => {
        setStudent({
          first_name: '',
          unique_id: '',
          mail_id: '',
          current_address: '',
          attendence: '',
          total_score: '',
          avg_cgpa: '',
        });

        toast.success('Student created successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
          theme: 'dark',
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 10000);
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
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Create A New Student Here
        </Typography>

        <Box component="form" onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>

            {/* Student Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Student Name"
                name="first_name"
                value={student.first_name}
                onChange={onChange}
                variant="outlined"
              />
            </Grid>

            {/* Roll Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Roll Number"
                name="unique_id"
                value={student.unique_id}
                onChange={onChange}
                type="number"
                variant="outlined"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email ID"
                name="mail_id"
                value={student.mail_id}
                onChange={onChange}
                type="email"
                variant="outlined"
              />
            </Grid>

            {/* Current Address */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Address"
                name="current_address"
                value={student.current_address}
                onChange={onChange}
                variant="outlined"
              />
            </Grid>

            {/* Attendance */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Attendance"
                name="attendence"
                value={student.attendence}
                onChange={onChange}
                type="number"
                variant="outlined"
              />
            </Grid>

            {/* Total Score */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Total Score"
                name="total_score"
                value={student.total_score}
                onChange={onChange}
                type="number"
                variant="outlined"
              />
            </Grid>

            {/* Average CGPA */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Average CGPA"
                name="avg_cgpa"
                value={student.avg_cgpa}
                onChange={onChange}
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" mt={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // onClick={() => navigate('/list')}

              sx={{ borderRadius: '8px', padding: '10px 20px' }}
            >
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
    </Container>
  );
};

export default CreateStudent;
