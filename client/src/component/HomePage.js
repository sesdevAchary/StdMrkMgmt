// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box } from '@mui/material';

// const HomePage = () => {
//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         textAlign: 'center',
//         py: { xs: 4, sm: 6 },  // Responsive padding
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'background.paper',
//         borderRadius: 2,
//         boxShadow: 3,
//       }}
//     >
//       <Typography
//         variant="h2"
//         component="h1"
//         color="success.main"
//         sx={{
//           fontWeight: 700,
//           marginBottom: 3,
//           letterSpacing: 1,
//         }}
//       >
//         Heartening Welcome to the Student Management Queue
//       </Typography>

//       <Typography
//         variant="h5"
//         sx={{
//           color: 'text.secondary',
//           marginBottom: 4,
//           fontWeight: 400,
//           lineHeight: 1.5,
//           maxWidth: '600px',  // Limit width for better text alignment
//         }}
//       >
//         Manage student information effortlessly and efficiently. Stay organized and improve productivity.
//       </Typography>

//       <Box mt={4}>
//         <Button
//           component={Link}
//           to="/list"
//           color="primary"
//           variant="contained"
//           sx={{
//             padding: '12px 24px',
//             fontSize: '1.1rem',
//             textTransform: 'none',
//             boxShadow: 2,
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               boxShadow: 4,
//               transform: 'translateY(-2px)',
//             },
//           }}
//           aria-label="View Student Information"
//         >
//           View Student Information
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;



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