import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

const MotionCard = motion(Card);

const StyledCard = styled(MotionCard)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
  }
}));

const Team = () => {
  const teamMembers = [
    {
      name: "Lend Mustafa",
      role: "Founder & Owner",
      image: "/images/team/lend.jpg",
      bio: "Transgender activist and visionary founder of BUBBLE. Started the first-ever LGBTQI+ bar in Kosovo to provide a safe space for the queer community. With over a decade of experience in LGBTQI+ activism, Lend has been a pioneering voice for transgender rights in Kosovo since coming out publicly through a documentary at nineteen.",
      instagram: "https://instagram.com/lendmustafa",
    },
    {
      name: "Lend Mustafa",
      role: "Lead Mixologist",
      image: "/images/team/lend.jpg",
      bio: "Our creative cocktail genius who turns drinks into works of art. Known for crafting unique LGBTQ+ themed cocktails that tell a story with every sip. Brings over 5 years of mixology experience and endless creativity to our bar.",
      instagram: "https://instagram.com/lendmustafa",
    },
    {
      name: "Lend Mustafa",
      role: "Graphic Designer",
      image: "/images/team/lend.jpg",
      bio: "The artistic mind behind BUBBLE's vibrant visual identity. Creates our eye-catching event posters, maintains our social media aesthetic, and ensures our brand stays as colorful as our community.",
      instagram: "https://instagram.com/lendmustafa",
    },
    {
      name: "Lend Mustafa",
      role: "Lead Server",
      image: "/images/team/lend.jpg",
      bio: "The friendly face you'll see most nights at BUBBLE. Known for remembering everyone's favorite drinks and making sure all our guests feel welcome and safe. Embodies our values of inclusivity and warmth.",
      instagram: "https://instagram.com/lendmustafa",
    }
  ];

  return (
    <Box sx={{ 
      pt: 12, 
      pb: 8, 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
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
            fontWeight: 'bold'
          }}
        >
          Meet Our Team
        </Typography>

        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            mb: 6,
            color: 'secondary.main',
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9
          }}
        >
          The passionate individuals who make BUBBLE a safe space for everyone to express themselves and feel at home.
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} key={member.name + index}>
              <StyledCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ 
                    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold'
                  }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom sx={{ 
                    color: 'secondary.main',
                    mb: 2,
                    fontWeight: 600
                  }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ opacity: 0.9 }}>
                    {member.bio}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <IconButton 
                      href={member.instagram} 
                      target="_blank"
                      sx={{ 
                        color: '#FF69B4',
                        '&:hover': { 
                          color: '#9370DB',
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    {member.name === "Lend Mustafa" && (
                      <IconButton 
                        href="https://www.linkedin.com/in/lendmustafa" 
                        target="_blank"
                        sx={{ 
                          color: '#FF69B4',
                          '&:hover': { 
                            color: '#9370DB',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ 
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 900,
          maxWidth: '300px',
          p: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'right',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Typography variant="h6" gutterBottom sx={{ 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            Join Our Team
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            We're always looking for passionate individuals who believe in creating safe and inclusive spaces.
          </Typography>
          <Button
            variant="contained"
            href="mailto:info@bubblepub.com"
            sx={{
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              padding: '8px 24px',
              borderRadius: '25px',
              '&:hover': {
                background: 'linear-gradient(45deg, #DB7093, #7B68EE)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Team; 