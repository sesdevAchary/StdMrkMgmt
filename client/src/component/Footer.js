


// import React from 'react';
// import { Box, Typography, Container, Link } from '@mui/material';
// import FindUs from './FindUs'; // Import the FindUs component

// const Footer = () => (
//   <Box
//     component="footer"
//     sx={{
//       bgcolor: 'background.default',
//       color: 'text.secondary',
//       py: 6,
//       mt: 6,
//       textAlign: 'center',
//       borderTop: (theme) => `1px solid ${theme.palette.divider}`,
//       boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
//     }}
//   >
//     <Container maxWidth="lg">
//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//           gap: 4, // Adds space between the columns
//           alignItems: 'flex-start', // Ensures all sections are aligned at the top
//         }}
//       >
//         {/* Left Section: Contact Us */}
//         <Box sx={{ flexBasis: '40%', minWidth: '250px' }}>
//           <Typography
//             variant="h5"
//             sx={{
//               color: 'text.primary',
//               fontWeight: 700,
//               fontSize: '1.3rem',
//               letterSpacing: 1.1,
//               mb: 2,
//             }}
//           >
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.primary' }}>
//             St. Joseph Unitary University
//             <br />
//             Berhampur, Ganjam, Odisha, India Pin – 760001
//             <br />
//             Phone: 91-680-5541267
//             <br />
//             Phone: 91-7848011250
//             <br />
//             Email: <Link href="mailto:josephuniversity@gmail.com">josephUniversity@gmail.com</Link>
//           </Typography>
//         </Box>

//         {/* Middle Section: Important Links */}

//         <Box sx={{ flexBasis: '30%', minWidth: '250px' }}>
//           <Typography
//             variant="h5"
//             sx={{
//               color: 'text.primary',
//               fontWeight: 700,
//               fontSize: '1.3rem',
//               letterSpacing: 1.1,
//               mb: 2,
//             }}
//           >
//             Important Links
//           </Typography>
//           <Box>
//             <Link href="https://dst.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               DST, GOVT. OF INDIA
//             </Link>
//             <Link href="http://www.dhe.odisha.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               DHE, GOVT. OF ODISHA
//             </Link>
//             <Link href="https://mocollege.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               MOCOLLEGE ABHIJAN
//             </Link>
//             <Link href="https://oshec.nic.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               OHEPEE
//             </Link>
//             <Link href="https://www.ugc.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               UGC
//             </Link>
//             <Link href="http://rusa.nic.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               RUSA
//             </Link>
//             <Link href="https://vtputkal.odisha.gov.in/" sx={{ display: 'block', color: 'primary.main' }}>
//               VIRTUAL TUTORIAL PROJECT
//             </Link>
//           </Box>
//         </Box>

//         {/* Right Section: Find Us */}

//         <Box sx={{ flexBasis: '30%', minWidth: '250px' }}>
//           <FindUs />
//         </Box>
//       </Box>

//       {/* Footer Bottom Section */}
      
//       <Typography
//         variant="caption"
//         sx={{
//           display: 'block',
//           mt: 5,
//           color: 'text.disabled', // Using a more subtle color for a soft look
//           fontSize: '0.875rem', // Slightly smaller font size for subtlety
//           borderTop: '1px solid',
//           borderColor: 'divider', // Keeps the border subtle and matches theme
//           pt: 2,
//           letterSpacing: 0.5,
//           textAlign: 'center', // Centered for better alignment
//           bgcolor: 'background.paper', // Light background for contrast
//           borderRadius: 1, // Rounded corners to smooth out the design
//           boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Light shadow for depth
//           maxWidth: '80%', // Limiting the width to prevent it from stretching too far on large screens
//           margin: '0 auto', // Center the element
//           padding: '10px 0', // Vertical padding for better spacing
//         }}
//       >
//         &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
//       </Typography>

//     </Container>
//   </Box>
// );

// export default Footer;



import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import FindUs from './FindUs'; // Import the FindUs component

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'primary.light', // Light background for contrast (can be customized)
      color: 'text.primary',
      py: 6, // Vertical padding for better spacing
      mt: 6,
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 6, // Space between columns
          alignItems: 'flex-start',
        }}
      >
        {/* Left Section: Contact Us */}
        <Box sx={{ flexBasis: '40%', minWidth: '250px' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.4rem',
              letterSpacing: 1.2,
              mb: 3,
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            St. Joseph Unitary University
            <br />
            Berhampur, Ganjam, Odisha, India Pin – 760001
            <br />
            Phone: 91-680-5541267
            <br />
            Phone: 91-7848011250
            <br />
            Email: <Link href="mailto:josephuniversity@gmail.com">josephUniversity@gmail.com</Link>
          </Typography>
        </Box>

        {/* Middle Section: Important Links */}
        <Box sx={{ flexBasis: '30%', minWidth: '250px' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.4rem',
              letterSpacing: 1.2,
              mb: 3,
            }}
          >
            Important Links
          </Typography>
          <Box>
            <Link href="https://dst.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DST, GOVT. OF INDIA
            </Link>
            <Link href="http://www.dhe.odisha.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DHE, GOVT. OF ODISHA
            </Link>
            <Link href="https://mocollege.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              MOCOLLEGE ABHIJAN
            </Link>
            <Link href="https://oshec.nic.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              OHEPEE
            </Link>
            <Link href="https://www.ugc.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              UGC
            </Link>
            <Link href="http://rusa.nic.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              RUSA
            </Link>
            <Link href="https://vtputkal.odisha.gov.in/" sx={{ display: 'block', color: 'primary.main' }}>
              VIRTUAL TUTORIAL PROJECT
            </Link>
          </Box>
        </Box>

        {/* Right Section: Find Us */}
        <Box sx={{ flexBasis: '30%', minWidth: '250px' }}>
          <FindUs />
        </Box>
      </Box>

      {/* Footer Bottom Section */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 5,
          color: 'text.disabled', // More subtle color for the copyright text
          fontSize: '0.875rem',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2,
          letterSpacing: 0.6,
          textAlign: 'center',
          bgcolor: 'background.paper', // Light background to contrast
          borderRadius: 1,
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Light shadow
          maxWidth: '80%',
          margin: '0 auto',
          padding: '12px 0',
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
