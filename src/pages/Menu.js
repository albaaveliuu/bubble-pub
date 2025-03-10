import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Chip,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link as RouterLink } from 'react-router-dom';

const MotionCard = motion(Card);

const menuItems = {
  cocktails: [
    {
      id: 1,
      name: 'Rainbow Pride',
      description: 'A colorful cocktail celebrating diversity with vodka, blue curacao, grenadine, and a splash of lime',
      price: '€8',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Signature',
    },
    {
      id: 2,
      name: 'Bubble Pop',
      description: 'Sparkling prosecco with raspberry puree and edible glitter',
      price: '€7',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Signature',
    },
    {
      id: 3,
      name: 'Lavender Dream',
      description: 'Gin, lavender syrup, lemon juice, and a sprig of fresh lavender',
      price: '€9',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Classic',
    },
    {
      id: 4,
      name: 'Queer Eye',
      description: 'Vodka, elderflower liqueur, prosecco, and a dash of edible glitter',
      price: '€10',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Signature',
    },
    {
      id: 5,
      name: 'Drag Queen',
      description: 'Rum, passion fruit, coconut cream, and pineapple juice',
      price: '€9',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Signature',
    },
    {
      id: 6,
      name: 'Pride Punch',
      description: 'A rainbow blend of fruit juices, vodka, and a splash of soda',
      price: '€8',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Signature',
    },
  ],
  food: [
    {
      id: 1,
      name: 'Rainbow Nachos',
      description: 'Colorful tortilla chips topped with melted cheese, guacamole, salsa, and sour cream',
      price: '€12',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Starters',
    },
    {
      id: 2,
      name: 'Pride Burger',
      description: 'Beef patty with rainbow slaw, special sauce, and a side of fries',
      price: '€15',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Main Course',
    },
    {
      id: 3,
      name: 'Drag Queen Wings',
      description: 'Spicy chicken wings with a variety of sauces',
      price: '€14',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Starters',
    },
    {
      id: 4,
      name: 'Rainbow Pasta',
      description: 'Colorful pasta with fresh vegetables and parmesan cheese',
      price: '€16',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Main Course',
    },
    {
      id: 5,
      name: 'LGBTQ+ Pizza',
      description: 'Pizza topped with rainbow vegetables and special sauce',
      price: '€18',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Main Course',
    },
    {
      id: 6,
      name: 'Pride Fries',
      description: 'Seasoned fries with rainbow seasoning and dipping sauce',
      price: '€8',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Starters',
    },
  ],
};

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
          Our Menu
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/reservations"
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
            Reserve a Table
          </Button>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: '#FF69B4',
                },
              },
            }}
          >
            <Tab
              icon={<LocalDrinkIcon />}
              label="Cocktails"
              iconPosition="start"
            />
            <Tab
              icon={<RestaurantIcon />}
              label="Food"
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {(selectedTab === 0 ? menuItems.cocktails : menuItems.food).map(
            (item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                    image={item.image}
                    alt={item.name}
                    sx={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#FF69B4', fontWeight: 600 }}>
                        {item.price}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{ 
                        mb: 2,
                        background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                        },
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu; 