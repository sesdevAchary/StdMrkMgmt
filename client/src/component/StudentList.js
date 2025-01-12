import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, CircularProgress, Box, Grid ,useTheme, useMediaQuery } from '@mui/material';
import StudentCard from './StudentCard';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');




  
  // const Base_URL = process.env.REACT_APP_API_URL; // Access environment variable
  
  // if (! Base_URL) {
  //   console.error('API_URL is not defined in the environment variables'); // Log error 
  // }
  
  useEffect(() => {
    axios
      .get(`https://stdmrkmgmt.onrender.com/api/student`)
      .then((res) => {
        console.log("API response:", res.data);  // Log the API response
        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else {
          console.error("Response is not an array:", res.data);  // Log error if not an array
          setStudents([]);  // Set an empty array in case of incorrect response
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error loading student data:", err);
        setLoading(false);
        setStudents([]);  // Set an empty array in case of error
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
        <br/>

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
              py: 4.5,
              fontSize: '21px',
              fontWeight: 600,
              borderRadius: 3,
              '&:hover': {
                backgroundColor: '#e0f8e8',
                boxShadow: '0px 6px 12px rgba(73, 196, 46, 0.1)',
              },
            }}
          >
            Add New Student...
          </Button>
        </Box>
      </Container>

       {/* Additional message */}
           <Box
       display="flex"
       justifyContent="center"
       sx={{
         borderRadius: 2, // Smooth rounded corners
         boxShadow: 3, // Softer shadow
         p: 3, // More padding for a spacious feel
         fontSize: '1.2rem', // Slightly larger font size for better readability
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
     



    </>
  );
}

export default StudentList;
