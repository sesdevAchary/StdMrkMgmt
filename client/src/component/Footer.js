import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

@@ -131,13 +34,13 @@
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            Khallikote Unitary University
            st. Joseph Unitary University
            <br />
            Berhampur, Ganjam, Odisha, India Pin – 760001
            <br />
            Phone: 91-680-2229667
            Phone: 91-7848011250
            <br />
            Email: <Link href="mailto:kkcprincipal@gmail.com">kkcprincipal@gmail.com</Link>
            Email: <Link href="mailto:josephuniversity@gmail.com">josephUniversity@gmail.com</Link>
          </Typography>
        </Grid>

@@ -192,70 +95,70 @@
            Important Links
          </Typography>
          <Box>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
            <Link href="https://dst.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DST, GOVT. OF INDIA
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
            <Link href="http://www.dhe.odisha.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DHE, GOVT. OF ODISHA
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              MOCOLLEGE ABHIJAN
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              OHEPEE
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              UGC
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              RUSA
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main' }}>
              VIRTUAL TUTORIAL PROJECT
            </Link>
          </Box>
        </Grid>

        {/* Find Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.3rem',
              letterSpacing: 1.1,
              mb: 2,
            }}
          >
            Find Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            Khallikote Unitary University
            <br />
            Berhampur, Ganjam, Odisha, India Pin – 760001
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 5,
          color: 'text.secondary',
          fontSize: '0.9rem',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2,
          letterSpacing: 0.5,
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;





import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.default',
      color: 'text.secondary',
      py: 6,
      mt: 6,
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.3rem',
              letterSpacing: 1.1,
              mb: 2,
            }}
          >
            Find Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            st. Joseph Unitary University
            <br />
            Berhampur, Ganjam, Odisha, India Pin – 760001
          </Typography>

          {/* Google Map Embed using iframe */}
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
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 5,
          color: 'text.secondary',
          fontSize: '0.9rem',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2,
          letterSpacing: 0.5,
        }}
      >
        &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
