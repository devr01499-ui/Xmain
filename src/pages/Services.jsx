import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const ServiceCardContainer = styled(Box)(({ theme, alignment }) => ({
  margin: '60px 0',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    margin: '40px 0',
  },
}));

const ServiceCard = styled(Box)(({ theme, alignment }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  maxWidth: '1200px',
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column !important',
    minHeight: 'auto',
  },
}));

const CardImageSide = styled(Box)(({ theme, alignment }) => ({
  flex: 1,
  position: 'relative',
  minHeight: '400px',
  [theme.breakpoints.down('md')]: {
    minHeight: '250px',
    width: '100%',
  },
}));

const CardContentSide = styled(Box)(({ theme, alignment }) => ({
  flex: 1,
  padding: '40px',
  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    padding: '30px 20px',
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
}));

const ServiceBullets = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: '20px 0',
  '& li': {
    padding: '8px 0',
    paddingLeft: '25px',
    position: 'relative',
    lineHeight: 1.6,
    fontSize: '1rem',
    '&:before': {
      content: '"✓"',
      position: 'absolute',
      left: 0,
      color: '#8B5CF6',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
  },
}));

const BookAppointmentBtn = styled(Button)(({ theme }) => ({
  background: '#8B5CF6',
  color: 'white',
  padding: '12px 30px',
  borderRadius: '25px',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  marginTop: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#7C3AED',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
  },
}));

const CTASection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  padding: '60px 40px',
  textAlign: 'center',
  color: '#ffffff',
  margin: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px',
    margin: '40px 0',
  },
}));

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      title: "Customer Support",
      alignment: "left",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "24/7 multilingual support across all time zones",
        "AI-powered response systems for instant resolution",
        "Advanced CRM integration for seamless customer tracking",
        "Quality assurance with real-time monitoring",
        "Customized support scripts for brand consistency"
      ],
      link: "/contact"
    },
    {
      id: 2,
      title: "HR Recruitment",
      alignment: "right",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "End-to-end talent acquisition process management",
        "AI-driven candidate matching and screening",
        "Cultural fit assessment for long-term retention",
        "Background verification and onboarding support",
        "Dedicated recruitment consultants for your industry"
      ],
      link: "/contact"
    },
    {
      id: 3,
      title: "Technical Helpdesk",
      alignment: "left",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Proactive IT infrastructure monitoring 24/7",
        "Rapid response SLA guarantees for critical issues",
        "Multi-level technical support (L1, L2, L3)",
        "Remote desktop support and troubleshooting",
        "IT asset management and documentation services"
      ],
      link: "/contact"
    },
    {
      id: 4,
      title: "Lead Generation",
      alignment: "right",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      bullets: [
        "Targeted prospect identification using AI algorithms",
        "Multi-channel outreach (email, social, phone)",
        "Lead qualification and scoring system",
        "CRM integration for seamless sales pipeline management",
        "Weekly performance reports and analytics dashboard"
      ],
      link: "/contact"
    },
    {
      id: 5,
      title: "Data Processing",
      alignment: "left",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Accurate data entry with 99.9% quality assurance",
        "Data validation and cleansing services",
        "OCR and document digitization solutions",
        "Database management and migration services",
        "Custom data analytics and reporting"
      ],
      link: "/contact"
    },
    {
      id: 6,
      title: "Back Office Operations",
      alignment: "right",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Complete administrative task management",
        "Accounting and bookkeeping services",
        "Document processing and record management",
        "Inventory and supply chain coordination",
        "Process documentation and optimization"
      ],
      link: "/contact"
    },
    {
      id: 7,
      title: "AI Services",
      alignment: "left",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Custom AI chatbot development and integration",
        "Process automation using machine learning",
        "Predictive analytics for business intelligence",
        "Natural Language Processing (NLP) solutions",
        "AI-powered customer behavior analysis"
      ],
      link: "/contact"
    },
    {
      id: 8,
      title: "Custom Website Development",
      alignment: "right",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Professional custom website design and development services",
        "Responsive design optimized for all devices and screen sizes",
        "Advanced SEO optimization for maximum search engine visibility",
        "Content management system (CMS) integration and training",
        "E-commerce solutions with secure online payment integration",
        "Website maintenance, security updates, and performance optimization",
        "Mobile-first design approach for better user experience",
        "Fast loading speeds and Core Web Vitals optimization"
      ],
      link: "/contact"
    },
    {
      id: 9,
      title: "Custom BPO Solutions",
      alignment: "left",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bullets: [
        "Tailored business process outsourcing strategies for your industry",
        "Custom workflow design and process automation solutions",
        "Dedicated team allocation based on your specific requirements",
        "Scalable BPO solutions that grow with your business needs",
        "Seamless integration with your existing systems and tools",
        "24/7 monitoring, performance optimization, and quality assurance",
        "Industry-specific expertise and compliance management",
        "Cost-effective solutions with transparent pricing models"
      ],
      link: "/contact"
    }
  ];

  const ServiceCardComponent = ({ service, index }) => {
    
    return (
      <ServiceCardContainer alignment={service.alignment}>
        <ServiceCard alignment={service.alignment}>
          {/* Image Side */}
          <CardImageSide alignment={service.alignment}>
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <ImageOverlay />
          </CardImageSide>
          
          {/* Content Side */}
          <CardContentSide alignment={service.alignment}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                marginBottom: '20px',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {service.title}
            </Typography>
            <ServiceBullets>
              {service.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ServiceBullets>
            <BookAppointmentBtn
              component={Link}
              to={service.link}
              variant="contained"
            >
              Book Appointment ›
            </BookAppointmentBtn>
          </CardContentSide>
        </ServiceCard>
      </ServiceCardContainer>
    );
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
              Our Premium BPO Services
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
              Comprehensive solutions designed to scale your business efficiently
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Services Container */}
      <Container maxWidth="lg">
        {servicesData.map((service, index) => (
          <ServiceCardComponent key={service.id} service={service} index={index} />
        ))}
      </Container>

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
            Ready to Transform Your Business?
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
            Get a customized solution tailored to your specific needs
          </Typography>
          <BookAppointmentBtn
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              fontSize: '1.2rem',
              padding: '15px 40px',
            }}
          >
            Get Free Consultation
          </BookAppointmentBtn>
        </CTASection>
      </Container>

      <Footer />
    </Box>
  );
};

export default ServicesPage;