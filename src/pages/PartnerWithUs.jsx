import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const PartnershipCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  overflow: 'hidden',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const AdvantageCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  overflow: 'hidden',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const AdvantageImage = styled(Box)(({ theme, imageUrl }) => ({
  position: 'relative',
  height: '150px',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const BulletList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    padding: '6px 0',
    paddingLeft: '20px',
    position: 'relative',
    color: '#E2E8F0',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: '#8B5CF6',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
  },
}));

const CTASection = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  padding: '60px 40px',
  textAlign: 'center',
  color: '#ffffff',
  margin: '60px 0',
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px',
    margin: '40px 0',
  },
}));

const PartnerPage = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your technology solutions with our BPO services for enhanced efficiency and seamless operations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      bullets: [
        'API Integration and seamless connectivity',
        'Custom technology solutions development',
        '24/7 technical support and maintenance',
        'Joint product development opportunities',
        'Access to our technology infrastructure',
        'Co-marketing and go-to-market strategies'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell our services and earn attractive commissions while providing exceptional value to your clients.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      bullets: [
        'Competitive commission structure up to 30%',
        'Comprehensive marketing support and materials',
        'Dedicated partner training programs',
        'Lead generation and qualification support',
        'Co-branded marketing opportunities',
        'Regular performance reviews and optimization'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term partnerships for mutual growth, market expansion, and innovative business solutions.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      bullets: [
        'Joint venture opportunities and investments',
        'Shared market access and customer base',
        'Resource sharing and cost optimization',
        'Strategic planning and business development',
        'Exclusive partnership agreements',
        'Long-term revenue sharing models'
      ]
    }
  ];

  const advantages = [
    {
      title: 'Proven Track Record',
      description: 'Years of experience in delivering successful BPO solutions with measurable results and client satisfaction.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      bullets: [
        '500+ successful client implementations',
        '99.5% client retention rate',
        'Industry-leading performance metrics',
        'Award-winning service delivery',
        'Proven ROI for all partners',
        'Case studies and testimonials available'
      ]
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Robust systems and processes that can handle rapid growth and expansion without compromising quality.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80',
      bullets: [
        'Cloud-based scalable architecture',
        'Multi-location global operations',
        'Advanced automation and AI integration',
        '24/7 monitoring and support systems',
        'Disaster recovery and business continuity',
        'Flexible capacity management'
      ]
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all our partners with dedicated account management and technical assistance.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      bullets: [
        'Dedicated partner success managers',
        '24/7 technical support hotline',
        'Multi-channel communication options',
        'Priority response for critical issues',
        'Regular performance reviews and feedback',
        'Proactive monitoring and alerts'
      ]
    },
    {
      title: 'Competitive Pricing',
      description: 'Attractive pricing models and flexible payment terms designed to maximize partner profitability and success.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80',
      bullets: [
        'Volume-based pricing discounts',
        'Flexible payment terms and options',
        'No hidden fees or charges',
        'Transparent pricing structure',
        'Performance-based incentives',
        'Custom pricing for large partnerships'
      ]
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
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
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                color: '#ffffff',
                mb: 2,
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
                maxWidth: '700px',
                mx: 'auto',
                color: '#ffffff',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              Join our partner network and grow your business with our BPO solutions
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Partnership Types Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Partnership Types
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              Choose the partnership model that best fits your business goals and objectives.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {partnershipTypes.map((partnership, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PartnershipCard className="hover-card glass-card">
                  <CardMedia
                    component="img"
                    height="200"
                    image={partnership.image}
                    alt={partnership.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, color: '#ffffff' }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                      {partnership.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#E2E8F0', mb: 3 }}>
                      {partnership.description}
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="h6" sx={{ color: '#8B5CF6', fontWeight: 'bold', mb: 2 }}>
                        Key Benefits:
                      </Typography>
                      <BulletList>
                        {partnership.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </BulletList>
                    </Box>
                  </CardContent>
                </PartnershipCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Partner With Us Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Why Partner With Us?
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              We offer compelling reasons to choose us as your BPO partner.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {advantages.map((advantage, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AdvantageCard className="hover-card glass-card">
                  <AdvantageImage imageUrl={advantage.image} />
                  <CardContent sx={{ p: 3, color: '#ffffff' }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                      {advantage.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#E2E8F0', mb: 2 }}>
                      {advantage.description}
                    </Typography>
                    <BulletList>
                      {advantage.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </BulletList>
                  </CardContent>
                </AdvantageCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg">
        <CTASection>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Ready to Partner With Us?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#f0f0f0',
              marginBottom: '30px',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Let's discuss how we can work together to achieve mutual success and growth.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              backgroundColor: '#8B5CF6',
              color: '#ffffff',
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
            Start Partnership
          </Button>
        </CTASection>
      </Container>

      <Footer />
    </Box>
  );
};

export default PartnerPage;