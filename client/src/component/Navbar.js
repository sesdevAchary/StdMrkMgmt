


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
import GitHubIcon from '@mui/icons-material/GitHub';
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
        backgroundColor: mode === 'light' ? 'primary.main' : 'background.paper',
        color: mode === 'light' ? 'background.paper' : 'text.primary',
        boxShadow: mode === 'dark' ? '0 4px 12px rgba(34, 72, 47, 0.1)' : '0 4px 12px rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '10px 20px',
        display: 'flex',
        gap: '20px',
        //  alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.2s ease',

      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // alignItems: 'center',
          margin:{xs:'2px 2px'},
          padding: { xs: '8px 8px', sm: '35px 34px' },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          component={RouterLink}
          to="/"
          sx={{
            color: mode === 'light' ? 'normal.main' : 'primary.main',
            textDecoration: 'none',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 750,
            letterSpacing: '0.02em',
          }}
        >
          STUDENT MANAGEMENT
        </Typography>

        {/* Right side items: GitHub, Theme Toggle, and Menu */}
        <Box sx={{ display: 'flex', alignItems: 'end', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} sx={{ color: mode === 'light' ? 'text.primary' : 'secondary.main' }}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* GitHub Icon */}
          <IconButton
            component="a"
            href="https://github.com/sesdevAchary/StdMrkMgmt"
            target="_blank"  //link should open in a new browser tab or window.
            rel="noopener noreferrer"
            sx={{ color: mode === 'light' ? 'text.primary' : 'secondary.main' }}
          >
            <GitHubIcon />
          </IconButton>

          {/* Menu Icon */}
          <IconButton onClick={handleMenuOpen} sx={{ color: mode === 'light' ? 'text.primary' : 'secondary.main' }}>
            <MenuIcon />
          </IconButton>

          {/* Menu Dropdown */}
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
              { title: 'Add Student', path: '/add' },
              { title: 'Student List', path: '/list' },
              { title: 'Search Page', path: '/search' },
              { title: 'Download Student List', path: '/export' },
              { title: 'About', path: '/about' },
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
