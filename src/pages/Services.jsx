import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '60vh',
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

const ServicesPage = () => {
  const services = [
    {
      title: 'Customer Support',
      description: 'Comprehensive customer support solutions with 24/7 availability, multilingual capabilities, and advanced CRM integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['24/7 Support', 'Multilingual', 'CRM Integration', 'Live Chat', 'Email Support'],
      benefits: ['Increased Customer Satisfaction', 'Reduced Response Time', 'Cost Savings']
    },
    {
      title: 'Data Processing',
      description: 'Accurate and efficient data entry, validation, and management services to keep your information organized and up-to-date.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Data Entry', 'Data Validation', 'Data Cleansing', 'Database Management', 'Report Generation'],
      benefits: ['Improved Data Quality', 'Reduced Errors', 'Better Decision Making']
    },
    {
      title: 'Technical Helpdesk',
      description: 'Expert technical support and troubleshooting services for your IT infrastructure and software applications.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['IT Support', 'Troubleshooting', 'System Maintenance', 'Software Support', 'Hardware Support'],
      benefits: ['Reduced Downtime', 'Improved System Performance', 'Expert Technical Knowledge']
    },
    {
      title: 'Back Office Operations',
      description: 'Comprehensive back-office support including accounting, administration, and operational tasks.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Accounting Services', 'Administrative Support', 'Document Processing', 'Record Keeping', 'Compliance'],
      benefits: ['Streamlined Operations', 'Cost Reduction', 'Improved Efficiency']
    },
    {
      title: 'Content Moderation',
      description: 'Professional content moderation services to maintain platform quality, safety, and compliance standards.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Content Review', 'Quality Control', 'Safety Monitoring', 'Policy Enforcement', 'User Safety'],
      benefits: ['Platform Safety', 'Brand Protection', 'User Trust']
    },
    {
      title: 'Lead Generation',
      description: 'Targeted lead generation and qualification services to boost your sales pipeline and revenue growth.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Lead Research', 'Qualification', 'Database Building', 'Email Campaigns', 'Follow-up'],
      benefits: ['Increased Sales', 'Better Lead Quality', 'Higher Conversion Rates']
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
              Our Services
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
              Comprehensive BPO solutions tailored to your business needs
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              What We Offer
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              From customer support to data processing, we provide end-to-end BPO solutions that drive your business forward.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ServiceCard>
                  <CardMedia
                    component="img"
                    height="250"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                    
                    <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 2 }}>
                      Key Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
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
                    <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 2 }}>
                      Benefits:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.benefits.map((benefit, idx) => (
                        <Chip
                          key={idx}
                          label={benefit}
                          size="small"
                          sx={{
                            backgroundColor: '#f3e5f5',
                            color: '#7b1fa2',
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

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Let's discuss how our services can help transform your business operations.
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
              Contact Us Today
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServicesPage;
