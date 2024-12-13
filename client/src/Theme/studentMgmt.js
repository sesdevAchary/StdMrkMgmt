// src/theme/sapphireGold.js
import { createTheme } from '@mui/material/styles';

const sapphireGoldColors = {
  base: '#0c0f1a', // Deep sapphire blue background
  surface: '#1b2331', // Darker surface with subtle blue tones
  overlay: '#2a3a4f', // Rich blue-gray for overlay
  muted: '#586779', // Muted cool grayish-blue
  subtle: '#8a97b1', // Soft gray-blue for subtle accents
  text: '#f0f4f8', // Crisp white-gray for text
  sapphire: '#3d70a3', // Rich sapphire blue as the main color
  gold: '#ffd700', // Bright gold accents
  coral: '#ff4c58', // Coral for secondary highlights
  mint: '#a4d8c7', // Mint green for info messages
  lavender: '#c8a2d9', // Soft lavender for highlights
  highlightLow: '#212c3b', // Deep low-light shade
  highlightMed: '#3b4a63', // Balanced medium light shade
  highlightHigh: '#59688d', // Lighter high-light color
};

const sapphireGoldTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: sapphireGoldColors.base,
      paper: sapphireGoldColors.surface,
    },
    primary: {
      main: sapphireGoldColors.sapphire,
    },
    secondary: {
      main: sapphireGoldColors.coral,
    },
    error: {
      main: sapphireGoldColors.coral,
    },
    warning: {
      main: sapphireGoldColors.gold,
    },
    info: {
      main: sapphireGoldColors.mint,
    },
    success: {
      main: sapphireGoldColors.sapphire,
    },
    text: {
      primary: sapphireGoldColors.text,
      secondary: sapphireGoldColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Lora", serif, "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: sapphireGoldColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px', // Rounded buttons for a modern look
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: sapphireGoldColors.sapphire,
            color: '#fff',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards and paper elements
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        },
      },
    },
  },
});

export default sapphireGoldTheme;
