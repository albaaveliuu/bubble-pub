import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const About = () => {
  const [gameResult, setGameResult] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const identities = [
    "🎭 Dramatic Top",
    "✨ Glitter Bottom",
    "🌈 Versatile Queen",
    "💅 Power Switch",
    "🎪 Circus Top",
    "🦄 Unicorn Bottom",
    "👑 Royal Verse",
    "🎨 Creative Switch",
    "🌟 Star Top",
    "🎵 Musical Bottom",
    "🎪 Party Verse",
    "🎭 Drama Switch"
  ];

  const adjectives = [
    "who lives for drama",
    "who can't sit in chairs properly",
    "who drinks iced coffee in winter",
    "who knows every Gaga choreography",
    "who quotes Mean Girls daily",
    "who has too many plants",
    "who's always fashionably late",
    "who collects crystals",
    "who starts every sentence with 'hey bestie'",
    "who thinks everything is camp"
  ];

  const playGame = () => {
    setIsPlaying(true);
    setTimeout(() => {
      const randomIdentity = identities[Math.floor(Math.random() * identities.length)];
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      setGameResult(`You are a ${randomIdentity} ${randomAdjective}`);
      setIsPlaying(false);
    }, 1500);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
        }}
      >
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            color: 'primary.main',
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold'
          }}
        >
          About BUBBLE
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', mb: 2 }}>
            Our Space
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            BUBBLE is Prishtinë's premier LGBTQIA+ bar and queer performance space, bringing the best of vibrant nightlife to Kosovo. We feature exciting drag shows every weekend, weekly karaoke nights, monthly trivia events and marketplaces, and a great selection of tap beers all the time. This is a place of warmth, radiance, unabashed self-expression, inclusivity, and togetherness - show up with kindness and respect, and you're welcome to be a part of it.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SecurityIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" sx={{ color: 'secondary.main' }}>
              Our Values & Safety Policy
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            We hope you feel at home here. Communal respect and interpersonal safety are very important to us. We do not tolerate any racism, homophobia, transphobia, misogyny, or hatred of any kind.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            If you experience or witness a lack of safety or respect, please reach out to our staff at the bar or door, or to the event hosts, for their support in resolving any issues.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PeopleIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" sx={{ color: 'secondary.main' }}>
              Awareness Team
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', backgroundColor: 'rgba(255, 105, 180, 0.1)', p: 2, borderRadius: 2 }}>
            On Fridays and Saturdays, we have an Awareness Team working in Pink Vests, from 7:30pm-late, there to help you with any issues or concerns, and to help us all create a safer space.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SportsEsportsIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" sx={{ color: 'secondary.main' }}>
              The BUBBLE Identity Generator
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem', 
            backgroundColor: 'rgba(147, 112, 219, 0.1)', 
            p: 2, 
            borderRadius: 2 
          }}>
            Curious about your queer destiny? Let our magical generator reveal your true BUBBLE identity! 
            (Warning: Results are about as reliable as your ex's promises! 😉)
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2,
            my: 3,
            p: 3,
            backgroundColor: 'rgba(255, 105, 180, 0.1)',
            borderRadius: 2
          }}>
            <Button
              variant="contained"
              color="primary"
              onClick={playGame}
              disabled={isPlaying}
              sx={{
                minWidth: 200,
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isPlaying ? "🎲 Rolling..." : "🎲 Reveal My Identity!"}
            </Button>
            
            {gameResult && (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    mt: 2
                  }}
                >
                  {gameResult}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    mt: 1,
                    fontStyle: 'italic'
                  }}
                >
                  Don't like your result? Blame Mercury retrograde and try again! 💫
                </Typography>
              </MotionBox>
            )}
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmojiEmotionsIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" sx={{ color: 'secondary.main' }}>
              The BUBBLE Manifesto
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem', 
            backgroundColor: 'rgba(147, 112, 219, 0.1)', 
            p: 2, 
            borderRadius: 2,
            fontStyle: 'italic'
          }}>
            "Here at BUBBLE, we believe that life is too short for bad drinks and boring nights. We're the place where your glitter never fades, your sass is always welcome, and your dance moves are always fabulous (even if they look like a penguin having a seizure)."
          </Typography>
          <Box sx={{ pl: 4, mt: 2 }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              🌈 Where the drinks are strong, but the community is stronger
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              💃 Home of the "It's not a phase, mom, it's who I am" dance floor
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              🎭 Our drag queens don't lip-sync for their lives - they lip-sync for your entertainment!
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              🎤 Karaoke rule #1: If you can't hit the high notes, just yell them with pride
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              ✨ The only place in Prishtinë where "too much" is just enough
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            mt: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 105, 180, 0.1)',
            fontWeight: 500
          }}>
            Warning: Side effects of visiting BUBBLE may include: excessive joy, spontaneous dancing, chronic fabulousness, and the irresistible urge to come back next weekend. 🌈✨
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CelebrationIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" sx={{ color: 'secondary.main' }}>
              Our Events
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            Join us for our regular events:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              Drag Shows - Every Weekend
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              Karaoke Nights - Weekly
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', mb: 1 }}>
              Trivia Nights - Monthly
            </Typography>
            <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
              LGBTQ+ Marketplace - Monthly
            </Typography>
          </Box>
        </Box>
      </MotionPaper>
    </Container>
  );
};

export default About; 