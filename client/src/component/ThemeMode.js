import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeModeContext= createContext();

export const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');