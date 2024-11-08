import { Box } from '@mui/material';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <Box>
      {icon}
      <span>{text}</span>
    </Box>
  );
};

export default MenuItem;
