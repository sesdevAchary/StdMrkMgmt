import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Card, CardMedia } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

const HomePage = () => {
  const [index, setIndex] = React.useState(0); // State to track the current slide

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      {/* Page 1 */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          py: { xs: 4, sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            color="primary.main"
            sx={{
              fontFamily: 'Ubuntu, sans-serif',

              fontWeight: 700,
              marginBottom: 2,
              letterSpacing: 1.2,
            }}
          >
            GREEN VALLEY HIGH SCHOOL
          </Typography>
          <Card sx={{ borderRadius: 2, boxShadow: 10, maxWidth: 750 }}>
            <CardMedia
              component="img"
              image="https://greenvalleyhs.org/wp-content/uploads/2019/08/gvhsSchoolEntrance-300x189.jpg"
              alt="Green Valley High School"
              sx={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
          </Card>
        </Box>

        <Button
  onClick={() => setIndex(1)} // Changed variable name for better clarity
  sx={{
    mt: 3,  // Margin-top for spacing
    py: 1.5,  // Vertical padding for better height
    px: 4,  // Horizontal padding for width adjustment
    fontSize: '16px',  // Clear and readable font size
    fontWeight: 600,  // Slightly bold text for better emphasis
    borderRadius: 2,  // Rounded corners for a more modern appearance
    border: '2px solid',  // Defined border for outlined variant
    borderColor: 'primary.main',  // Border color matching the theme
    color: 'primary.main',  // Text color to match the border
    backgroundColor: 'transparent',  // Transparent background for outlined style
    '&:hover': {
      backgroundColor: 'primary.light',  // Light background color on hover
      borderColor: 'primary.dark',  // Darken border on hover for better feedback
      color: 'primary.dark',  // Darken text color on hover
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Subtle shadow on hover
    },
    '&:focus': {
      outline: 'none',  // Remove default outline for focus
      boxShadow: '0px 0px 0px 2px rgba(0, 123, 255, 0.5)',  // Focus ring for accessibility
    },
    // '&:active': {
    //   backgroundColor: 'primary.dark',  // Darken background when button is clicked
    //   color: 'white',  // Change text color on active state for better contrast
    //   transform: 'scale(0.98)',  // Scale down the button when clicked (cracking effect)
    //   boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',  // Stronger shadow on click
    
    transition: 'all 0.3s ease',  // Smooth transition for all interactive states
    // Animation to simulate a "cracker" effect
    '@keyframes cracker': {
      '0%': {
        transform: 'scale(1)',  // Start at original size
        opacity: 1,
      },
      '50%': {
        transform: 'scale(1.1)',  // Scale up slightly
        opacity: 0.8,  // Slightly fade out
      },
      '100%': {
        transform: 'scale(1)',  // Return to original size
        opacity: 1,  // Return to full opacity
      },
    },
    '&:active': {
      animation: 'cracker 0.2s ease',  // Trigger the "cracker" animation on click
    },
  }}
  variant="outlined"  // Outlined variant to maintain the button's sleek design
  aria-label="Click here to toggle the next page"  // Improve accessibility for screen readers
>
  Click here to toggle the next page
</Button>

      </Container>

      {/* Page 2 */}
     


<Container
  maxWidth="lg"
  sx={{
    textAlign: 'center',
    py: { xs: 8, sm: 10 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background.paper',
    borderRadius: 4,
    boxShadow: 10,
    transition: 'all 0.3s ease',
    '@media (max-width:600px)': {
      padding: '40px 20px',
    },
  }}
>
  {/* First Typography Block */}
  <Box
    sx={{
      marginBottom: 4, // Space between first and second typography blocks
      textAlign: 'center', // Center-align text
      '@media (max-width:600px)': {
        marginBottom: 3, // Adjust margin on mobile for better space
      },
    }}
  >
    <Typography
      variant="h2"
      component="h1"
      color="primary.main"
      sx={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        marginBottom: 3,
        letterSpacing: 2,
        textTransform: 'uppercase',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)', // Text shadow for effect
        '@media (max-width:600px)': {
          fontSize: '2rem', // Adjust font size for mobile
        },
      }}
    >
      Heartening Welcome to the Student Management Queue
    </Typography>
  </Box>

  {/* Second Typography Block */}
  <Box
    sx={{
      marginBottom: 6, // Space after the second typography block
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto', // Center text with auto margin
      '@media (max-width:600px)': {
        fontSize: '1.1rem', // Adjust font size for mobile
      },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontFamily: 'Roboto, sans-serif',
        color: 'text.secondary',
        fontWeight: 400,
        lineHeight: 1.7,
        letterSpacing: 0.5,
        '@media (max-width:600px)': {
          fontSize: '1rem', // Adjust font size for smaller screens
        },
      }}
    >
      Effortlessly manage student information with an intuitive, streamlined system.
    </Typography>
  </Box>

  {/* Box for Buttons */}
  <Box
    sx={{
      mt: 6,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      borderRadius: 4,
      boxShadow: 5,
      backgroundColor: 'background.default',
      border: '1px solid',
      borderColor: 'divider',
      '@media (max-width:600px)': {
        width: '100%',
      },
    }}
  >
    <Button
      component={Link}
      to="/list"
      color="primary"
      variant="contained"
      sx={{
        py: 2,
        px: 6,
        fontSize: '18px',
        fontWeight: 600,
        borderRadius: 4,
        boxShadow: 5,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
        },
        '&:active': {
          backgroundColor: 'primary.main',
          color: 'white',
        },
        transition: 'all 0.3s ease',
      }}
      aria-label="View Student Information"
    >
      View Student Information
    </Button>

    <Button
      onClick={() => setIndex(0)}
      sx={{
        py: 2,
        px: 6,
        fontSize: '18px',
        fontWeight: 600,
        borderRadius: 4,
        border: '2px solid',
        borderColor: 'primary.main',
        color: 'primary.main',
        backgroundColor: 'transparent',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'primary.light',
          borderColor: 'primary.dark',
          color: 'primary.dark',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
        },
        '&:active': {
          backgroundColor: 'primary.dark',
          color: 'white',
        },
        transition: 'all 0.3s ease',
      }}
      variant="outlined"
      aria-label="Go Back to Home"
    >
      Go Back to Home
    </Button>
  </Box>
</Container>





    </SwipeableViews>
  );
};

export default HomePage;
