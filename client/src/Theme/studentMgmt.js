// src/theme/twilightHorizon.js
import { createTheme } from '@mui/material/styles';

const twilightHorizonColors = {
  base: '#2C2E43',
  surface: '#383A59',
  overlay: '#52557A',
  muted: '#9298B8',
  subtle: '#F0E9D2',
  text: '#F7F7FF',
  love: '#F2545B',
  gold: '#EFB366',
  rose: '#FF9671',
  pine: '#A0C4A8',
  foam: '#D4ECDD',
  iris: '#4357AD',
  highlightLow: '#2E4057',
  highlightMed: '#7289DA',
  highlightHigh: '#FF6F61',
};

const twilightHorizonTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: twilightHorizonColors.base,
      paper: twilightHorizonColors.surface,
    },
    primary: {
      main: twilightHorizonColors.highlightMed,
    },
    secondary: {
      main: twilightHorizonColors.foam,
    },
    error: {
      main: twilightHorizonColors.love,
    },
    warning: {
      main: twilightHorizonColors.gold,
    },
    info: {
      main: twilightHorizonColors.iris,
    },
    success: {
      main: twilightHorizonColors.pine,
    },
    text: {
      primary: twilightHorizonColors.text,
      secondary: twilightHorizonColors.muted,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: twilightHorizonColors.overlay,
          color: twilightHorizonColors.text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '10px',
          padding: '8px 16px',
        },
        contained: {
          backgroundColor: twilightHorizonColors.highlightMed,
          color: twilightHorizonColors.text,
          '&:hover': {
            backgroundColor: twilightHorizonColors.highlightHigh,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: twilightHorizonColors.surface,
          color: twilightHorizonColors.text,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});

export default twilightHorizonTheme;
