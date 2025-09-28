import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GlassContainer from './GlassContainer';

const Footer = () => {
  
  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/company/admirerx/', enabled: true },
    { icon: InstagramIcon, url: 'https://www.instagram.com/management.admirerx?igsh=andudzBoNm5rZW80', enabled: true },
    { icon: TwitterIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: 'var(--bg-dark)' }}>
      <Container maxWidth="lg">
        <GlassContainer sx={{ 
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
        }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'var(--text-dark-violet)' }}>
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
                    sx={{
                      color: enabled ? 'var(--text-dark-violet)' : '#666666',
                      opacity: enabled ? 1 : 0.5,
                      cursor: enabled ? 'pointer' : 'not-allowed',
                      '&:hover': enabled ? {
                        color: 'var(--text-light-violet)',
                        transform: 'translateY(-2px)',
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
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  Home
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  About Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  Services
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  Careers
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  Partner With Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-light)', cursor: 'pointer', '&:hover': { color: 'var(--text-light-violet)' }, transition: 'color 0.2s ease', opacity: 0.9 }}>
                  Contact
                </Typography>
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