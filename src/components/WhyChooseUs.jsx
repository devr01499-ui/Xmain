import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionContainer from './SectionContainer';

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
}));

const WhyChooseUs = () => {
  const features = [
    {
      title: "24/7 Global Support",
      description: "Round-the-clock multilingual support ensuring your business operations never stop, across all time zones.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "🕒"
    },
    {
      title: "Cost Optimization", 
      description: "Reduce operational costs by up to 60% while maintaining premium service quality and efficiency.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80",
      icon: "💰"
    },
    {
      title: "Scalable Growth",
      description: "Flexible solutions that seamlessly scale with your business demands and market fluctuations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      icon: "📈"
    },
    {
      title: "Expert Teams",
      description: "Certified professionals with deep industry expertise and continuous training programs.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      icon: "👥"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <SectionContainer>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Why Choose AdmirerX?
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Discover the advantages that make us the preferred choice for businesses worldwide
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <GlassCard>
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
        </SectionContainer>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
