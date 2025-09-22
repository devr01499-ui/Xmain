import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const AboutPage = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative solutions to drive your business forward.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in all our business dealings.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Partnership',
      description: 'We believe in building long-term partnerships based on trust and mutual success.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

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
              About Us
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
              Empowering businesses worldwide with innovative BPO solutions
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Company Story Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                Founded with a vision to revolutionize business process outsourcing, AdmirerX has grown from a 
                small startup to a trusted partner for businesses worldwide. Our journey began with a simple 
                mission: to help companies focus on their core competencies while we handle their operational needs.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                Today, we serve clients across various industries, delivering exceptional value through our 
                comprehensive suite of BPO services, cutting-edge technology, and a team of dedicated professionals 
                who are passionate about your success.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="400"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team"
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Our Values
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              The principles that guide everything we do and shape our company culture.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={value.image}
                    alt={value.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%', backgroundColor: '#f8f9fa' }}>
                <Typography variant="h4" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold', mb: 3 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                  To empower businesses worldwide by providing innovative, efficient, and cost-effective BPO solutions 
                  that enable our clients to focus on their core competencies while we handle their operational challenges 
                  with excellence and integrity.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%', backgroundColor: '#f8f9fa' }}>
                <Typography variant="h4" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold', mb: 3 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                  To be the world's leading BPO service provider, recognized for our innovation, reliability, and 
                  commitment to client success. We envision a future where businesses can scale effortlessly with 
                  our comprehensive support and cutting-edge solutions.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutPage;
