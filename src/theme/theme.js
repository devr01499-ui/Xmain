import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
      light: '#5e8bff',
      dark: '#0d47a1',
      100: '#e0e7ff',
    },
    secondary: {
      main: '#000047',
      light: '#1a1a5c',
      dark: '#00002e',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
    success: {
      main: '#10b981',
    },
    error: {
      main: '#ef4444',
    },
    info: {
      main: '#3b82f6',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      '@media (max-width:960px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
