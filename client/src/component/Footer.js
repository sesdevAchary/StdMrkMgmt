// import React from 'react';

// import { Box, Typography, Container } from '@mui/material';

// const Footer = () => (
//   <Box
//     component="footer"
//     sx={{
//       bgcolor: 'background.paper',
//       color: 'text.secondary',
//       py: 4,
//       mt: 4,  // Add margin-top to separate footer from content
//       textAlign: 'center',
//       borderTop: (theme) => `1px solid ${theme.palette.divider}`, // Subtle divider line
//       boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for separation
//     }}
//   >
//     <Container maxWidth="lg">
//       <Typography
//         variant="body2"
//         sx={{
//           color: 'text.primary',
//           fontWeight: 500,
//           fontSize: '1.1rem', // Adjust the font size for readability
          
//         }}
//       >
//         &#128522; Thanks for your Attention &#128522;
        
//         <br/>
//         <br/>
//          Prepared and served with care by The Sesdev Achary
//          <br/>
//          Credit to Chinmaya Panigrahi  bro  
        
//          <br/>
//         <br/>
//         <br/>     
//       </Typography>
//       <Typography
//         variant="caption"
//         sx={{
//           borderRadius: 5,
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Correct box shadow
//     p: 1,
//     fontSize: '1.2rem', // Correct property name
//     textDecoration: 'underline', // Correct value for underline
//     // backgroundColor: '#ffffff', // Correct hex value for white
//     mt: 4,
//     color: 'primary.dark',
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

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.default',
      color: 'text.secondary',
      py: 6, // Increased padding for better spacing
      mt: 6,  // More space between the main content and footer
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)', // Enhanced shadow for depth
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h6"
        sx={{
          color: 'text.primary',
          fontWeight: 600, // Bold for prominence
          fontSize: '1.3rem', // Slightly larger font size for attention
          letterSpacing: 1.1, // Improved spacing for readability
          mb: 2, // Margin below to separate from other elements
        }}
      >
        &#128522; Thanks for your attention &#128522;
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          fontWeight: 400,
          fontSize: '1rem', // Clean and readable font size
          lineHeight: 1.5, // Improve line spacing
          mb: 4, // Margin below for separation
        }}
      >
        Prepared and served with care by <strong>The Sesdev Achary</strong>
        <br />
        Credit to <strong>Chinmaya Panigrahi</strong> bro
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link
          href="#"
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: 'primary.dark',
            },
            fontWeight: 500,
            fontSize: '1rem',
          }}
        >
          Terms & Conditions
        </Link>
        <Link
          href="#"
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: 'primary.dark',
            },
            fontWeight: 500,
            fontSize: '1rem',
          }}
        >
          Privacy Policy
        </Link>
      </Box>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 5, // Adds space above copyright text
          color: 'text.secondary',
          fontSize: '0.9rem',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2, // Padding top to add space between content and divider
          letterSpacing: 0.5,
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
