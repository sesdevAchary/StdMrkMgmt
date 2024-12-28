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
          color: 'text.secondary',
          fontWeight: 500,
          fontSize: '1rem', // Adjust the font size for readability
        }}
      >
        Prepared and served with care by The Sesdev Achary
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          mt: 1,
          fontSize: '0.875rem', // Slightly smaller text for less emphasis
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;


