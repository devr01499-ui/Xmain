import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  padding: '30px',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
    color: '#ffffff',
  },
}));

const MissionVisionCard = styled(Box)(({ theme, imageUrl }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px',
  padding: '30px',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
    color: '#ffffff',
  },
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
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
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
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section - Updated Content */}
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
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                color: '#ffffff',
                mb: 2,
              }}
            >
              We Admire Your Dreams
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                opacity: 0.9,
                maxWidth: '700px',
                mx: 'auto',
                color: '#ffffff',
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Be empowered. Be supported. Be AdmirerX.
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Company Story Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-light)' }}>
                Founded with a vision to revolutionize business process outsourcing, AdmirerX has grown from a 
                small startup to a trusted partner for businesses worldwide. Our journey began with a simple 
                mission: to help companies focus on their core competencies while we handle their operational needs.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-light)' }}>
                Today, we serve clients across various industries, delivering exceptional value through our 
                comprehensive suite of BPO services, cutting-edge technology, and a team of dedicated professionals 
                who are passionate about your success.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team"
                sx={{ 
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Our Values
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              The principles that guide everything we do and shape our company culture.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <GlassCard className="hover-card glass-card">
                  <Box
                    component="img"
                    src={value.image}
                    alt={value.title}
                    sx={{ 
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#f0f0f0' }}>
                    {value.description}
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section - Redesigned with Glass Morphism */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <MissionVisionCard 
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                className="hover-card glass-card"
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 'bold', 
                    mb: 3,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    fontSize: '1.5rem',
                  }}
                >
                  Our Mission
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.8, 
                    color: '#f0f0f0',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  To empower businesses worldwide by providing innovative, efficient, and cost-effective BPO solutions 
                  that enable our clients to focus on their core competencies while we handle their operational challenges 
                  with excellence and integrity.
                </Typography>
              </MissionVisionCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MissionVisionCard 
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                className="hover-card glass-card"
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 'bold', 
                    mb: 3,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    fontSize: '1.5rem',
                  }}
                >
                  Our Vision
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.8, 
                    color: '#f0f0f0',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  To be the world's leading BPO service provider, recognized for our innovation, reliability, and 
                  commitment to client success. We envision a future where businesses can scale effortlessly with 
                  our comprehensive support and cutting-edge solutions.
                </Typography>
              </MissionVisionCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutPage;