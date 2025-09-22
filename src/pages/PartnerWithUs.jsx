import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const PartnerPage = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your technology solutions with our BPO services for enhanced efficiency.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: ['API Integration', 'Custom Solutions', 'Technical Support']
    },
    {
      title: 'Channel Partners',
      description: 'Resell our services and earn commissions while providing value to your clients.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: ['Commission Structure', 'Marketing Support', 'Training Programs']
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term partnerships for mutual growth and market expansion.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: ['Joint Ventures', 'Market Access', 'Resource Sharing']
    }
  ];

  const advantages = [
    {
      title: 'Proven Track Record',
      description: 'Years of experience in delivering successful BPO solutions.',
      icon: '🏆'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Robust systems that can handle growth and expansion.',
      icon: '⚡'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all our partners.',
      icon: '🕒'
    },
    {
      title: 'Competitive Pricing',
      description: 'Attractive pricing models for all partnership types.',
      icon: '💰'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              Partner With Us
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Join our partner network and grow your business with our BPO solutions
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Partnership Types Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Partnership Types
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Choose the partnership model that best fits your business goals and objectives.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {partnershipTypes.map((partnership, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={partnership.image}
                    alt={partnership.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {partnership.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                      {partnership.description}
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 1 }}>
                        Benefits:
                      </Typography>
                      {partnership.benefits.map((benefit, idx) => (
                        <Typography key={idx} variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                          • {benefit}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Partner With Us Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Why Partner With Us?
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              We offer compelling reasons to choose us as your BPO partner.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {advantages.map((advantage, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {advantage.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {advantage.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {advantage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Partner With Us?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Let's discuss how we can work together to achieve mutual success and growth.
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
              Start Partnership
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PartnerPage;
