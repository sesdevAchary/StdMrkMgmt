// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

// const notesPages = [
//   { title: 'Home', path: '/notes/home' },
//   { title: 'Schedule', path: '/notes/schedule' },
// ];

// const Navbar = () => {
//   const [notesAnchorEl, setNotesAnchorEl] = useState(null);

//   const handleNotesClick = (event) => {
//     setNotesAnchorEl(event.currentTarget);
//   };

//   const handleNotesClose = () => {
//     setNotesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: 'highlightHigh' }}>
//           STUDENT MARK MANAGEMENT
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Button
//             color="primary"
//             component={RouterLink}
//             to="/"
//             startIcon={<HomeIcon />}
//           >
//             Home
//           </Button>
//           <Button
//             color="primary"
//             onClick={handleNotesClick}
//             startIcon={<MenuBookIcon />} // Added icon here
//           >
//             Notes
//           </Button>
//           <Menu
//             anchorEl={notesAnchorEl}
//             open={Boolean(notesAnchorEl)}
//             onClose={handleNotesClose}
//           >
//             {notesPages.map((page) => (
//               <MenuItem 
//                 key={page.path} 
//                 component={RouterLink} 
//                 to={page.path}
//                 onClick={handleNotesClose}
//               >
//                 {page.title}
//               </MenuItem>
//             ))}
//           </Menu>
//            <IconButton
//             color="primary"
//             component="a"
//             href="https://github.com/sesdevAchary/StdMrkMgmt"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub">
//             <GitHubIcon />
//           </IconButton> 
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import React, { useContext, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Box,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { ThemeModeContext } from './ThemeMode'; 

// const Navbar = () => {
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const { mode, toggleTheme } = useContext(ThemeModeContext);

//   const handleMenuOpen = (event) => {
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: mode === 'light' ? 'primary.main' : 'background.default',
//         color: mode === 'light' ? 'text.primary' : 'secondary.main',
//         boxShadow: '0 6px 9px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
//         transition: 'background-color 0.3s ease',
//       }}
//     >
//       <Toolbar
//         sx={{
//           justifyContent: 'space-between',
//           padding: { xs: '8px 16px', sm: '12px 24px' }, // Responsive padding
//         }}
//       >
//         <Typography
//           variant="h5"
//           component={RouterLink}
//           to="/"
//           sx={{
//             color: mode === 'light' ? 'secondary.main' : 'primary.main',
//             textDecoration: 'none',
//             fontFamily: 'Nunito, sans-serif', // Sleek and modern font
//             fontWeight: 700,
//             letterSpacing: '0.05em',
//             transition: 'color 0.3s ease, transform 0.3s ease',
//             '&:hover': {
//               color: 'secondary.dark', // Interactive hover effect
//               transform: 'scale(1.1)', // Subtle zoom
//             },
//           }}
//         >
//           STUDENT MANAGEMENT
//         </Typography>

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <IconButton
//             onClick={toggleTheme}
//             sx={{
//               color: mode === 'light' ? 'text.primary' : 'secondary.light',
//               '&:hover': {
//                 color: 'secondary.dark',
//               },
//               transition: 'color 0.3s ease',
//             }}
//           >
//             {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
//           </IconButton>

//           <IconButton
//             onClick={handleMenuOpen}
//             sx={{
//               color: mode === 'light' ? 'text.primary' : 'secondary.light',
//               '&:hover': {
//                 color: 'secondary.dark',
//               },
//               transition: 'color 0.3s ease',
//             }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Menu
//             anchorEl={menuAnchorEl}
//             open={Boolean(menuAnchorEl)}
//             onClose={handleMenuClose}
//             sx={{
//               '& .MuiPaper-root': {
//                 backgroundColor: mode === 'light' ? 'background.paper' : 'background.default',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                 transition: 'all 0.3s ease',
//               },
//             }}
//           >
//             {[
//               { title: 'Create', path: '/add' },
//               { title: 'Student List', path: '/list' },
//               { title: 'Search Page', path: '/search' },
//               { title: 'Download List', path: '/export' },
              
//             ].map((item) => (
//               <MenuItem
//                 key={item.path}
//                 component={RouterLink}
//                 to={item.path}
//                 onClick={handleMenuClose}
//                 sx={{
//                   color: 'text.primary',
//                   fontFamily: 'Poppins, sans-serif',
//                   padding: '10px 20px',
//                   '&:hover': {
//                     backgroundColor: 'primary.light',
//                     color: 'secondary.dark',
//                   },
//                   transition: 'all 0.3s ease',
//                 }}
//               >
//                 {item.title}
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;



import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub Icon
import { ThemeModeContext } from './ThemeMode';

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { mode, toggleTheme } = useContext(ThemeModeContext);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: mode === 'light' ? 'primary.main' : 'background.default',
        color: mode === 'light' ? 'text.primary' : 'secondary.main',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          padding: { xs: '8px 16px', sm: '12px 24px' },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            color: mode === 'light' ? 'secondary.main' : 'primary.main',
            textDecoration: 'none',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 700,
            letterSpacing: '0.08em',
            transition: 'color 0.3s ease, transform 0.3s ease',
            '&:hover': {
              color: 'secondary.dark',
              transform: 'scale(1.1)',
            },
          }}
        >
          Student Management
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: mode === 'light' ? 'text.primary' : 'secondary.light',
              '&:hover': {
                color: 'secondary.dark',
              },
              transition: 'color 0.3s ease',
            }}
          >
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* GitHub Logo */}
          <IconButton
            component="a"
            href="https://github.com/sesdevAchary/StdMrkMgmt" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: mode === 'light' ? 'text.primary' : 'secondary.light',
              '&:hover': {
                color: 'secondary.dark',
              },
              transition: 'color 0.3s ease',
            }}
          >
            <GitHubIcon />
          </IconButton>

          {/* Menu */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              color: mode === 'light' ? 'text.primary' : 'secondary.light',
              '&:hover': {
                color: 'secondary.dark',
              },
              transition: 'color 0.3s ease',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: mode === 'light' ? 'background.paper' : 'background.default',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            {[
              { title: 'Create', path: '/add' },
              { title: 'Student List', path: '/list' },
              { title: 'Search Page', path: '/search' },
              { title: 'Download List', path: '/export' },
              { title: 'About', path: '/about' },
              { title: 'New Feature', path: '/new-feature' }, // Add your new button item
            ].map((item) => (
              <MenuItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
                sx={{
                  color: 'text.primary',
                  fontFamily: 'Poppins, sans-serif',
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'secondary.dark',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
