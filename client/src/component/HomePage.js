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

        <Button onClick={() => setIndex(1)} sx={{ mt: 3 }} variant="outlined">
          Go to Next Page
        </Button>
      </Container>

      {/* Page 2 */}
      <Container
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
            letterSpacing: 1.2,
          }}
        >
          Heartening Welcome to the Student Management Queue
        </Typography>
        <Typography
          variant="h5"
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
              fontFamily: 'Roboto, sans-serif',
              padding: '12px 24px',
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: 5,
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
        <Button onClick={() => setIndex(0)} sx={{ mt: 3 }} variant="outlined">
          Go Back to Home
        </Button>
      </Container>
    </SwipeableViews>
  );
};

export default HomePage;
