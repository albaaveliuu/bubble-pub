import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';

const MotionCard = motion(Card);

const events = [
  {
    id: 1,
    title: 'Drag Show Night',
    date: '2024-03-15',
    time: '21:00',
    description: 'An amazing night of drag performances and entertainment! Join us for a spectacular show featuring local and international drag artists.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
  },
  {
    id: 2,
    title: 'Karaoke Night',
    date: '2024-03-20',
    time: '20:00',
    description: 'Sing your heart out with our amazing karaoke night! Show off your vocal talents in a safe and supportive environment.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Music',
  },
  {
    id: 3,
    title: 'Pride Month Celebration',
    date: '2024-06-01',
    time: '18:00',
    description: 'Join us for a month-long celebration of love and diversity! Special performances, themed nights, and community gatherings.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Special Event',
  },
  {
    id: 4,
    title: 'LGBTQ+ Movie Night',
    date: '2024-03-25',
    time: '19:00',
    description: 'Watch classic and contemporary LGBTQ+ films in a cozy atmosphere. Free popcorn and drinks specials!',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
  },
  {
    id: 5,
    title: 'Rainbow Trivia Night',
    date: '2024-04-05',
    time: '20:00',
    description: 'Test your knowledge of LGBTQ+ history, pop culture, and more! Prizes for the winning team.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Games',
  },
  {
    id: 6,
    title: 'Queer Poetry Slam',
    date: '2024-04-15',
    time: '21:00',
    description: 'Share your voice through poetry! Open mic night featuring LGBTQ+ poets and spoken word artists.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Arts',
  },
  {
    id: 7,
    title: 'Open Mic Night',
    date: '2024-04-10',
    time: '20:00',
    description: 'Your time to shine! Whether you\'re a singer, poet, comedian, or just want to share your story - this is your night! All talents welcome in our safe and supportive space. Sign up at the door!',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
  },
];

const Events = () => {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            mt: 4,
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Upcoming Events
        </Typography>

        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} lg={4} key={event.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Chip
                    label={event.category}
                    color="primary"
                    size="small"
                    sx={{ 
                      mb: 3,
                      background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                      },
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarTodayIcon sx={{ mr: 1, color: '#FF69B4' }} />
                    <Typography variant="body2">
                      {format(new Date(event.date), 'MMMM d, yyyy')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: '#9370DB' }} />
                    <Typography variant="body2">{event.time}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: '#FF69B4' }} />
                    <Typography variant="body2">BUBBLE Pub</Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    {event.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontStyle: 'italic' }}>
                    Kitchen Hours: 9:00 - 18:00
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to="/reservations"
                    sx={{
                      background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                      },
                    }}
                  >
                    Reserve a Table
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events; 