import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const HeaderContainer = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 24px',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
}));

interface HeaderProps {
  onIconClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onIconClick }) => {
  return (
    <HeaderContainer>
      <Box flexGrow={1} />
      <IconButton onClick={onIconClick} style={{ marginRight: '16px' }}>
        <Box
          sx={{
            borderRadius: '50%',
            border: '2px solid',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PersonIcon />
        </Box>
      </IconButton>
    </HeaderContainer>
  );
};

export default Header;
