import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 4,
                mt: 8,
                background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              BUBBLE Pub
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                fontWeight: 500,
              }}
            >
              Queer pub based in Prishtinë 🏳️‍🌈 21+
            </Typography>
            <Button
              component={RouterLink}
              to="/reservations"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                padding: '12px 32px',
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              Make a Reservation
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Info Section */}
      <Container sx={{ py: 8, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MotionPaper
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                },
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 40, color: '#FF69B4', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Opening Hours
              </Typography>
              <Typography>
                Monday - Saturday: 09:00 - 00:00
                <br />
                Kitchen hours: 9:00 - 18:00
              </Typography>
            </MotionPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <MotionPaper
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                },
              }}
            >
              <LocationOnIcon sx={{ fontSize: 40, color: '#9370DB', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography>
                Str. Sylejman Vokshi, 10000
                <br />
                Prishtinë, Kosovo
              </Typography>
            </MotionPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <MotionPaper
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                },
              }}
            >
              <RestaurantIcon sx={{ fontSize: 40, color: '#FF69B4', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Food & Drinks
              </Typography>
              <Typography>
                Delicious food and creative cocktails
                <br />
                Check out our menu for more details
              </Typography>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 