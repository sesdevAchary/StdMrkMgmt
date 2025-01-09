


// import React from 'react';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box, Card, CardMedia, Grid } from '@mui/material';
// import SwipeableViews from 'react-swipeable-views';

// const HomePage = () => {
//   const [index, setIndex] = React.useState(0); // State to track the current slide

//   const handleChangeIndex = (index) => {
//     setIndex(index);
//   };

//   return (
//     <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
//       {/* Page 1 */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           textAlign: 'center',
//           py: { xs: 4, sm: 6 },
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'background.paper',
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             mb: 4,
//             position: 'relative',
//             zIndex: 2,
//           }}
//         >
//           <Typography
//             variant="h2"
//             color="primary.main"
//             sx={{
//               fontFamily: 'Ubuntu, sans-serif',
//               fontWeight: 700,
//               mb: 3,
//               letterSpacing: 1.5,
//               textTransform: 'uppercase',
//               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//             }}
//           >
//             St. JOSEPH HIGH SCHOOL
//           </Typography>

//           {/* Full Width Image */}
//           <Card sx={{ borderRadius: 2, boxShadow: 10, width: '100%', height: 'auto' }}>
//             <CardMedia
//               component="img"
//               image="https://stjosephbbsr.org/wp-content/uploads/2023/10/bn12023.png"
//               alt="St. Joseph High School"
//               sx={{
//                 width: '100%',
//                 height: '500px',  // Fixed height for the image
//                 objectFit: 'cover',
//                 borderRadius: 2,
//                 borderColor: 'primary.light',
//               }}
//             />
//           </Card>
//         </Box>

//         <Button
//           onClick={() => setIndex(1)}
//           sx={{
//             mt: 3,
//             py: 1.5,
//             px: 4,
//             fontSize: '16px',
//             fontWeight: 600,
//             borderRadius: 2,
//             border: '2px solid',
//             borderColor: 'primary.main',
//             color: 'primary.main',
//             backgroundColor: 'transparent',
//             '&:hover': {
//               backgroundColor: 'primary.light',
//               borderColor: 'primary.dark',
//               color: 'primary.dark',
//               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//             },
//             '&:active': {
//               transform: 'scale(0.98)',
//               boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
//             },
//             transition: 'all 0.3s ease',
//           }}
//           variant="outlined"
//           aria-label="Click here to toggle the next page"
//           startIcon={<ArrowForwardIcon />}
//         >
//           NEXT
//         </Button>
//       </Container>

//       {/* Page 2 */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           textAlign: 'center',
//           py: { xs: 5, sm: 10 },
//           display: 'flex',
//           flexDirection: 'column',
//           backgroundColor: 'background.default',
//           borderRadius: 4,
//           boxShadow: 10,
//           transition: 'all 0.3s ease',
//         }}
//       >
//         <Box sx={{ mb: 3, position: 'relative', zIndex: 2, color: 'text.primary' }}>
//           <Typography
//             variant="h2"
//             color="primary.main"
//             sx={{
//               fontFamily: 'Montserrat, sans-serif',
//               fontWeight: 700,
//               mb: 3,
//               textTransform: 'uppercase',
//               letterSpacing: 1.2,
//               textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             Student Management System
//           </Typography>
//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: 'Roboto, sans-serif',
//               color: 'text.secondary',
//               fontWeight: 400,
//               lineHeight: 1.7,
//               letterSpacing: 0.5,
//               maxWidth: '800px',
//               mx: 'auto',
//             }}
//           >
//             Effortlessly manage student information with an intuitive, streamlined system.
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             mt: 6,
//             p: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 3,
//             borderRadius: 4,
//             boxShadow: 5,
//             backgroundColor: 'background.paper',
//             border: '1px solid',
//             borderColor: 'divider',
//           }}
//         >
//           {/* Buttons for management */}
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xs={12} sm={4}>
//               <Button
//                 fullWidth
//                 component={Link}
//                 to='/list'
//                 variant="outlined"
//                 startIcon={<ArrowForwardIcon />}
//                 sx={{
//                   py: 2,
//                   fontSize: '18px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: 'primary.main',
//                   color: 'primary.main',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: 'primary.light',
//                     borderColor: 'primary.dark',
//                     color: 'primary.dark',
//                     boxShadow: '0px 8px 15px rgba(174, 177, 212, 0.2)',
//                   },
//                 }}
//                 aria-label="List Students"
//               >
//                 Students List
//               </Button>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Button
//                 fullWidth
//                 variant="outlined"
//                 startIcon={<ArrowForwardIcon />}
//                 component={Link}
//                 to='/search'
//                 sx={{
//                   py: 2,
//                   fontSize: '18px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: 'primary.main',
//                   color: 'primary.main',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: 'primary.light',
//                     borderColor: 'primary.dark',
//                     color: 'primary.dark',
//                     boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//                 aria-label="Search Students"
//               >
//                 Search Students
//               </Button>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Button
//                 component={Link}
//                 to='/add'
//                 startIcon={<ArrowForwardIcon />}
//                 fullWidth
//                 variant="outlined"
//                 sx={{
//                   py: 2,
//                   fontSize: '18px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: 'primary.main',
//                   color: 'primary.main',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: 'primary.light',
//                     borderColor: 'primary.dark',
//                     color: 'primary.dark',
//                     boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//                 aria-label="Add Student"
//               >
//                 Add Student
//               </Button>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Button
//                 component={Link}
//                 to='/scan'
//                 variant='outlined'
//                 startIcon={<ArrowForwardIcon />}
//                 fullWidth
//                 sx={{
//                   py: 2,
//                   fontSize: '18px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: 'primary.main',
//                   color: 'primary.main',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: 'primary.light',
//                     borderColor: 'primary.dark',
//                     color: 'primary.dark',
//                     boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//                 aria-label="QR Code"
//               >
//                 QR Code
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box sx={{ mt: 6 }}>
//           <Button
//             onClick={() => setIndex(0)}
//             sx={{
//               py: 2,
//               px: 6,
//               fontSize: '18px',
//               fontWeight: 600,
//               borderRadius: 4,
//               border: '2px solid',
//               borderColor: 'primary.main',
//               color: 'primary.main',
//               backgroundColor: 'transparent',
//               textTransform: 'none',
//               '&:hover': {
//                 backgroundColor: 'primary.light',
//                 borderColor: 'primary.dark',
//                 color: 'primary.dark',
//                 boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
//               },
//             }}
//             variant="outlined"
//             startIcon={<ArrowBackIcon />}
//             aria-label="Go Back to Home"
//           >
//             Go Back to Home
//           </Button>
//         </Box>
//       </Container>
//     </SwipeableViews>
//   );
// };

