import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CelebrationIcon from '@mui/icons-material/Celebration';

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

      {/* About Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          About BUBBLE
        </Typography>

        <Grid container spacing={6}>
          {/* Our Space */}
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                mb: 2 
              }}>
                Our Space
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                BUBBLE is Prishtinë's premier LGBTQIA+ bar and queer performance space, bringing the best of vibrant nightlife to Kosovo. We feature exciting drag shows every weekend, weekly karaoke nights, monthly trivia events and marketplaces, and a great selection of tap beers all the time. This is a place of warmth, radiance, unabashed self-expression, inclusivity, and togetherness - show up with kindness and respect, and you're welcome to be a part of it.
              </Typography>
            </Box>
          </Grid>

          {/* Values & Safety */}
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mr: 2, 
                  fontSize: '2rem' 
                }} />
                <Typography variant="h5" sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  Our Values & Safety Policy
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                We hope you feel at home here. Communal respect and interpersonal safety are very important to us. We do not tolerate any racism, homophobia, transphobia, misogyny, or hatred of any kind.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                If you experience or witness a lack of safety or respect, please reach out to our staff at the bar or door, or to the event hosts, for their support in resolving any issues.
              </Typography>
            </Box>
          </Grid>

          {/* Awareness Team */}
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mr: 2, 
                  fontSize: '2rem' 
                }} />
                <Typography variant="h5" sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  Awareness Team
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9, backgroundColor: 'rgba(255, 105, 180, 0.1)', p: 2, borderRadius: 2 }}>
                On Fridays and Saturdays, we have an Awareness Team working in Pink Vests, from 7:30pm-late, there to help you with any issues or concerns, and to help us all create a safer space.
              </Typography>
            </Box>
          </Grid>

          {/* The BUBBLE Manifesto */}
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEmotionsIcon sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mr: 2, 
                  fontSize: '2rem' 
                }} />
                <Typography variant="h5" sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  The BUBBLE Manifesto
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: '1.1rem', 
                backgroundColor: 'rgba(147, 112, 219, 0.1)', 
                p: 2, 
                borderRadius: 2,
                fontStyle: 'italic',
                opacity: 0.9
              }}>
                "Here at BUBBLE, we believe that life is too short for bad drinks and boring nights. We're the place where your glitter never fades, your sass is always welcome, and your dance moves are always fabulous (even if they look like a penguin having a seizure)."
              </Typography>
              <Box sx={{ pl: 4, mt: 2 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1, opacity: 0.9 }}>
                  🌈 Where the drinks are strong, but the community is stronger
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1, opacity: 0.9 }}>
                  💃 Home of the "It's not a phase, mom, it's who I am" dance floor
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1, opacity: 0.9 }}>
                  🎭 Our drag queens don't lip-sync for their lives - they lip-sync for your entertainment!
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1, opacity: 0.9 }}>
                  🎤 Karaoke rule #1: If you can't hit the high notes, just yell them with pride
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  ✨ The only place in Prishtinë where "too much" is just enough
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Events */}
          <Grid item xs={12}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CelebrationIcon sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mr: 2, 
                  fontSize: '2rem' 
                }} />
                <Typography variant="h5" sx={{ 
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  Our Events
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                Join us for our regular events:
              </Typography>
              <Box component="ul" sx={{ pl: 4, opacity: 0.9 }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Drag Shows - Every Weekend
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Karaoke Nights - Weekly
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Trivia Nights - Monthly
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  LGBTQ+ Marketplace - Monthly
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 