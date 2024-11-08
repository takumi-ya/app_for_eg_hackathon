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
    <div id="userpage" className="min-h-screen flex flex-col items-center justify-center">
      <h1 id="page-title" className="text-2xl">ユーザーページ</h1>
      <div id="user-icon" className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
      <div id="username" className="mb-4">
        {username ? (
          <h1 className="text-2xl">ようこそ、{username}さん！</h1>
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