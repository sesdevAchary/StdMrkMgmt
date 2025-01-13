

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
//           py: { xs: 3, sm: 6 },
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           background: 'linear-gradient(135deg, #0a1d2f, #121212)',
//           borderRadius: 4,
//           boxShadow: 10,
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
//             variant="h3"
//             color="white"
//             sx={{
//               fontFamily: 'Ubuntu, sans-serif',
//               fontWeight: 700,
//               mb: 3,
//               letterSpacing: 2,
//               textTransform: 'uppercase',
//               textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
//               fontSize: { xs: '2rem', sm: '3rem' }, // Smaller text on mobile
//             }}
//           >
//             St. JOSEPH HIGH SCHOOL
//           </Typography>

//           {/* Full Width Image */}
//           <Card sx={{ borderRadius: 2, boxShadow: 15, width: '100%', height: 'auto' }}>
//             <CardMedia
//               component="img"
//               image="https://stjosephbbsr.org/wp-content/uploads/2023/10/bn12023.png"
//               alt="St. Joseph High School"
//               sx={{
//                 width: '100%',
//                 height: { xs: '250px', sm: '500px' }, // Adjust height for mobile
//                 objectFit: 'cover',
//                 borderRadius: 2,
//                 boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.5)',
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
//             fontSize: { xs: '14px', sm: '16px' }, // Smaller font on mobile
//             fontWeight: 600,
//             borderRadius: 4,
//             border: '2px solid',
//             borderColor: '#00D4FF',
//             color: '#00D4FF',
//             backgroundColor: 'transparent',
//             '&:hover': {
//               backgroundColor: '#00D4FF',
//               borderColor: '#0081A7',
//               color: '#ffffff',
//               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
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
//           py: { xs: 4, sm: 10 },
//           display: 'flex',
//           flexDirection: 'column',
//           background: 'linear-gradient(135deg, #2b2b2b, #121212)',
//           borderRadius: 4,
//           boxShadow: 15,
//         }}
//       >
//         <Box sx={{ mb: 3, position: 'relative', zIndex: 2, color: 'text.primary' }}>
//           <Typography
//             variant="h3"
//             color="white"
//             sx={{
//               fontFamily: 'Montserrat, sans-serif',
//               fontWeight: 700,
//               mb: 3,
//               textTransform: 'uppercase',
//               letterSpacing: 1.2,
//               textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
//               fontSize: { xs: '2rem', sm: '3rem' }, // Smaller font on mobile
//             }}
//           >
//             Student Management System
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               fontFamily: 'Roboto, sans-serif',
//               color: '#E5E5E5',
//               fontWeight: 400,
//               lineHeight: 1.7,
//               letterSpacing: 0.5,
//               maxWidth: '800px',
//               mx: 'auto',
//               fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust text size for smaller devices
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
//             backgroundColor: '#1c1c1c',
//             border: '1px solid',
//             borderColor: '#444',
//           }}
//         >
//           <Grid container spacing={2} justifyContent="center" direction={{ xs: 'column', sm: 'row' }}>
//             <Grid item xs={12} sm={4}>
//               <Button
//                 fullWidth
//                 component={Link}
//                 to='/list'
//                 variant="outlined"
//                 startIcon={<ArrowForwardIcon />}
//                 sx={{
//                   py: 2,
//                   fontSize: '16px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: '#00D4FF',
//                   color: '#00D4FF',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: '#00D4FF',
//                     borderColor: '#0081A7',
//                     color: '#ffffff',
//                     boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
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
//                   fontSize: '16px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: '#00D4FF',
//                   color: '#00D4FF',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: '#00D4FF',
//                     borderColor: '#0081A7',
//                     color: '#ffffff',
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
//                   fontSize: '16px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: '#00D4FF',
//                   color: '#00D4FF',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: '#00D4FF',
//                     borderColor: '#0081A7',
//                     color: '#ffffff',
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
//                   fontSize: '16px',
//                   fontWeight: 800,
//                   borderRadius: 4,
//                   borderColor: '#00D4FF',
//                   color: '#00D4FF',
//                   backgroundColor: 'transparent',
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: '#00D4FF',
//                     borderColor: '#0081A7',
//                     color: '#ffffff',
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
//               fontSize: '16px',
//               fontWeight: 600,
//               borderRadius: 4,
//               border: '2px solid',
//               borderColor: '#00D4FF',
//               color: '#00D4FF',
//               backgroundColor: 'transparent',
//               textTransform: 'none',
//               '&:hover': {
//                 backgroundColor: '#00D4FF',
//                 borderColor: '#0081A7',
//                 color: '#ffffff',
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
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
