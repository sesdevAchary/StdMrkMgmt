import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      mt: 4,  // Add margin-top to separate footer from content
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`, // Subtle divider line
      boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for separation
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="body2"
        sx={{
          color: 'text.primary',
          fontWeight: 500,
          fontSize: '1.1rem', // Adjust the font size for readability
          
        }}
      >
        &#128522; Thanks for your Attention &#128522;
        <br/>
        <br/>
        <br/>
         Prepared and served with care by The Sesdev Achary
         <br/>
         Credit to Chinmaya Panigrahi  bro       
      </Typography>
      <Typography
        variant="caption"
        sx={{
          borderRadius: 5,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Correct box shadow
    p: 1,
    fontSize: '1.2rem', // Correct property name
    textDecoration: 'underline', // Correct value for underline
    // backgroundColor: '#ffffff', // Correct hex value for white
    mt: 4,
    color: 'primary.dark',
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;


