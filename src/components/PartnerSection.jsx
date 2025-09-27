import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'var(--bg-dark)',
  position: 'relative',
}));

const PartnerCard = styled(Card)(({ theme }) => ({
  background: 'var(--glass-bg)',
  backdropFilter: 'var(--glass-blur)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored BPO strategies designed specifically for your industry and business objectives',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      title: 'Advanced Technology',
      description: 'Access to cutting-edge tools, AI platforms, and analytics dashboards',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular performance reviews and optimization strategies for ongoing success',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    }
  ];

  return (
    <PartnerContainer sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
            Why Partner With AdmirerX?
          </Typography>
          <Typography variant="h5" sx={{ color: '#ffffff', maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Join 500+ businesses transforming their operations with our smart BPO solutions
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {partnerBenefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <PartnerCard sx={{ textAlign: 'center', overflow: 'hidden' }}>
                <Box
                  sx={{
                    height: '200px',
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.6))',
                      zIndex: 1,
                    }
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      color: '#000000', 
                      fontWeight: 'bold',
                      fontSize: '1.3rem',
                      mb: 2
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'var(--text-light)',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      opacity: 0.9
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </PartnerCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" sx={{ color: '#ffffff', mb: 2, fontWeight: 'bold' }}>
            500+ Happy Partners
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 4, opacity: 0.9 }}>
            Trusted by businesses worldwide for their BPO needs
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              backgroundColor: '#8B5CF6',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#7C3AED',
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