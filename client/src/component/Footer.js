




// import React from 'react';
// import { Box, Typography, Container, Link, Grid } from '@mui/material';
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
//       <Grid container spacing={4}>
//         {/* Left Section: Contact Us */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               color: 'text.primary',
//               fontWeight: 600,
//               fontSize: '1.3rem',
//               letterSpacing: 1.1,
//               mb: 2,
//             }}
//           >
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.primary' }}>
//             Khallikote Unitary University
//             <br />
//             st. Joseph Unitary University
//             <br />
//             Berhampur, Ganjam, Odisha, India Pin – 760001
//             <br />
//             Phone: 91-680-2229667
//             <br />
//             Phone: 91-7848011250
//             <br />
//             Email: <Link href="mailto:kkcprincipal@gmail.com">kkcprincipal@gmail.com</Link>
//             <br />
//             Email: <Link href="mailto:josephuniversity@gmail.com">josephUniversity@gmail.com</Link>
//           </Typography>
//         </Grid>

//         {/* Middle Section: Important Links */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               color: 'text.primary',
//               fontWeight: 600,
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
//             <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               MOCOLLEGE ABHIJAN
//             </Link>
//             <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               OHEPEE
//             </Link>
//             <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               UGC
//             </Link>
//             <Link href="#" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
//               RUSA
//             </Link>
//             <Link href="#" sx={{ display: 'block', color: 'primary.main' }}>
//               VIRTUAL TUTORIAL PROJECT
//             </Link>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Footer Bottom Section */}
//       <Typography
//         variant="caption"
//         sx={{
//           display: 'block',
//           mt: 5,
//           color: 'text.secondary',
//           fontSize: '0.9rem',
//           borderTop: '1px solid',
//           borderColor: 'divider',
//           pt: 2,
//           letterSpacing: 0.5,
//         }}
//       >
//         &copy; {new Date().getFullYear()} The Sesdev Achary. All rights reserved.
//       </Typography>
//     </Container>

//     {/* Add the Find Us Section here */}
//     <FindUs />
//   </Box>
// );

// export default Footer;




import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import FindUs from './FindUs'; // Import the FindUs component

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
        </Grid>

        {/* Middle Section: Important Links */}
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
            <Link href="https://dst.gov.in/" sx={{ display: 'block', color: 'primary.main', mb: 1 }}>
              DST, GOVT. OF INDIA
            </Link>
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

    {/* Add the Find Us Section as a separate div on the right side */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
      <FindUs />
    </Box>
  </Box>
);

export default Footer;
