import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import React from 'react';

interface UserIconProps {
  size?: number;
}

const UserIcon: React.FC<UserIconProps> = ({ size = 80 }) => {
  return (
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
      <PersonIcon style={{ fontSize: size }} />
    </Box>
  );
};

export default UserIcon;
