import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SectionContainer from './SectionContainer';

const Footer = () => {
  const theme = useTheme();
  
  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/company/admirerx/', enabled: true },
    { icon: InstagramIcon, url: 'https://www.instagram.com/management.admirerx?igsh=andudzBoNm5rZW80', enabled: true },
    { icon: TwitterIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <SectionContainer>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1565c0' }}>
                AdmirerX
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.6 }}>
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
                      color: enabled ? '#1565c0' : '#666666',
                      opacity: enabled ? 1 : 0.5,
                      cursor: enabled ? 'pointer' : 'not-allowed',
                      '&:hover': enabled ? {
                        color: '#0d47a1',
                        transform: 'translateY(-2px)',
                        backgroundColor: 'rgba(21, 101, 192, 0.1)',
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
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1565c0' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  Home
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  About Us
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  Services
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  Careers
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  Partner With Us
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', cursor: 'pointer', '&:hover': { color: '#1565c0' }, transition: 'color 0.2s ease' }}>
                  Contact
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              © 2024 AdmirerX. All rights reserved. | Smart BPO Solutions
            </Typography>
          </Box>
        </SectionContainer>
      </Container>
    </Box>
  );
};

export default Footer;