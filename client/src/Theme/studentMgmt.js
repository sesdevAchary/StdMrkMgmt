


// src/theme/radiantGlow.js
import { createTheme } from '@mui/material/styles';

const radiantGlowColors = {
  base: '#10101A', // Dark, neutral background for high contrast
  surface: '#1F1F29', // Slightly lighter surface for depth
  overlay: '#2A2A3D', // Soft overlay with rich tone
  muted: '#A2A8D0', // Muted secondary text for less emphasis
  subtle: '#F1E8D6', // Softer color for subtle accents
  text: '#FFFFFF', // White text for better readability on dark backgrounds
  love: '#FF4971', // Bright pink accent for love/warning
  gold: '#FFB94E', // Golden accents for highlight and success
  aqua: '#1E90FF', // Vibrant blue for info/secondary
  lavender: '#B67DFF', // Soft purple for light accents
  mint: '#55D0A7', // Mint green for success
  coral: '#FF6B6B', // Coral for error states
  highlightLow: '#3C4C6A', // Subtle highlight
  highlightMed: '#FF4C7A', // Medium contrast for interactive elements
  highlightHigh: '#FF7F50', // High contrast accent for CTA
};

const radiantGlowTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@400;600;700&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: radiantGlowColors.base,
      paper: radiantGlowColors.surface,
    },
    primary: {
      main: radiantGlowColors.highlightMed,
    },
    secondary: {
      main: radiantGlowColors.aqua,
    },
    error: {
      main: radiantGlowColors.coral,
    },
    warning: {
      main: radiantGlowColors.love,
    },
    info: {
      main: radiantGlowColors.aqua,
    },
    success: {
      main: radiantGlowColors.mint,
    },
    text: {
      primary: radiantGlowColors.text,
      secondary: radiantGlowColors.muted,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '3.25rem',
      color: radiantGlowColors.text,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      color: radiantGlowColors.text,
      lineHeight: 1.35,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2.125rem',
      color: radiantGlowColors.text,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: '1.875rem',
      color: radiantGlowColors.text,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      color: radiantGlowColors.text,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      color: radiantGlowColors.text,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: radiantGlowColors.overlay,
          color: radiantGlowColors.text,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '1rem',
        },
        contained: {
          backgroundColor: radiantGlowColors.highlightMed,
          color: radiantGlowColors.text,
          '&:hover': {
            backgroundColor: radiantGlowColors.highlightHigh,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            backgroundColor: radiantGlowColors.highlightLow,
          },
        },
        outlined: {
          borderColor: radiantGlowColors.highlightMed,
          color: radiantGlowColors.text,
          '&:hover': {
            borderColor: radiantGlowColors.highlightHigh,
            color: radiantGlowColors.highlightHigh,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: radiantGlowColors.surface,
          color: radiantGlowColors.text,
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.25)',
          backgroundColor: radiantGlowColors.surface,
          padding: '20px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: radiantGlowColors.text,
        },
      },
    },
  },
});

export default radiantGlowTheme;
