import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Reservations from './pages/Reservations';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot pink
      light: '#FFB6C1',
      dark: '#DB7093',
    },
    secondary: {
      main: '#9370DB', // Purple
      light: '#B19CD9',
      dark: '#7B68EE',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '25px',
          padding: '8px 24px',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: "/events",
      element: (
        <>
          <Navbar />
          <Events />
        </>
      )
    },
    {
      path: "/reservations",
      element: (
        <>
          <Navbar />
          <Reservations />
        </>
      )
    },
    {
      path: "/menu",
      element: (
        <>
          <Navbar />
          <Menu />
        </>
      )
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
        </>
      )
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider
        router={createBrowserRouter(routes, {
          future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }
        })}
      />
    </ThemeProvider>
  );
}

export default App; 