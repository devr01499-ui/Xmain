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
    <Box sx={{ 
      py: 6, 
      backgroundColor: 'var(--bg-dark)', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483)',
      backgroundSize: '400% 400%',
      animation: 'gradientWave 8s ease infinite'
    }} className="footer-gradient-bg">
      {/* Floating Background Elements */}
      <Box className="footer-floating-bg" sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Floating Particles */}
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 6s ease-in-out infinite',
          opacity: 0.6,
          left: '10%',
          top: '20%'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 8s ease-in-out infinite',
          opacity: 0.6,
          left: '20%',
          top: '40%',
          animationDelay: '1s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 7s ease-in-out infinite',
          opacity: 0.6,
          left: '30%',
          top: '60%',
          animationDelay: '2s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 9s ease-in-out infinite',
          opacity: 0.6,
          left: '40%',
          top: '30%',
          animationDelay: '3s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 5s ease-in-out infinite',
          opacity: 0.6,
          left: '50%',
          top: '50%',
          animationDelay: '4s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 8s ease-in-out infinite',
          opacity: 0.6,
          left: '60%',
          top: '25%',
          animationDelay: '5s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 6s ease-in-out infinite',
          opacity: 0.6,
          left: '70%',
          top: '45%',
          animationDelay: '6s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 7s ease-in-out infinite',
          opacity: 0.6,
          left: '80%',
          top: '35%',
          animationDelay: '7s'
        }}></Box>
        <Box className="footer-particle" sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          borderRadius: '50%',
          animation: 'floatParticles 9s ease-in-out infinite',
          opacity: 0.6,
          left: '90%',
          top: '55%',
          animationDelay: '8s'
        }}></Box>
        
        {/* Geometric Shapes */}
        <Box className="footer-geometric-shape" sx={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: '#8b5cf6',
          transform: 'rotate(45deg)',
          top: '20%',
          left: '5%',
          opacity: 0.1,
          animation: 'floatParticles 10s linear infinite'
        }}></Box>
        <Box className="footer-geometric-shape" sx={{
          position: 'absolute',
          width: '15px',
          height: '15px',
          background: '#3b82f6',
          borderRadius: '50%',
          top: '60%',
          right: '10%',
          opacity: 0.1,
          animation: 'floatParticles 10s linear infinite',
          animationDelay: '2s'
        }}></Box>
        <Box className="footer-geometric-shape" sx={{
          position: 'absolute',
          width: '25px',
          height: '25px',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          top: '40%',
          right: '5%',
          opacity: 0.1,
          animation: 'floatParticles 10s linear infinite',
          animationDelay: '4s'
        }}></Box>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <GlassContainer sx={{ 
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
          animation: 'glowPulse 3s ease-in-out infinite',
          boxShadow: '0 0 5px rgba(139, 92, 246, 0.3)'
        }} className="footer-glow-container">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ 
                fontWeight: 700, 
                mb: 2, 
                background: 'linear-gradient(90deg, #ffffff 0%, #8b5cf6 50%, #3b82f6 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s linear infinite'
              }} className="footer-shimmer-text">
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