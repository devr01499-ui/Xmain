import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const HomePage = () => {

  const services = [
    {
      title: 'Customer Support',
      description: '24/7 multilingual customer support with advanced CRM integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['24/7 Support', 'Multilingual', 'CRM Integration']
    },
    {
      title: 'Data Processing',
      description: 'Accurate and efficient data entry, validation, and management services.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Data Entry', 'Validation', 'Management']
    },
    {
      title: 'Technical Helpdesk',
      description: 'Expert technical support and troubleshooting for your IT infrastructure.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['IT Support', 'Troubleshooting', 'Infrastructure']
    },
    {
      title: 'Back Office Operations',
      description: 'Comprehensive back-office support including accounting and administration.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Accounting', 'Administration', 'Operations']
    },
    {
      title: 'Content Moderation',
      description: 'Professional content moderation to maintain platform quality and safety.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Quality Control', 'Safety', 'Moderation']
    },
    {
      title: 'Lead Generation',
      description: 'Targeted lead generation and qualification to boost your sales pipeline.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Lead Gen', 'Qualification', 'Sales Pipeline']
    }
  ];

  const whyChooseUs = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock support ensuring your business never stops.',
      icon: '🕒'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% with our efficient solutions.',
      icon: '💰'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible services that grow with your business needs.',
      icon: '📈'
    },
    {
      title: 'Expert Team',
      description: 'Highly trained professionals with industry expertise.',
      icon: '👥'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <HeroSection sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                fontSize: { xs: '2.5rem', md: '4rem' }
              }}
            >
              Empowering Your Business with Smart BPO Solutions
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                opacity: 0.9,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              Transform your operations with our comprehensive business process outsourcing services. 
              From customer support to data processing, we deliver excellence.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                sx={{
                  backgroundColor: '#1565c0',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#0d47a1',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: '#1565c0',
                    backgroundColor: 'rgba(21, 101, 192, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      {/* Why Choose Admirex Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Why Choose AdmirerX?
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Comprehensive BPO solutions tailored to meet your specific business requirements.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#1565c0',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Let's Build Success Together Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Let's Build Success Together
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Ready to transform your business operations? Get started with our expert BPO services today.
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
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
