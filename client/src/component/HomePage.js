


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box, Card, CardMedia } from '@mui/material';
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
//         maxWidth="lg"
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
//           }}
//         >
//           <Typography
//             variant="h2"
//             color="primary.main"
//             sx={{
//               fontFamily: 'Ubuntu, sans-serif',
//               fontWeight: 700,
//               mb: 2,
//               letterSpacing: 1.2,
//             }}
//           >
//             St. JOSEPH HIGH SCHOOL
//           </Typography>

//           <Card sx={{ borderRadius: 2, boxShadow: 10, maxWidth: 750 }}>
//             <CardMedia
//               component="img"
//               image="https://stjosephbbsr.org/wp-content/uploads/2023/10/bn12023.png"
//               alt="St. Joseph High School"
//               sx={{
//                 width: '100%',
//                 height: 'auto',
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
//               transform: 'scale(0.98)', // Added slight scale effect on click
//               boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
//             },
//             transition: 'all 0.3s ease',
//           }}
//           variant="outlined"
//           aria-label="Click here to toggle the next page"
//         >
//           Click here to Toggle the next page
//         </Button>
//       </Container>

//       {/* Page 2 */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           textAlign: 'center',
//           py: { xs: 5, sm: 10 },
//           display: 'flex',
//           flexDirection: 'column',
//           // justifyContent: 'center',
//           // alignItems: 'center',
//           backgroundColor: 'background.paper',
//           borderRadius: 4,
//           boxShadow: 10,
//           transition: 'all 0.3s ease',
//         }}
//       >
//          <Box sx={{ mb: 1 , position: 'relative', zIndex: 2, color: 'text.primary' }}>
//           <Typography
//             variant="h4"
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
//             Heartening Welcome to the Student Management Queue
//           </Typography>
//         </Box>

//         <Box sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: 'Roboto, sans-serif',
//               color: 'text.secondary',
//               fontWeight: 400,
//               lineHeight: 1.7,
//               letterSpacing: 0.5,
//             }}
//           >
//             Effortlessly manage student information with an intuitive, streamlined system.
//           </Typography>
//         </Box> 







//               <Box
//                 sx={{
//                   mt: 6,
//                   p: 4,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: 3,
//                   borderRadius: 4,
//                   boxShadow: 5,
//                   backgroundColor: 'background.default',
//                   border: '1px solid',
//                   borderColor: 'divider',
//                 }}
//               >


//                 <Button
//                   onClick={() => setIndex(0)}
//                   sx={{
//                     py: 2,
//                     px: 6,
//                     fontSize: '18px',
//                     fontWeight: 600,
//                     borderRadius: 4,
//                     border: '2px solid',
//                     borderColor: 'primary.main',
//                     color: 'primary.main',
//                     backgroundColor: 'transparent',
//                     textTransform: 'none',
//                     '&:hover': {
//                       backgroundColor: 'primary.light',
//                       borderColor: 'primary.dark',
//                       color: 'primary.dark',
//                       boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
//                     },
//                     '&:active': {
//                       backgroundColor: 'primary.dark',
//                       color: 'white',
//                     },
//                   }}
//                   variant="outlined"
//                   aria-label="Go Back to Home"
//                 >
//                   Go Back to Home
//                 </Button>
//               </Box>
//             </Container>
//           </SwipeableViews>
//           );
// };

//           export default HomePage;



import React from 'react';
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            sx={{
              fontFamily: 'Ubuntu, sans-serif',
              fontWeight: 700,
              mb: 2,
              letterSpacing: 1.2,
            }}
          >
            St. JOSEPH HIGH SCHOOL
          </Typography>

          <Card sx={{ borderRadius: 2, boxShadow: 10, maxWidth: 750 }}>
            <CardMedia
              component="img"
              image="https://stjosephbbsr.org/wp-content/uploads/2023/10/bn12023.png"
              alt="St. Joseph High School"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                borderColor: 'primary.light',
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
            borderRadius: 2,
            border: '2px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'primary.light',
              borderColor: 'primary.dark',
              color: 'primary.dark',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            },
            '&:active': {
              transform: 'scale(0.98)', // Added slight scale effect on click
              boxShadow: '0px 0px 0px 3px rgba(0, 123, 255, 0.5)',
            },
            transition: 'all 0.3s ease',
          }}
          variant="outlined"
          aria-label="Click here to toggle the next page"
        >
          NEXT
        </Button>
      </Container>

      {/* Page 2 */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          py: { xs: 5, sm: 10 },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
          borderRadius: 4,
          boxShadow: 10,
          transition: 'all 0.3s ease',
        }}
      >
        <Box sx={{ mb: 3, position: 'relative', zIndex: 2, color: 'text.primary' }}>
          <Typography
            variant="h2"
            color="primary.main"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              mb: 3,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Student Management System
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: 'text.secondary',
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
            backgroundColor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
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
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    borderColor: 'primary.dark',
                    color: 'primary.dark',
                    boxShadow: '0px 8px 15px rgba(174, 177, 212, 0.2)',
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
                component={Link}
              to='/create'
                sx={{
                  py: 2,
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
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
                }}
                aria-label="Search Students"
              >
                Search Students
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
              component={Link}
              to='/create'
                fullWidth
                variant="outlined"
                sx={{
                  py: '8 px',
                  fontSize: '18px',
                  fontWeight: 800,
                  borderRadius: 4,
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
                }}
                aria-label="Add Student"
              >
                Add Student
              </Button>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Button 
              component={Link}
              to='/qrCode'
              variant='outlined'
              fullWidth
              sx={{
                py: '8px',
                fontSize:'18px',
                fontWeight:900,
                borderRadius:4,
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
              }}
              aria-label="Add Student"
              > Qr Code 
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
