// src/theme/midnightEmerald.js
import { createTheme } from '@mui/material/styles';

const midnightEmeraldColors = {
  base: '#0e1a28', // Deep midnight blue background
  surface: '#1b2a3c', // Slightly lighter blue for surfaces
  overlay: '#25334a', // A more subtle blue-gray for overlay
  muted: '#5a6478', // Muted grayish-blue
  subtle: '#8091a4', // Subtle light grayish-blue
  text: '#d0d9e1', // Light gray for text
  emerald: '#4caf50', // Emerald green as the main color
  gold: '#ffb74d', // Golden accents
  coral: '#ff6f61', // Coral as a secondary highlight
  sky: '#64b5f6', // Sky blue for info messages
  lavender: '#b39ddb', // Lavender for highlights
  highlightLow: '#1d2a3d', // Darker low-light color
  highlightMed: '#37465c', // Medium light color
  highlightHigh: '#4f6175', // Lightest shade for highlights
};

const midnightEmeraldTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: midnightEmeraldColors.base,
      paper: midnightEmeraldColors.surface,
    },
    primary: {
      main: midnightEmeraldColors.emerald,
    },
    secondary: {
      main: midnightEmeraldColors.coral,
    },
    error: {
      main: midnightEmeraldColors.coral,
    },
    warning: {
      main: midnightEmeraldColors.gold,
    },
    info: {
      main: midnightEmeraldColors.sky,
    },
    success: {
      main: midnightEmeraldColors.emerald,
    },
    text: {
      primary: midnightEmeraldColors.text,
      secondary: midnightEmeraldColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Courier New", monospace',
    },
    h2: {
      fontFamily: '"Courier New", monospace',
    },
    h3: {
      fontFamily: '"Courier New", monospace',
    },
    h4: {
      fontFamily: '"Courier New", monospace',
    },
    h5: {
      fontFamily: '"Courier New", monospace',
    },
    h6: {
      fontFamily: '"Courier New", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: midnightEmeraldColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Courier+New&display=swap');
      `,
    }
  },
});

export default midnightEmeraldTheme;
