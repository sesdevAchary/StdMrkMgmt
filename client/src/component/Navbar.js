import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

const notesPages = [
    { title: 'Home', path: '/notes/home' },
    { title: 'Schedule', path: '/notes/schedule' },
  ];

  const Navbar = () => {
    const [notesAnchorEl, setNotesAnchorEl] = useState(null);
  
    const handleNotesClick = (event) => {
      setNotesAnchorEl(event.currentTarget);
    };