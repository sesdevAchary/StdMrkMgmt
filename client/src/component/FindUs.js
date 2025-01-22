// src/components/FindUs.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FindUs = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      py: 6,
      textAlign: 'center',
      mt: 6,
    }}
  >
    <Container maxWidth="sm">
      {/* Address Section */}
      <Typography
        variant="h4"
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          fontSize: '1.6rem',
          letterSpacing: 1.1,
          mb: 3,
        }}
      >
        Find Us
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', mb: 3 }}>
      St. Joseph Unitary University
      <br />
        Berhampur, Ganjam, Odisha, India
        <br/>
         Pin – 760001
      </Typography>

      {/* Google Map Embed Section */}
      <Box
        sx={{
          mt: 3,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14956.04539827178!2d85.9088800637985!3d20.4236141549822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190cd8341668fd%3A0x136fb0e392733c82!2sBerhampur%2C%20Brahmapur%2C%20Odisha%20754112!5e0!3m2!1sen!2sin!4v1737347071371!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  </Box>
);

export default FindUs;
