import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Menu', path: '/menu' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            position: 'relative',
            minHeight: '70px'
          }}
        >
          {/* Logo positioned absolutely on the left */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              position: 'absolute',
              left: 0,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            BUBBLE
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                position: 'absolute',
                right: 0,
              }}
            >
              <MenuIcon sx={{ color: '#FF69B4' }} />
            </IconButton>
          ) : (
            <>
              {/* Centered navigation items */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: 3,
                  mx: 'auto'
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      color: location.pathname === page.path ? '#FF69B4' : 'text.primary',
                      fontWeight: 500,
                      '&:hover': {
                        background: 'rgba(255, 105, 180, 0.1)',
                        color: '#FF69B4',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
              
              {/* Instagram icon positioned absolutely on the right */}
              <IconButton
                component="a"
                href="https://www.instagram.com/bubble__pub/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  right: 0,
                  color: '#FF69B4',
                  '&:hover': {
                    background: 'rgba(255, 105, 180, 0.1)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </>
          )}

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{
              sx: {
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                width: 240,
              },
            }}
          >
            <List>
              {pages.map((page) => (
                <ListItem
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    color: location.pathname === page.path ? '#FF69B4' : 'text.primary',
                    '&:hover': {
                      background: 'rgba(255, 105, 180, 0.1)',
                    },
                  }}
                >
                  <ListItemText primary={page.name} />
                </ListItem>
              ))}
              <ListItem
                component="a"
                href="https://www.instagram.com/bubble__pub/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    background: 'rgba(255, 105, 180, 0.1)',
                  },
                }}
              >
                <InstagramIcon sx={{ mr: 1 }} />
                <ListItemText primary="Instagram" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 