import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeModeContext= createContext();

export const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');


    const toggleTheme = ()={
        setMode((prevMode)=>(prevMode ==== 'dark' ? 'light ':'dark'));
    };

    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode,
            },
            typography: {
              fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
            },
          }),
        [mode]
      );
    