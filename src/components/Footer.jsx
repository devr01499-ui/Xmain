import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  
  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
    { icon: TwitterIcon, url: '#', enabled: false },
    { icon: InstagramIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
  ];

  return (
    <Box sx={{ backgroundColor: '#0a0a0a', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              AdmirerX
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
              Empowering businesses with smart BPO solutions and exceptional service delivery.
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
                    color: enabled ? '#ffffff' : '#666666',
                    opacity: enabled ? 1 : 0.5,
                    cursor: enabled ? 'pointer' : 'not-allowed',
                    '&:hover': enabled ? {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
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
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                Home
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                Services
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                Careers
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                Contact
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2024 AdmirerX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
