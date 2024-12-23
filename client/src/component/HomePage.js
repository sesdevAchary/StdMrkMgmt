import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Card, CardMedia } from '@mui/material';

const HomePage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        py: { xs: 4, sm: 6 }, // Responsive padding
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* School Name and Photo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="primary.main"
          sx={{
            fontWeight: 600,
            marginBottom: 2,
          }}
        >
          Green Valley High School
        </Typography>
        <Card sx={{ borderRadius: 2, boxShadow: 2, maxWidth: 300 }}>
          <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33jsfWTSX9jSE5B1idzDCy2aURcudl6xeFzrxRpOAXNTRI8-wGQAc3KvwV6aJjMVXeoI&usqp=CAU" // Replace with your school's photo URL
            alt="Green Valley High School"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Card>
      </Box>

      {/* Welcome Message */}
      <Typography
        variant="h2"
        component="h1"
        color="success.main"
        sx={{
          fontWeight: 700,
          marginBottom: 3,
          letterSpacing: 1,
        }}
      >
        Heartening Welcome to the Student Management Queue
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: 'text.secondary',
          marginBottom: 4,
          fontWeight: 400,
          lineHeight: 1.5,
          maxWidth: '600px', // Limit width for better text alignment
        }}
      >
        Manage student information effortlessly and efficiently.
      </Typography>

      {/* View Students Button */}
      <Box mt={4}>
        <Button
          component={Link}
          to="/list"
          color="primary"
          variant="contained"
          sx={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            textTransform: 'none',
            boxShadow: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 4,
              transform: 'translateY(-2px)',
            },
          }}
          aria-label="View Student Information"
        >
          View Student Information
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
