import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import PartnerSection from '../components/PartnerSection';
import GlassContainer from '../components/GlassContainer';

const HomePage = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose AdmirerX Section */}
      <WhyChooseUs />

      {/* Our Services Section */}
      <ServicesSection />

      {/* Partner With Us Section */}
      <PartnerSection />

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'var(--text-light)', position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                color: 'var(--text-light)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: 'var(--text-light)', 
                lineHeight: 1.6, 
                opacity: 0.9,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Let's discuss how our BPO solutions can accelerate your growth and efficiency
            </Typography>
            <Button
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
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                '&:hover': {
                  backgroundColor: '#7C3AED',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;