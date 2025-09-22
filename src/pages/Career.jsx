import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
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

const CareerPage = () => {
  const jobOpenings = [
    {
      title: 'Customer Support Representative',
      department: 'Customer Service',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our customer support team and help deliver exceptional service to our clients worldwide.',
      requirements: ['2+ years customer service experience', 'Excellent communication skills', 'Bilingual preferred']
    },
    {
      title: 'Data Entry Specialist',
      department: 'Data Processing',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Accurate and efficient data entry specialist to support our data processing operations.',
      requirements: ['High attention to detail', 'Fast typing speed', 'Computer proficiency']
    },
    {
      title: 'Technical Support Engineer',
      department: 'IT Support',
      location: 'On-site',
      type: 'Full-time',
      description: 'Provide technical support and troubleshooting for our clients\' IT infrastructure.',
      requirements: ['IT degree or equivalent', '3+ years experience', 'Problem-solving skills']
    },
    {
      title: 'Content Moderator',
      department: 'Content Management',
      location: 'Remote',
      type: 'Part-time',
      description: 'Ensure platform safety and quality through professional content moderation.',
      requirements: ['Content review experience', 'Attention to detail', 'Policy knowledge']
    }
  ];

  const benefits = [
    { title: 'Competitive Salary', icon: '💰' },
    { title: 'Health Insurance', icon: '🏥' },
    { title: 'Remote Work', icon: '🏠' },
    { title: 'Career Growth', icon: '📈' },
    { title: 'Learning & Development', icon: '🎓' },
    { title: 'Team Events', icon: '🎉' }
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
              Careers at AdmirerX
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
              Join our team and be part of the future of business process outsourcing
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Why Work With Us Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Why Work With Us?
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              We offer a dynamic work environment where your skills and passion can make a real difference.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {benefit.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {benefit.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open Positions Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
              Open Positions
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Explore current opportunities and find your perfect role with us.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {jobOpenings.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        📍 {job.location}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        🏢 {job.department}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        ⏰ {job.type}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                      {job.description}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 2 }}>
                      Requirements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {job.requirements.map((req, idx) => (
                        <Typography key={idx} component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                          {req}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      onClick={scrollToContact}
                      sx={{
                        backgroundColor: '#1565c0',
                        '&:hover': { backgroundColor: '#0d47a1' }
                      }}
                    >
                      Apply Now
                    </Button>
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
              Don't See Your Role?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
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
              Send Your Resume
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default CareerPage;
