import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GlassContainer from './GlassContainer';
import '../styles/footer-animations.css';

const Footer = () => {
  // Scroll to top function for navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/company/admirerx/', enabled: true },
    { icon: InstagramIcon, url: 'https://www.instagram.com/management.admirerx?igsh=andudzBoNm5rZW80', enabled: true },
    { icon: TwitterIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
  ];

  return (
    <Box sx={{ py: 6, position: 'relative', overflow: 'hidden' }} className="footer-gradient-bg">
      {/* Floating Background Elements */}
      <Box className="footer-floating-bg">
        {/* Floating Particles */}
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        <Box className="footer-particle"></Box>
        
        {/* Geometric Shapes */}
        <Box className="footer-geometric-shape"></Box>
        <Box className="footer-geometric-shape"></Box>
        <Box className="footer-geometric-shape"></Box>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <GlassContainer className="footer-glow-container">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }} className="footer-shimmer-text">
                AdmirerX
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-light)', lineHeight: 1.6, opacity: 0.9 }}>
                Empowering businesses with smart BPO solutions and exceptional service delivery. 
                Transform your operations with our comprehensive business process outsourcing services.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialIcons.map(({ icon: Icon, url, enabled }, index) => (
                  <IconButton
                    key={index}
                    href={enabled ? url : undefined}
                    target={enabled ? "_blank" : undefined}
                    rel={enabled ? "noopener noreferrer" : undefined}
                    disabled={!enabled}
                    className="footer-social-icon"
                    sx={{
                      color: enabled ? 'var(--text-dark-violet)' : '#666666',
                      opacity: enabled ? 1 : 0.5,
                      cursor: enabled ? 'pointer' : 'not-allowed',
                      '&:hover': enabled ? {
                        color: 'var(--text-light-violet)',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      } : {
                        transform: 'none',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'var(--text-dark-violet)' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Link to="/" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    Home
                  </Typography>
                </Link>
                <Link to="/about" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    About Us
                  </Typography>
                </Link>
                <Link to="/services" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    Services
                  </Typography>
                </Link>
                <Link to="/careers" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    Careers
                  </Typography>
                </Link>
                <Link to="/partner" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    Partner With Us
                  </Typography>
                </Link>
                <Link to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none' }} className="footer-link">
                  <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', transition: 'color 0.2s ease', opacity: 0.9 }}>
                    Contact
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'var(--text-light)', opacity: 0.7 }}>
              © 2025 AdmirerX. All rights reserved. | Smart BPO Solutions
            </Typography>
          </Box>
        </GlassContainer>
      </Container>
    </Box>
  );
};

export default Footer;