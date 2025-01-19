


// import React from 'react';
// import { Box, Typography, Container, Link } from '@mui/material';

// const Footer = () => (
//   <Box
//     component="footer"
//     sx={{
//       bgcolor: 'background.default',
//       color: 'text.secondary',
//       py: 6, // Increased padding for better spacing
//       mt: 6,  // More space between the main content and footer
//       textAlign: 'center',
//       borderTop: (theme) => `1px solid ${theme.palette.divider}`,
//       boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)', // Enhanced shadow for depth
//     }}
//   >
//     <Container maxWidth="lg">
//       <Typography
//         variant="h6"
//         sx={{
//           color: 'text.primary',
//           fontWeight: 600, // Bold for prominence
//           fontSize: '1.3rem', // Slightly larger font size for attention
//           letterSpacing: 1.1, // Improved spacing for readability
//           mb: 2, // Margin below to separate from other elements
//         }}
//       >
//         &#128522; Thanks for your attention &#128522;
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           color: 'text.primary',
//           fontWeight: 400,
//           fontSize: '1rem', // Clean and readable font size
//           lineHeight: 1.5, // Improve line spacing
//           mb: 4, // Margin below for separation
//         }}
//       >
//         Prepared and served with care by <strong>The Sesdev Achary</strong>
//         <br />
//         Credit to <strong>Chinmaya Panigrahi</strong> bro
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//         <Link
//           href="#"
//           sx={{
//             color: 'primary.main',
//             textDecoration: 'none',
//             '&:hover': {
//               textDecoration: 'underline',
//               color: 'primary.dark',
//             },
//             fontWeight: 500,
//             fontSize: '1rem',
//           }}
//         >
//           Terms & Conditions
//         </Link>
//         <Link
//           href="#"
//           sx={{
//             color: 'primary.main',
//             textDecoration: 'none',
//             '&:hover': {
//               textDecoration: 'underline',
//               color: 'primary.dark',
//             },
//             fontWeight: 500,
//             fontSize: '1rem',
//           }}
//         >
//           Privacy Policy
//         </Link>
//       </Box>
//       <Typography
//         variant="caption"
//         sx={{
//           display: 'block',
//           mt: 5, // Adds space above copyright text
//           color: 'text.secondary',
//           fontSize: '0.9rem',
//           borderTop: '1px solid',
//           borderColor: 'divider',
//           pt: 2, // Padding top to add space between content and divider
//           letterSpacing: 0.5,
//         }}
//       >
//         &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
//       </Typography>
//     </Container>
//   </Box>
// );

// export default Footer;


import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.default',
      color: 'text.secondary',
      py: 6, // Increased padding for better spacing
      mt: 6, // More space between the main content and footer
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)', // Enhanced shadow for depth
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Left Section: Contact Us */}
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
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            Khallikote Unitary University
            <br />
            Berhampur, Ganjam, Odisha, India Pin – 760001
            <br />
            Phone: 91-680-2229667
            <br />
            Email: <Link href="mailto:kkcprincipal@gmail.com">kkcprincipal@gmail.com</Link>
          </Typography>
        </Grid>

        {/* Middle Section: Quick Links */}
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
            Quick Links
          </Typography>
          <Box>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              RESULTS
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              TENDERS
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              IQAC
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              NAAC
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              GALLERY
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main' }}>
              CONTACT
            </Link>
          </Box>
        </Grid>

        {/* Right Section: Important Links */}
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
            Important Links
          </Typography>
          <Box>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DST, GOVT. OF INDIA
            </Link>
            <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
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
