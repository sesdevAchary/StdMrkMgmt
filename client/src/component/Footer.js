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
//           color: 'text.secondary',
//           fontWeight: 500,
//           fontSize: '1rem', // Adjust the font size for readability
//         }}
//       >
//         Prepared and served with care by The Sesdev Achary
//       </Typography>
//       <Typography
//         variant="caption"
//         sx={{
//           color: 'text.secondary',
//           mt: 1,
//           fontSize: '0.875rem', // Slightly smaller text for less emphasis
//         }}
//       >
//         &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
//       </Typography>
//     </Container>
//   </Box>
// );

// export default Footer;




import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'linear-gradient(145deg, #4e73df, #2e56b6)', // Gradient background for a modern look
      color: '#fff', // Light text for better contrast
      py: 6, // Increased vertical padding for a more spacious footer
      mt: 6, // Add margin-top for better separation from content
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow to lift the footer
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="body2"
        sx={{
          color: '#fff', // White text for better contrast
          fontWeight: 600, // Slightly bolder font for emphasis
          fontSize: '1.1rem', // Slightly larger font size for readability
          lineHeight: 1.5, // Improved line height for better readability
        }}
      >
        Prepared and served with care by The Sesdev Achary
      </Typography>
      
      <Typography
        variant="caption"
        sx={{
          color: '#fff', // White text for consistency
          mt: 2, // More margin for separation
          fontSize: '0.875rem', // Slightly smaller text
          opacity: 0.8, // Slight transparency to make it less dominant
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
