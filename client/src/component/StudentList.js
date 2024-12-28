import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, CircularProgress, Box, Grid } from '@mui/material';
import StudentCard from './StudentCard';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student')
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error loading student data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Main Container for Student List */}
      <Container maxWidth="lg" sx={{ py: 6, px: 4 }}>

        {/* Page Title */}
        <Typography
          variant="h3"
          color="primary.main"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          Student List
        </Typography>

        {/* Loading Spinner or Students List */}
        {loading ? (
          <Box display="flex" justifyContent="center" mt={7}>
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {students.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary" align="center">
                  Oops! No students found.
                </Typography>
              </Grid>
            ) : (
              students.map((student, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StudentCard student={student} />
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Container>

      {/* Separate Container for Add New Student Button */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            borderRadius: 2, // Rounded corners for the box
            boxShadow: 2, // Light box shadow
            p: 3, // Padding around the button
            backgroundColor: 'background.paper', // Box background color
          }}
        >
          <Button
            component={Link}
            to="/add"
            color="primary"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: 3,
              '&:hover': {
                backgroundColor: '#e0f8e8',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            Add New Student...
          </Button>
        </Box>
      </Container>

      <container>
        <Typography variant="h5" alignItems="start" gutterBottom sx={{
          fontWeight: 700,
          letterSpacing: 1,
          // textTransform: 'uppercase',
        }}>
          <box
            display="flex"
            justifyContent="center"
            sx={{
              borderRadius: 10, // Rounded corners for the box
              boxShadow: 50, // Light box shadow
              p: 3, // Padding around the button
              backgroundColor: '#e0f8e8' // Box background color
            }}>
            If you want to Go to the HomePage then Click on the STUDENT MANAGEMENT above
          </box>
        </Typography>
      </container>
    </>
  );
}

export default StudentList;
