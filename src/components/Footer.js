import React from 'react';
import { Box, Container, Typography, IconButton, Link, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)',
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.2s',
  }
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FF69B4' }}>
              BUBBLE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your favorite LGBTQ+ friendly pub in Prishtinë
            </Typography>
            <Box>
              <SocialIcon component={Link} href="https://instagram.com/bubble.pub" target="_blank">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon component={Link} href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </SocialIcon>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#9370DB' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2">info@bubblepub.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2">+383 44 123 456</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2">Prishtinë, Kosovo</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FF69B4' }}>
              Opening Hours
            </Typography>
            <Typography variant="body2">
              Monday - Thursday: 4PM - 12AM
            </Typography>
            <Typography variant="body2">
              Friday - Saturday: 4PM - 2AM
            </Typography>
            <Typography variant="body2">
              Sunday: 4PM - 12AM
            </Typography>
          </Grid>
        </Grid>

        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 4, 
            pt: 2, 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)' 
          }}
        >
          © {new Date().getFullYear()} BUBBLE. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 