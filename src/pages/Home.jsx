import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import PartnerSection from '../components/PartnerSection';
import SectionContainer from '../components/SectionContainer';

const HomePage = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box>
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
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <SectionContainer>
            <Box sx={{ textAlign: 'center', color: '#2D3748' }}>
              <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: '#1565c0' }}>
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: '#666', lineHeight: 1.6 }}>
                Let's discuss how our BPO solutions can accelerate your growth and efficiency
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                sx={{
                  backgroundColor: '#1565c0',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#0d47a1',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </SectionContainer>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;