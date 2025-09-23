import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import GlassContainer from './GlassContainer';

// Pulse animation for CTA button
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
  }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const PulseButton = styled(Button)(({ theme }) => ({
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    animation: 'none',
    transform: 'scale(1.05)',
  },
}));

const HeroSection = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <GlassContainer sx={{ 
            maxWidth: '800px', 
            mx: 'auto',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                mb: 3,
                lineHeight: 1.2,
                color: 'var(--text-light)'
              }}
            >
              Empowering Your Business with Smart BPO Solutions
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                color: 'var(--text-light)'
              }}
            >
              Transform your operations with our comprehensive business process outsourcing services. 
              From AI-powered customer support to data processing, we deliver excellence tailored to your growth.
            </Typography>
            <PulseButton
              variant="contained"
              size="large"
              onClick={scrollToContact}
              sx={{
                backgroundColor: 'var(--text-dark-violet)',
                color: 'white',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#7C3AED',
                },
              }}
            >
              Get Free Consultation
            </PulseButton>
          </GlassContainer>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;