import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
          AdmirerX
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle}>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: location.pathname === item.path ? theme.palette.primary.main : '#333',
                fontWeight: location.pathname === item.path ? 600 : 400
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
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
          zIndex: 1000
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
                }
              }}
            >
              AdmirerX
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 4 }}>
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
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
