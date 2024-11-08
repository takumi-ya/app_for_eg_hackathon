// ShopDetailModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ShopDetailModalProps {
  isOpen: boolean;
  handleClose: () => void;
  shop: string | null;
}

const ShopDetailModal: React.FC<ShopDetailModalProps> = ({ isOpen, handleClose, shop }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {shop ? `Shop: ${shop}` : 'No Shop Selected'}
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ShopDetailModal;