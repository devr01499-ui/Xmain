import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GlassContainer from './GlassContainer';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: '500px', // Increased height for bullet points
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--glass-bg)',
  backdropFilter: 'var(--glass-blur)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    borderColor: 'var(--text-dark-violet)',
  },
  '& .MuiCardMedia-root': {
    height: '200px !important',
    minHeight: '200px !important',
    maxHeight: '200px !important',
    width: '100% !important',
    objectFit: 'cover !important',
  },
}));

const ServicesSection = () => {
  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  const services = [
    {
      title: "Customer Support",
      description: "24/7 multilingual customer support with advanced CRM integration.",
      bullets: [
        "24/7 multilingual support across all time zones",
        "AI-powered response systems for instant resolution",
        "Advanced CRM integration for seamless customer tracking",
        "Quality assurance with real-time monitoring",
        "Customized support scripts for brand consistency"
      ],
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "HR Recruitment",
      description: "End-to-end talent acquisition with AI-driven candidate matching.",
      bullets: [
        "End-to-end talent acquisition process management",
        "AI-driven candidate matching and screening",
        "Cultural fit assessment for long-term retention",
        "Background verification and onboarding support",
        "Dedicated recruitment consultants for your industry"
      ],
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Technical Helpdesk", 
      description: "Expert IT support with proactive monitoring and rapid resolution.",
      bullets: [
        "Proactive IT infrastructure monitoring 24/7",
        "Rapid response SLA guarantees for critical issues",
        "Multi-level technical support (L1, L2, L3)",
        "Remote desktop support and troubleshooting",
        "IT asset management and documentation services"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Lead Generation",
      description: "Targeted lead generation with qualified prospect identification.",
      bullets: [
        "Targeted prospect identification using AI algorithms",
        "Multi-channel outreach (email, social, phone)",
        "Lead qualification and scoring system",
        "CRM integration for seamless sales pipeline management",
        "Weekly performance reports and analytics dashboard"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Data Processing",
      description: "Accurate data entry, validation, and analysis with quality assurance.",
      bullets: [
        "Accurate data entry with 99.9% quality assurance",
        "Data validation and cleansing services",
        "OCR and document digitization solutions",
        "Database management and migration services",
        "Custom data analytics and reporting"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Back Office Operations",
      description: "Comprehensive administrative support and process documentation.",
      bullets: [
        "Complete administrative task management",
        "Accounting and bookkeeping services",
        "Document processing and record management",
        "Inventory and supply chain coordination",
        "Process documentation and optimization"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "AI Services",
      description: "Custom AI solutions including chatbots and predictive analytics.",
      bullets: [
        "Custom AI chatbot development and integration",
        "Process automation using machine learning",
        "Predictive analytics for business intelligence",
        "Natural Language Processing (NLP) solutions",
        "AI-powered customer behavior analysis"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Custom Website Development",
      description: "Professional custom website design and development services with responsive design, advanced SEO optimization, and modern functionality.",
      bullets: [
        "Professional custom website design and development services",
        "Responsive design optimized for all devices and screen sizes",
        "Advanced SEO optimization for maximum search engine visibility",
        "Content management system (CMS) integration and training",
        "E-commerce solutions with secure online payment integration",
        "Website maintenance, security updates, and performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    },
    {
      title: "Custom BPO Solutions",
      description: "Tailored business process outsourcing solutions designed specifically for your industry needs.",
      bullets: [
        "Tailored business process outsourcing strategies for your industry",
        "Custom workflow design and process automation solutions",
        "Dedicated team allocation based on your specific requirements",
        "Scalable BPO solutions that grow with your business needs",
        "Seamless integration with your existing systems and tools",
        "24/7 monitoring, performance optimization, and quality assurance"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      link: "/contact"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'var(--bg-dark)' }}>
      <Container maxWidth="lg">
        <GlassContainer>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'var(--text-dark-violet)', fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-light)', maxWidth: '600px', mx: 'auto' }}>
              Comprehensive BPO solutions designed to accelerate your business growth
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <ServiceCard sx={{ width: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                      height: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Box>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          color: 'var(--text-dark-violet)', 
                          fontWeight: 'bold', 
                          mb: 2,
                          minHeight: '60px', // Fixed height for titles
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Box sx={{ mb: 3, minHeight: '120px' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'var(--text-light)', 
                            mb: 2, 
                            opacity: 0.9,
                            fontSize: '0.9rem',
                            fontWeight: 500
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Box component="ul" sx={{ 
                          pl: 2, 
                          m: 0, 
                          '& li': { 
                            color: 'var(--text-light)', 
                            fontSize: '0.8rem', 
                            mb: 0.5,
                            opacity: 0.8,
                            lineHeight: 1.4
                          } 
                        }}>
                          {service.bullets.slice(0, 3).map((bullet, index) => (
                            <Box component="li" key={index}>
                              {bullet}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={scrollToContact}
                      sx={{
                        backgroundColor: 'var(--text-dark-violet)',
                        color: 'white',
                        mt: 'auto', // Push button to bottom
                        '&:hover': {
                          backgroundColor: '#7C3AED',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </GlassContainer>
      </Container>
    </Box>
  );
};

export default ServicesSection;