import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const MotionCard = motion.create(Card);

const galleryImages = [
  {
    id: 1,
    title: 'Pride Celebration',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating love and diversity'
  },
  {
    id: 2,
    title: 'Rainbow Flag',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Symbol of LGBTQ+ pride and unity'
  },
  {
    id: 3,
    title: 'Community Support',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Together we are stronger'
  },
  {
    id: 4,
    title: 'Love is Love',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating all forms of love'
  },
  {
    id: 5,
    title: 'Pride Parade',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Marching for equality'
  },
  {
    id: 6,
    title: 'Unity',
    url: 'https://images.unsplash.com/photo-1511795409834-432f7d1fdda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Standing together in solidarity'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            mt: 4,
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Gallery
        </Typography>

        <Grid container spacing={4}>
          {galleryImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <MotionCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleImageClick(image)}
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={image.url}
                  alt={image.title}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {image.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {image.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={!!selectedImage}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage.url}
                alt={selectedImage.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gallery; 