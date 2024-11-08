'use client';

import MenuDrawer from '@/components/DrawerMenu';
import Header from '@/components/Header';
import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { UserProvider } from '../context/UserContext';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <html>
      <body>
        <UserProvider>
        <Header onIconClick={() => setDrawerOpen(true)} />
        <MenuDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={() => toggleDrawer(false)} />
        <Box component="main" mt={isMobile ? 8 : 12} pt={8}>
          {children}
        </Box>
        </UserProvider>
      </body>
    </html>
  );
};

export default Layout;
