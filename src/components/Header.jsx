import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styled components for mobile-specific styling
const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    color: '#000000 !important',
  },
}));

const MobileNavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 4,
  [theme.breakpoints.down('md')]: {
    '& a': {
      color: '#000000 !important',
      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
    },
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': { 
    boxSizing: 'border-box', 
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
  },
}));

const MobileDrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  pt: 2,
  '& .mobile-menu-title': {
    color: '#000000 !important',
    fontWeight: 700,
  },
  '& .mobile-menu-close': {
    color: '#000000 !important',
  },
  '& .mobile-nav-item': {
    color: '#000000 !important',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
    '&:hover': {
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
    },
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about-us' },
    { text: 'Services', path: '/services' },
    { text: 'Careers', path: '/career' },
    { text: 'Partner With Us', path: '/partner-with-us' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <MobileDrawerContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" className="mobile-menu-title">
          AdmirerX
        </Typography>
        <IconButton onClick={handleDrawerToggle} className="mobile-menu-close">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle} className="mobile-nav-item">
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: location.pathname === item.path ? theme.palette.primary.main : '#000000',
                fontWeight: location.pathname === item.path ? 600 : 400
              }} 
            />
          </ListItem>
        ))}
      </List>
    </MobileDrawerContent>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#ffffff',
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: 'none',
          borderRadius: '0px 0px 20px 20px',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1000,
          // Mobile-specific background for better contrast
          [theme.breakpoints.down('md')]: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography 
              variant="h6" 
              component={Link}
              to="/"
              sx={{ 
                color: '#ffffff', 
                fontWeight: 700,
                fontSize: '24px',
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.primary.light
                },
                // Mobile-specific styling
                [theme.breakpoints.down('md')]: {
                  color: '#000000 !important',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              AdmirerX
            </Typography>
            {isMobile ? (
              <MobileMenuButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </MobileMenuButton>
            ) : (
              <MobileNavLinks>
                {menuItems.map((item) => (
                  <Typography
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? theme.palette.primary.light : '#ffffff',
                      textDecoration: 'none',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.light,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </MobileNavLinks>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </MobileDrawer>
    </>
  );
};

export default Header;