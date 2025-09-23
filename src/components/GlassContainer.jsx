import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledGlassContainer = styled(Box)(({ theme }) => ({
  background: 'var(--glass-bg)',
  backdropFilter: 'var(--glass-blur)',
  border: '1px solid var(--glass-border)',
  borderRadius: '15px',
  padding: '40px',
  margin: '30px 0',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '30px',
    margin: '20px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
    margin: '16px 0',
  },
}));

const GlassContainer = ({ children, sx = {}, ...props }) => {
  return (
    <StyledGlassContainer sx={sx} {...props}>
      {children}
    </StyledGlassContainer>
  );
};

export default GlassContainer;
