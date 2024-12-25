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
import { ThemeModeContext } from './ThemeMode'; // Ensure correct path

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
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.main', width: '100%' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 3,
            color: 'primary.main', // Use theme's primary color for better contrast
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif', // Clean and modern font
            fontWeight: 600, // Slightly bolder text for emphasis
            letterSpacing: '0.05em', // Subtle spacing for readability
            transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transitions
            '&:hover': {
              color: 'secondary.main', // Change color on hover for interaction
              transform: 'scale(1.05)', // Slightly enlarge for effect
            },
          }}
        >
          Student Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={RouterLink}
              to="/add"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              Create
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/list"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              StudentList
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/search"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              SearchPage
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/export"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              Download List
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/About"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              About
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;