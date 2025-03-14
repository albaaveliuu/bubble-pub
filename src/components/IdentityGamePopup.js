import React, { useState } from 'react';
import { Box, Typography, Button, Paper, IconButton, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CasinoIcon from '@mui/icons-material/Casino';

const MotionBox = motion(Box);

const IdentityGamePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {!isOpen && (
          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsOpen(true)}
              sx={{
                borderRadius: '50%',
                width: 60,
                height: 60,
                minWidth: 'unset',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <CasinoIcon />
            </Button>
          </MotionBox>
        )}
      </AnimatePresence>

      <Collapse in={isOpen}>
        <Paper
          elevation={6}
          sx={{
            p: 2,
            width: 300,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <IconButton
            size="small"
            onClick={() => setIsOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', textAlign: 'center' }}>
            Quick Identity Check! 🎲
          </Typography>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={playGame}
              disabled={isPlaying}
              fullWidth
              sx={{
                mb: 2,
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              {isPlaying ? "🎲 Rolling..." : "🎲 Who Am I Today?"}
            </Button>

            {gameResult && (
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  {gameResult}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: 'italic',
                    fontSize: '0.8rem',
                  }}
                >
                  Not feeling it? Try again! ✨
                </Typography>
              </MotionBox>
            )}
          </Box>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default IdentityGamePopup; 