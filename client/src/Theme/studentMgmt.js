// src/theme/midnightLavender.js
import { createTheme } from '@mui/material/styles';

const midnightLavenderColors = {
  base: '#121212', // Deep midnight black background
  surface: '#1a1a2e', // Darker surface with cool undertones
  overlay: '#2c2c57', // Subtle cool blue overlay
  muted: '#56597c', // Muted cool gray for secondary elements
  subtle: '#a8a8d0', // Soft lavender-gray for text accents
  text: '#e8e8ff', // Light, soft lavender for primary text
  lavender: '#7a55d6', // Bold lavender as the primary accent color
  electricBlue: '#00bcd4', // Neon blue for secondary highlights
  rosePink: '#f48fb1', // Soft rose pink for highlights
  teal: '#00796b', // Teal for info messages
  highlightLow: '#1c1c33', // Darker low-light color
  highlightMed: '#3b3b6d', // Medium dark grayish tone
  highlightHigh: '#636388', // Lighter cool gray for highlights
};

const midnightLavenderTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: midnightLavenderColors.base,
      paper: midnightLavenderColors.surface,
    },
    primary: {
      main: midnightLavenderColors.lavender,
    },
    secondary: {
      main: midnightLavenderColors.electricBlue,
    },
    error: {
      main: midnightLavenderColors.rosePink,
    },
    warning: {
      main: midnightLavenderColors.rosePink,
    },
    info: {
      main: midnightLavenderColors.teal,
    },
    success: {
      main: midnightLavenderColors.lavender,
    },
    text: {
      primary: midnightLavenderColors.text,
      secondary: midnightLavenderColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', // Clean and modern sans-serif
    h1: {
      fontFamily: '"Roboto Slab", serif', // Bold serif for headings
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: midnightLavenderColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '10px', // Rounded edges for modern buttons
          padding: '12px 20px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: midnightLavenderColors.lavender,
            color: '#fff',
            transform: 'scale(1.05)', // Hover animation
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto+Slab:wght@400;500;700&display=swap');
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '10px', // Rounded corners for a modern feel
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow for depth
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.75rem',
        },
        h5: {
          fontSize: '1.5rem',
        },
        h6: {
          fontSize: '1.25rem',
        },
      },
    },
  },
});

export default midnightLavenderTheme;
