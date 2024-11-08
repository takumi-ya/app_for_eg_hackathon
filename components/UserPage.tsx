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

const UserPage = () => {
  const { username } = useUser();
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
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

      <div className="mb-4 w-full max-w-md">
        <Box sx={{ width: '100%' }}>
          {value === 0 && <NGFoodList />}
          {value === 1 && <FavoriteList />}
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
    </div>
  );
};

export default UserPage;