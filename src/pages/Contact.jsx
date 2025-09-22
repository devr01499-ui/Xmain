import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  position: 'relative',
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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      value: 'devr01499@gmail.com',
      icon: '📧'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our team for immediate assistance.',
      value: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      title: 'Visit Us',
      description: 'Come visit our office for a face-to-face meeting.',
      value: '123 Business St, City, State 12345',
      icon: '📍'
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
              Contact Us
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
              Get in touch with us to discuss your BPO needs
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 4 }} id="contact-form">
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold', mb: 3 }}>
                  Send us a Message
                </Typography>
                
                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Service Interest</InputLabel>
                        <Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          label="Service Interest"
                        >
                          <MenuItem value="customer-support">Customer Support</MenuItem>
                          <MenuItem value="data-processing">Data Processing</MenuItem>
                          <MenuItem value="technical-helpdesk">Technical Helpdesk</MenuItem>
                          <MenuItem value="back-office">Back Office Operations</MenuItem>
                          <MenuItem value="content-moderation">Content Moderation</MenuItem>
                          <MenuItem value="lead-generation">Lead Generation</MenuItem>
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={submitStatus === 'loading'}
                        sx={{
                          backgroundColor: '#1565c0',
                          px: 6,
                          py: 2,
                          fontSize: '1.1rem',
                          '&:hover': {
                            backgroundColor: '#0d47a1',
                          },
                        }}
                      >
                        {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactInfo.map((info, index) => (
                  <Card key={index} sx={{ p: 3 }}>
                    <CardContent>
                      <Typography variant="h3" sx={{ mb: 2 }}>
                        {info.icon}
                      </Typography>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        {info.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                        {info.value}
                      </Typography>
                    </CardContent>
                  </Card>
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
