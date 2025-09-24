import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
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

const BenefitCard = styled(Card)(({ theme }) => ({
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

const BenefitImage = styled(Box)(({ theme, imageUrl }) => ({
  position: 'relative',
  height: '200px',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.6))',
    zIndex: 1,
  },
}));

const BenefitIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  zIndex: 2,
  position: 'relative',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
}));

const BenefitContent = styled(CardContent)(({ theme }) => ({
  padding: '25px',
  color: '#ffffff',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const BenefitBullets = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  flex: 1,
  '& li': {
    padding: '6px 0',
    paddingLeft: '20px',
    position: 'relative',
    color: '#CBD5E0',
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

const CareerPage = () => {
  const benefitsData = [
    {
      id: 1,
      icon: "💰",
      title: "Competitive Salary",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80",
      description: "Industry-leading compensation packages with performance bonuses and annual reviews to reward your hard work and dedication.",
      bullets: [
        "Above-market salary benchmarks",
        "Performance-based quarterly bonuses",
        "Annual salary reviews and adjustments",
        "Profit-sharing opportunities",
        "Overtime and shift allowances"
      ]
    },
    {
      id: 2,
      icon: "⚡",
      title: "Work-Life Balance",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Flexible scheduling and wellness programs that prioritize your mental health and personal time alongside professional growth.",
      bullets: [
        "Flexible work hours and shifts",
        "Mental wellness programs and counseling",
        "Paid time off and vacation days",
        "Work-from-home options when needed",
        "Stress management workshops"
      ]
    },
    {
      id: 3,
      icon: "🏠",
      title: "Remote Work",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Hybrid and fully remote opportunities with all the tools and support needed to excel from anywhere in the world.",
      bullets: [
        "Hybrid work model flexibility",
        "Home office setup allowance",
        "Digital collaboration tools provided",
        "Remote team building activities",
        "Work from anywhere policies"
      ]
    },
    {
      id: 4,
      icon: "📈",
      title: "Career Growth",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Structured career progression paths with mentorship programs and clear promotion criteria to help you reach your professional goals.",
      bullets: [
        "Clear promotion pathways every 6-12 months",
        "Personalized career development plans",
        "Mentorship from industry experts",
        "Leadership training programs",
        "Internal mobility opportunities"
      ]
    },
    {
      id: 5,
      icon: "🎓",
      title: "Learning & Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      description: "Comprehensive training programs, certification sponsorships, and skill development workshops to keep you at the forefront of the industry.",
      bullets: [
        "Certification and course reimbursements",
        "Technical skill development workshops",
        "Soft skills and communication training",
        "Industry conference attendance",
        "Online learning platform access"
      ]
    },
    {
      id: 6,
      icon: "🎉",
      title: "Team Events",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Regular team building activities, celebrations, and cultural events that foster camaraderie and make work enjoyable.",
      bullets: [
        "Monthly team outing and activities",
        "Annual company retreats and parties",
        "Cultural and festival celebrations",
        "Sports tournaments and fitness challenges",
        "Community volunteering events"
      ]
    }
  ];

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
              Build Your Career with AdmirerX
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
              Join a team that values your growth, rewards your talent, and invests in your future
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Why You'll Love Working Here
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              We believe in taking care of our team with benefits that matter
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {benefitsData.map((benefit) => (
              <Grid item xs={12} sm={6} md={4} key={benefit.id}>
                <BenefitCard className="hover-card glass-card">
                  <BenefitImage imageUrl={benefit.image}>
                    <BenefitIcon>{benefit.icon}</BenefitIcon>
                  </BenefitImage>
                  <BenefitContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        color: '#8B5CF6',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        marginBottom: '10px',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#E2E8F0',
                        lineHeight: 1.6,
                        marginBottom: '15px',
                        fontSize: '0.95rem',
                      }}
                    >
                      {benefit.description}
                    </Typography>
                    <BenefitBullets>
                      {benefit.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </BenefitBullets>
                  </BenefitContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open Positions Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Open Positions
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              Explore current opportunities and find your perfect role with us.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {jobOpenings.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                      <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                        📍 {job.location}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                        🏢 {job.department}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                        ⏰ {job.type}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#E2E8F0', mb: 3 }}>
                      {job.description}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#8B5CF6', fontWeight: 'bold', mb: 2 }}>
                      Requirements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {job.requirements.map((req, idx) => (
                        <Typography key={idx} component="li" variant="body2" sx={{ color: '#CBD5E0', mb: 0.5 }}>
                          {req}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      onClick={scrollToContact}
                      sx={{
                        backgroundColor: '#8B5CF6',
                        color: '#ffffff',
                        '&:hover': { 
                          backgroundColor: '#7C3AED',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
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
            Ready to Start Your Journey?
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
            Explore current openings and join our growing team
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
            View Open Positions
          </Button>
        </CTASection>
      </Container>

      <Footer />
    </Box>
  );
};

export default CareerPage;