// export default HomePage;

import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Card, CardMedia, Grid } from '@mui/material';
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
        maxWidth="xl"
        sx={{
          textAlign: 'center',
          py: { xs: 4, sm: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a1d2f, #121212)', // Dark filled background with gradients
          borderRadius: 4,
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            color="white"
            sx={{
              fontFamily: 'Ubuntu, sans-serif',
              fontWeight: 700,
              mb: 3,
              letterSpacing: 2,
              textTransform: 'uppercase',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)', // Darker and bolder text shadow
            }}
          >
            St. JOSEPH HIGH SCHOOL
          </Typography>

          {/* Full Width Image */}
          <Card sx={{ borderRadius: 2, boxShadow: 15, width: '100%', height: 'auto' }}>
            <CardMedia
              component="img"
              image="https://stjosephbbsr.org/wp-content/uploads/2023/10/bn12023.png"
              alt="St. Joseph High School"
              sx={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.5)', // Deeper shadow for added contrast
              }}
            />
          </Card>
        </Box>

        <Button
          onClick={() => setIndex(1)}
          sx={{
            mt: 3,
            py: 1.5,
            px: 4,
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: 4,
            border: '2px solid',
            borderColor: '#00D4FF', // Electric blue accent
            color: '#00D4FF',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#00D4FF',
              borderColor: '#0081A7', // Slightly darker blue on hover
              color: '#ffffff',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
            },
            '&:active': {
              transform: 'scale(0.98)',
              boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
            },
            transition: 'all 0.3s ease',
          }}
          variant="outlined"
          aria-label="Click here to toggle the next page"
          startIcon={<ArrowForwardIcon />}
        >
          NEXT
        </Button>
      </Container>

      {/* Page 2 */}
      <Container
        maxWidth="xl"
        sx={{
          textAlign: 'center',
          py: { xs: 5, sm: 10 },
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #2b2b2b, #121212)', // Matte dark gradient for page 2
          borderRadius: 4,
          boxShadow: 15,
          transition: 'all 0.3s ease',
        }}
      >
        <Box sx={{ mb: 3, position: 'relative', zIndex: 2, color: 'text.primary' }}>
          <Typography
            variant="h2"
            color="white"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              mb: 3,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', // More intense text shadow
            }}
          >
            Student Management System
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#E5E5E5', // Light gray for text
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: 0.5,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Effortlessly manage student information with an intuitive, streamlined system.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 6,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            borderRadius: 4,
            boxShadow: 5,
            backgroundColor: '#1c1c1c', // Darker background for the management box
            border: '1px solid',
            borderColor: '#444', // Subtle border color to match the dark theme
          }}
        >
          {/* Buttons for management */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                component={Link}
                to='/list'
                variant="outlined"
                startIcon={<ArrowForwardIcon />}
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
                  borderColor: '#00D4FF',
                  color: '#00D4FF',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00D4FF',
                    borderColor: '#0081A7',
                    color: '#ffffff',
                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
                aria-label="List Students"
              >
                Students List
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ArrowForwardIcon />}
                component={Link}
                to='/search'
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
                  borderColor: '#00D4FF',
                  color: '#00D4FF',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00D4FF',
                    borderColor: '#0081A7',
                    color: '#ffffff',
                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
                aria-label="Search Students"
              >
                Search Students
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to='/add'
                startIcon={<ArrowForwardIcon />}
                fullWidth
                variant="outlined"
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
                  borderColor: '#00D4FF',
                  color: '#00D4FF',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00D4FF',
                    borderColor: '#0081A7',
                    color: '#ffffff',
                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
                aria-label="Add Student"
              >
                Add Student
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to='/scan'
                variant='outlined'
                startIcon={<ArrowForwardIcon />}
                fullWidth
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
                  borderColor: '#00D4FF',
                  color: '#00D4FF',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00D4FF',
                    borderColor: '#0081A7',
                    color: '#ffffff',
                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
                aria-label="QR Code"
              >
                QR Code
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Button
            onClick={() => setIndex(0)}
            sx={{
              py: 2,
              px: 6,
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: 4,
              border: '2px solid',
              borderColor: '#00D4FF',
              color: '#00D4FF',
              backgroundColor: 'transparent',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00D4FF',
                borderColor: '#0081A7',
                color: '#ffffff',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
              },
            }}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
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
