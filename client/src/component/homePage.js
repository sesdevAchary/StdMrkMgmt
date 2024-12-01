import react from 'react';
import {Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';


const  HomePage = () => {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h2" component="h1" color="success">
          Welcome to the Student Management queue 
        </Typography>
        <Typography variant="h5" gutterBottom>
          Manage Student information  Efficiently
        </Typography>
        <Box mt={4}>
        <Button 
          component={Link} 
          to="/list" // Updated to link to the PatirntList component
          color="primary" 
          variant="contained"
          >
          View Patients
        </Button>
      </Box>