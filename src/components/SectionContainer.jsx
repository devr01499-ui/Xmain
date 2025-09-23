import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '40px',
  margin: '20px 0',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('md')]: {
    padding: '24px',
    margin: '16px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    margin: '12px 0',
  },
}));

const SectionContainer = ({ children, sx = {}, ...props }) => {
  return (
    <StyledContainer sx={sx} {...props}>
      {children}
    </StyledContainer>
  );
};

export default SectionContainer;
