import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.98)',
  },
}));

const PartnerSection = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  const partnerBenefits = [
    {
      title: 'Dedicated Account Management',
      description: 'Personalized relationship manager ensuring seamless communication and service delivery',
      icon: '🤝'
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored BPO strategies designed specifically for your industry and business objectives',
      icon: '⚙️'
    },
    {
      title: 'Advanced Technology',
      description: 'Access to cutting-edge tools, AI platforms, and analytics dashboards',
      icon: '💻'
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular performance reviews and optimization strategies for ongoing success',
      icon: '🔄'
    }
  ];

  return (
    <PartnerContainer sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            Why Partner With AdmirerX?
          </Typography>
          <Typography variant="h5" sx={{ color: '#e0e0e0', maxWidth: '600px', mx: 'auto' }}>
            Join 500+ businesses transforming their operations with our smart BPO solutions
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {partnerBenefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <GlassCard sx={{ p: 3, textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      color: '#2D3748', 
                      fontWeight: 'bold',
                      fontSize: '1.3rem'
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#2D3748',
                      fontWeight: 500,
                      lineHeight: 1.6
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
            500+ Happy Partners
          </Typography>
          <Typography variant="h6" sx={{ color: '#e0e0e0', mb: 4 }}>
            Trusted by businesses worldwide for their BPO needs
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              backgroundColor: 'white',
              color: '#1565c0',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Become a Partner
          </Button>
        </Box>
      </Container>
    </PartnerContainer>
  );
};

export default PartnerSection;
