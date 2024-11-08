import PersonIcon from '@mui/icons-material/Person';
import { Box, Drawer } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import UserPage from '@/components/UserPage';

const MenuContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '400px',
  },
  height: '100%',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
}));

interface MenuDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <MenuContainer as="div">
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            sx={{
              borderRadius: '50%',
              border: '2px solid',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PersonIcon style={{ fontSize: 50 }} />
          </Box>
        </Box>
        <UserPage />
      </MenuContainer>
    </Drawer>
  );
};

export default MenuDrawer;
