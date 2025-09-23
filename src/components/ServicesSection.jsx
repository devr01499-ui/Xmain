import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionContainer from './SectionContainer';

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

const ServicesSection = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  const services = [
    {
      title: "Customer Support",
      description: "24/7 multilingual customer support with advanced CRM integration and AI-powered response systems",
      icon: "🎧"
    },
    {
      title: "HR Recruitment",
      description: "End-to-end talent acquisition solutions with AI-driven candidate matching and cultural fit assessment",
      icon: "👔"
    },
    {
      title: "Technical Helpdesk", 
      description: "Expert IT support and infrastructure management with proactive monitoring and rapid resolution",
      icon: "🔧"
    },
    {
      title: "Lead Generation",
      description: "Targeted lead generation campaigns with qualified prospect identification and conversion optimization",
      icon: "🎯"
    },
    {
      title: "Data Processing",
      description: "Accurate data entry, validation, and analysis services with quality assurance protocols",
      icon: "📊"
    },
    {
      title: "Back Office Operations",
      description: "Comprehensive administrative support including accounting, data management, and process documentation",
      icon: "📋"
    },
    {
      title: "AI Services",
      description: "Custom AI solutions including chatbots, process automation, and predictive analytics for business intelligence",
      icon: "🤖"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <SectionContainer>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Comprehensive BPO solutions designed to accelerate your business growth
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard>
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
        </SectionContainer>
      </Container>
    </Box>
  );
};

export default ServicesSection;
