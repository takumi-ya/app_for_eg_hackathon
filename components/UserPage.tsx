'use client';
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FavoriteIcon from '@mui/icons-material/Favorite';

import NGFoodList from './NGFoodList';
import FavoriteList from './FavoriteList';
import ShopModal from '../components/ShopModal';

const UserPage = () => {
  const { username } = useUser();
  const [value, setValue] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState<string | null>(null);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleListItemClick = (shop: string) => {
    setSelectedShop(shop);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedShop(null);
  };

  return (
    <div id="userpage" className="min-h-screen flex flex-col items-center">
      <div id="username" className="mb-4">
        {username ? (
          <h1 className="text-2xl">{username}</h1>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ログイン
          </button>
        )}
      </div>

    {username && username !== 'shop' && (
      <div className="mb-4 w-full max-w-md">
        <Box sx={{ width: '100%' }}>
          {value === 0 && <NGFoodList />}
          {value === 1 && <FavoriteList onListItemClick={handleListItemClick}/>}
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="NGfood" icon={<DangerousIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    )}

      <ShopModal isOpen={isModalOpen} handleClose={handleCloseModal} shop={selectedShop} />
    </div>
  );
};

export default UserPage;