import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sendToTelegram, validateFormData } from '../utils/telegramService';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
}));

const ContactFormCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  padding: '40px',
  marginBottom: '30px',
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '30px 20px',
  },
}));

const ContactInfoCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  padding: '30px',
  marginBottom: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      // Validate form data first
      const validationErrors = validateFormData(formData);
      if (validationErrors.length > 0) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
        console.error('❌ Validation errors:', validationErrors);
        return;
      }

      // Submit using the Telegram service
      const result = await sendToTelegram(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
        console.log('✅ Form submitted successfully:', result);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
        console.error('❌ Form submission failed:', result);
      }
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
      console.error('❌ Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      title: 'Telegram Us',
      description: 'Send us a message on Telegram and we\'ll respond instantly.',
      value: '@company_contact_bot',
      icon: '📱'
    }
  ];

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
              Contact Us
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
              Get in touch with us to discuss your BPO needs
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <ContactFormCard id="contact-form">
                <Typography 
                  variant="h4" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    color: '#8B5CF6', 
                    fontWeight: 'bold', 
                    mb: 4,
                    textAlign: 'center',
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}
                >
                  Send us a Message
                </Typography>
                
                {submitStatus === 'success' && (
                  <Alert 
                    severity="success" 
                    sx={{ 
                      mb: 3,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      color: '#4CAF50'
                    }}
                  >
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert 
                    severity="error" 
                    sx={{ 
                      mb: 3,
                      backgroundColor: 'rgba(244, 67, 54, 0.1)',
                      border: '1px solid rgba(244, 67, 54, 0.3)',
                      color: '#F44336'
                    }}
                  >
                    There was an error sending your message. Please try again.
                  </Alert>
                )}
                
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="name"
                        label="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#8B5CF6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="company"
                        label="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#8B5CF6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="email"
                        label="Email Address *"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#8B5CF6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="phone"
                        label="Phone Number *"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="+1 (555) 123-4567"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#8B5CF6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel 
                          sx={{
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          }}
                        >
                          Service Interest
                        </InputLabel>
                        <Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          label="Service Interest"
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                backdropFilter: 'blur(15px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                marginTop: '8px',
                                zIndex: 9999,
                                '& .MuiMenuItem-root': {
                                  color: '#E2E8F0',
                                  backgroundColor: 'transparent',
                                  '&:hover': {
                                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                    color: '#8B5CF6',
                                  },
                                  '&.Mui-selected': {
                                    backgroundColor: 'rgba(139, 92, 246, 0.3)',
                                    color: '#8B5CF6',
                                    '&:hover': {
                                      backgroundColor: 'rgba(139, 92, 246, 0.4)',
                                    },
                                  },
                                },
                              },
                            },
                            anchorOrigin: {
                              vertical: 'bottom',
                              horizontal: 'left',
                            },
                            transformOrigin: {
                              vertical: 'top',
                              horizontal: 'left',
                            },
                          }}
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            zIndex: 1000,
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#8B5CF6',
                            },
                            '& .MuiSvgIcon-root': {
                              color: '#E2E8F0',
                            },
                          }}
                        >
                          <MenuItem value="customer-support">Customer Support</MenuItem>
                          <MenuItem value="hr-recruitment">HR Recruitment</MenuItem>
                          <MenuItem value="technical-helpdesk">Technical Helpdesk</MenuItem>
                          <MenuItem value="lead-generation">Lead Generation</MenuItem>
                          <MenuItem value="data-processing">Data Processing</MenuItem>
                          <MenuItem value="back-office">Back Office Operations</MenuItem>
                          <MenuItem value="ai-services">AI Services</MenuItem>
                          <MenuItem value="custom-website">Custom Website</MenuItem>
                          <MenuItem value="custom-bpo">Custom BPO Solution</MenuItem>
                          <MenuItem value="partnership">Partnership Opportunities</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="message"
                        label="Message *"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="Tell us about your requirements..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#8B5CF6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#E2E8F0',
                            '&.Mui-focused': {
                              color: '#8B5CF6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={submitStatus === 'loading'}
                        sx={{
                          backgroundColor: '#8B5CF6',
                          color: '#ffffff',
                          px: 6,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          borderRadius: '25px',
                          '&:hover': {
                            backgroundColor: '#7C3AED',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
                          },
                          '&:disabled': {
                            backgroundColor: 'rgba(139, 92, 246, 0.5)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </ContactFormCard>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index}>
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Typography variant="h3" sx={{ mb: 2, fontSize: '3rem' }}>
                        {info.icon}
                      </Typography>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          color: '#8B5CF6', 
                          fontWeight: 'bold',
                          mb: 2
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#E2E8F0', 
                          mb: 2,
                          fontSize: '1rem'
                        }}
                      >
                        {info.description}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#8B5CF6', 
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}
                      >
                        {info.value}
                      </Typography>
                    </CardContent>
                  </ContactInfoCard>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactPage;