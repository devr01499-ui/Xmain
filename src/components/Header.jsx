import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styled components for desktop and mobile
const DesktopHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  color: '#ffffff',
  boxShadow: 'none',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderTop: 'none',
  borderRadius: '0px 0px 20px 20px',
  transition: 'all 0.3s ease-in-out',
  zIndex: 1000,
  // Desktop-specific styling
  [theme.breakpoints.up('md')]: {
    '& .MuiToolbar-root': {
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      alignItems: 'center',
    },
  },
}));

const MobileHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  color: '#000000',
  boxShadow: 'none',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderTop: 'none',
  borderRadius: '0px 0px 20px 20px',
  transition: 'all 0.3s ease-in-out',
  zIndex: 1000,
  // Mobile-specific styling
  [theme.breakpoints.down('md')]: {
    '& .MuiToolbar-root': {
      justifyContent: 'space-between',
      padding: '0.75rem 1rem',
      alignItems: 'center',
    },
  },
}));

const DesktopNavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#000000',
  padding: '12px',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': { 
    boxSizing: 'border-box', 
    width: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    color: '#000000',
  },
}));

const MobileDrawerContent = styled(Box)(({ theme }) => ({
  width: 280,
  padding: '1rem',
  color: '#000000',
  '& .mobile-menu-title': {
    color: '#000000',
    fontWeight: 700,
    fontSize: '1.25rem',
  },
  '& .mobile-menu-close': {
    color: '#000000',
  },
  '& .mobile-nav-item': {
    color: '#000000',
    fontWeight: 500,
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
    },
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about-us' },
    { text: 'Services', path: '/services' },
    { text: 'Careers', path: '/career' },
    { text: 'Partner With Us', path: '/partner-with-us' },
    { text: 'Contact', path: '/contact' },
  ];

  // Function to scroll to top when navigating - AGGRESSIVE
  const scrollToTop = () => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional scroll to top with smooth behavior
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);
    
    // Multiple attempts to ensure scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 200);
    
    // Final check
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 500);
  };

  // Improved mobile detection with immediate DOM manipulation
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Force mobile styles immediately with timeout to ensure DOM is ready
      setTimeout(() => {
        if (mobile) {
          const headerElements = document.querySelectorAll('.MuiAppBar-root');
          headerElements.forEach(headerElement => {
            headerElement.style.setProperty('background', 'rgba(255, 255, 255, 0.95)', 'important');
            headerElement.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            headerElement.style.setProperty('-webkit-backdrop-filter', 'blur(20px)', 'important');
            headerElement.style.setProperty('color', '#000000', 'important');
            headerElement.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.3)', 'important');
            
            // Force all child elements to be black
            const allElements = headerElement.querySelectorAll('*');
            allElements.forEach(el => {
              el.style.setProperty('color', '#000000', 'important');
            });
          });
        } else {
          const headerElements = document.querySelectorAll('.MuiAppBar-root');
          headerElements.forEach(headerElement => {
            headerElement.style.setProperty('background', 'rgba(255, 255, 255, 0.1)', 'important');
            headerElement.style.setProperty('backdrop-filter', 'blur(15px)', 'important');
            headerElement.style.setProperty('-webkit-backdrop-filter', 'blur(15px)', 'important');
            headerElement.style.setProperty('color', '#ffffff', 'important');
            headerElement.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.2)', 'important');
            
            // Force all child elements to be white
            const allElements = headerElement.querySelectorAll('*');
            allElements.forEach(el => {
              el.style.setProperty('color', '#ffffff', 'important');
            });
          });
        }
      }, 100);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <MobileDrawerContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography 
          variant="h6" 
          className="mobile-menu-title logo-text" 
          sx={{ 
            color: '#1976d2 !important',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(25, 118, 210, 0.5)',
            transform: 'perspective(1000px) rotateX(5deg)',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#1565c0 !important',
              transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 15px rgba(25, 118, 210, 0.7)',
            },
          }}
        >
          AdmirerX
        </Typography>
        <IconButton onClick={handleDrawerToggle} className="mobile-menu-close" sx={{ color: '#000000' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            to={item.path} 
            onClick={() => {
              handleDrawerToggle();
              scrollToTop();
            }} 
            className="mobile-nav-item"
            sx={{
              color: location.pathname === item.path ? theme.palette.primary.main : '#000000',
              fontWeight: location.pathname === item.path ? 600 : 500,
              backgroundColor: location.pathname === item.path ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
            }}
          >
            <ListItemText primary={item.text} sx={{ color: '#000000' }} />
          </ListItem>
        ))}
      </List>
    </MobileDrawerContent>
  );

  return (
    <>
      {isMobile ? (
        <MobileHeader 
          position="fixed"
          className="mobile-header"
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            color: '#000000',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            '& *:not(.logo-text)': {
              color: '#000000 !important',
            },
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ color: '#000000' }}>
              <Typography 
                variant="h6" 
                component={Link}
                to="/"
                onClick={scrollToTop}
                className="logo-text"
                sx={{ 
                  color: '#1976d2 !important',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(25, 118, 210, 0.5)',
                  transform: 'perspective(1000px) rotateX(5deg)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#1565c0 !important',
                    transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 15px rgba(25, 118, 210, 0.7)',
                  },
                }}
              >
                AdmirerX
              </Typography>
              <MobileMenuButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: '#000000',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1,
                  minWidth: '48px',
                  minHeight: '48px',
                  padding: '12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  },
                }}
              >
                <MenuIcon sx={{ 
                  color: '#000000',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1,
                  width: '24px',
                  height: '24px',
                }} />
              </MobileMenuButton>
            </Toolbar>
          </Container>
        </MobileHeader>
      ) : (
        <DesktopHeader position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography 
                variant="h6" 
                component={Link}
                to="/"
                onClick={scrollToTop}
                className="logo-text"
                sx={{ 
                  color: '#1976d2 !important',
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  textDecoration: 'none',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(25, 118, 210, 0.5)',
                  transform: 'perspective(1000px) rotateX(5deg)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#1565c0 !important',
                    transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 15px rgba(25, 118, 210, 0.7)',
                  },
                }}
              >
                AdmirerX
              </Typography>
              <DesktopNavLinks>
                {menuItems.map((item) => (
                  <Typography
                    key={item.text}
                    component={Link}
                    to={item.path}
                    onClick={scrollToTop}
                    sx={{
                      color: location.pathname === item.path ? theme.palette.primary.light : '#ffffff',
                      textDecoration: 'none',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.light,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </DesktopNavLinks>
            </Toolbar>
          </Container>
        </DesktopHeader>
      )}
      
      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: '#000000',
            '& *': {
              color: '#000000 !important',
            },
          },
        }}
      >
        {drawer}
      </MobileDrawer>
    </>
  );
};

export default Header;