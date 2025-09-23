import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pulse animation for CTA button
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(21, 101, 192, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(21, 101, 192, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(21, 101, 192, 0);
  }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
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

// Glass morphism effect for cards
const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    border: '2px solid #1565c0',
  },
}));

const PartnerSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
}));

const HomePage = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  const whyChooseUs = [
    {
      title: '24/7 Global Support',
      description: 'Round-the-clock multilingual support ensuring your business operations never stop, across all time zones.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: '🕒'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs by up to 60% while maintaining premium service quality and efficiency.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80',
      icon: '💰'
    },
    {
      title: 'Scalable Growth',
      description: 'Flexible solutions that seamlessly scale with your business demands and market fluctuations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      icon: '📈'
    },
    {
      title: 'Expert Teams',
      description: 'Certified professionals with deep industry expertise and continuous training programs.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      icon: '👥'
    }
  ];

  const services = [
    {
      title: 'Customer Support',
      description: '24/7 multilingual customer support with advanced CRM integration and AI-powered response systems',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🎧'
    },
    {
      title: 'HR Recruitment',
      description: 'End-to-end talent acquisition solutions with AI-driven candidate matching and cultural fit assessment',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '👔'
    },
    {
      title: 'Technical Helpdesk',
      description: 'Expert IT support and infrastructure management with proactive monitoring and rapid resolution',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🔧'
    },
    {
      title: 'Lead Generation',
      description: 'Targeted lead generation campaigns with qualified prospect identification and conversion optimization',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🎯'
    },
    {
      title: 'Data Processing',
      description: 'Accurate data entry, validation, and analysis services with quality assurance protocols',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '📊'
    },
    {
      title: 'Back Office Operations',
      description: 'Comprehensive administrative support including accounting, data management, and process documentation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '📋'
    },
    {
      title: 'AI Services',
      description: 'Custom AI solutions including chatbots, process automation, and predictive analytics for business intelligence',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🤖'
    }
  ];

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
    <Box>
      <Header />
      
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                mb: 3
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
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
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
                backgroundColor: '#1565c0',
                color: 'white',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#0d47a1',
                },
              }}
            >
              Get Free Consultation
            </PulseButton>
          </Box>
        </Container>
      </HeroSection>

      {/* Why Choose AdmirerX Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Why Choose AdmirerX?
            </Typography>
            <Typography variant="h6" sx={{ color: '#e0e0e0', maxWidth: '600px', mx: 'auto' }}>
              Discover the advantages that make us the preferred choice for businesses worldwide
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {whyChooseUs.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <GlassCard sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={feature.image}
                    alt={feature.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {feature.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </GlassCard>
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
            <Typography variant="h6" sx={{ color: '#e0e0e0', maxWidth: '600px', mx: 'auto' }}>
              Comprehensive BPO solutions designed to accelerate your business growth
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h4" sx={{ mr: 2 }}>
                        {service.icon}
                      </Typography>
                      <Typography variant="h5" component="h3" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={scrollToContact}
                      sx={{
                        backgroundColor: '#1565c0',
                        '&:hover': {
                          backgroundColor: '#0d47a1',
                        },
                      }}
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Partner With Us Section */}
      <PartnerSection sx={{ py: { xs: 8, md: 10 } }}>
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
                <GlassCard sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {benefit.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
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
      </PartnerSection>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
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
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;