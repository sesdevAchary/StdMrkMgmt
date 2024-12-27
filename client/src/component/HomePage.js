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
              image="https://imagescdn.homes.com/i2/zAzfEG60j5CUeJZYrHBwxs5D7Tw2aEsDfTa5XCTDHQo/116/green-valley-high-school-henderson-nv-primaryphoto.jpg?p=1"
              alt="Green Valley High School"
              sx={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
          </Card>
        </Box>

        <Button
  onClick={() => setIndex(1)}  // Changed variable name for better clarity
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
    '&:active': {
      backgroundColor: 'primary.dark',  // Darken background when button is clicked
      color: 'white',  // Change text color on active state for better contrast
    },
    transition: 'all 0.3s ease',  // Smooth transition for all interactive states
  }}
  variant="contained"  // Outlined variant to maintain the button's sleek design
  aria-label="Click here to toggle the next page"  // Improve accessibility for screen readers
>
Click here to toggle the next page
</Button>
      </Container>

      {/* Page 2 */}
      {/* <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          py: { xs: 4, sm: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="success.main"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            marginBottom: 3,
            letterSpacing: 1.3,
          }}
        >
          Heartening Welcome to the Student Management Queue
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            color: 'text.secondary',
            marginBottom: 4,
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: '600px',
          }}
        >
          Manage student information effortlessly and efficiently.
        </Typography>
        <Box mt={4}>
          <Button
            component={Link}
            to="/list"
            color="primary"
            variant="contained"
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
              '&:active': {
                backgroundColor: 'primary.dark',  // Darken background when button is clicked
                color: 'white',  // Change text color on active state for better contrast
              },
              transition: 'all 0.3s ease',  // Smooth transition for all interactive states
            }}
            
            aria-label=" View Student information"  // Improve accessibility for screen readers
          >
             View Student information
          </Button>
        </Box>
        <Button onClick={() => setIndex(0)} sx={{ mt: 3,  // Margin-top for spacing
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
    '&:active': {
      backgroundColor: 'primary.dark',  // Darken background when button is clicked
      color: 'white',  // Change text color on active state for better contrast
    },
    transition: 'all 0.3s ease',  // Smooth transition for all interactive states
  }}
  variant="outlined"  // Outlined variant to maintain the button's sleek design
  aria-label="Go back to home"  // Improve accessibility for screen readers
>
  Go Back to Home
</Button> */}
      {/* </Container> */}






      <Container
  maxWidth="lg"
  sx={{
    textAlign: 'center',
    py: { xs: 6, sm: 8 }, // Adjusted padding for better vertical spacing
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background.paper',
    borderRadius: 3, // Slightly more rounded corners
    boxShadow: 6, // Increased box shadow for a more pronounced depth
    transition: 'all 0.3s ease', // Smooth transition for hover effects
    '@media (max-width:600px)': {
      padding: '30px 15px', // Ensure proper padding on mobile devices
    },
  }}
>
  <Typography
    variant="h2"
    component="h1"
    color="primary.main"
    sx={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      marginBottom: 2, // Reduced margin for a more balanced layout
      letterSpacing: 1.5, // More spacious letter spacing for clarity
      textTransform: 'uppercase', // Adding uppercase transformation for emphasis
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Adjust font size on mobile devices
      },
    }}
  >
    Heartening Welcome to the Student Management Queue
  </Typography>
  <Typography
    variant="h3"
    sx={{
      fontFamily: 'Roboto, sans-serif',
      color: 'text.secondary',
      marginBottom: 5,
      fontWeight: 300, // Lightened weight for a more modern and clean look
      lineHeight: 1.6, // Improved line height for readability
      maxWidth: '700px',
      margin: '0 auto',
      '@media (max-width:600px)': {
        fontSize: '1rem', // Adjust font size on smaller screens
      },
    }}
  >
    Effortlessly manage student information with a streamlined system.
  </Typography>

  <Box mt={5}>
    <Button
      component={Link}
      to="/list"
      color="primary"
      variant="contained"
      sx={{
        mt: 3, // Increased top margin for better spacing
        py: 1.8, // Vertical padding for better height
        px: 5, // Horizontal padding for more pronounced button size
        fontSize: '16px', // Readable font size
        fontWeight: 600, // Slightly bold text for emphasis
        borderRadius: 3, // Modern rounded corners
        boxShadow: 3, // Softer shadow for a smoother effect
        '&:hover': {
          backgroundColor: 'primary.light', // Lighter background on hover
          boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)', // Strong focus ring for accessibility
        },
        '&:active': {
          backgroundColor: 'primary.dark', // Darkened background on active state
          color: 'white',
        },
        transition: 'all 0.3s ease',
      }}
      aria-label="View Student Information"
    >
      View Student Information
    </Button>
  </Box>

  <Button
    onClick={() => setIndex(0)}
    sx={{
      mt: 4, // Increased margin-top for spacing between buttons
      py: 1.8,
      px: 5,
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: 3,
      border: '2px solid',
      borderColor: 'primary.main',
      color: 'primary.main',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'primary.light',
        borderColor: 'primary.dark',
        color: 'primary.dark',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)',
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
</Container>

    </SwipeableViews>
  );
};

export default HomePage;
