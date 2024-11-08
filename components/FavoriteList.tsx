import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Modal, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface FavoriteListProps {
  onListItemClick: (shop: string) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ onListItemClick }) => {
  const [favorites, setFavorites] = useState<string[]>(['丸亀', '資さんうどん', '赤いきつね']);

  const handleRemoveFavorite = async (index: number) => {
    const confirmDelete = window.confirm('お気に入りから削除しますか？');
    if (confirmDelete) {
      const updatedFavorites = favorites.filter((_, i) => i !== index);
      setFavorites(updatedFavorites);
      await sendDataToBackend(updatedFavorites);
    }
  };

  const sendDataToBackend = async (updatedFavorites: string[]) => {
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorites: updatedFavorites }),
      });

      if (!response.ok) {
        throw new Error('データの送信に失敗しました');
      }

      const data = await response.json();
      console.log('データが正常に送信されました:', data);
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };


  return (
    <div id='Favoritelist-content' className="w-full max-w-md">
      <h2 className='text-xl mb-4'>Favorite Shop List</h2>
      <List>
        {favorites.map((shop, index) => (
          <ListItem
            key={index}
            onClick={() => onListItemClick(shop)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
            className="flex justify-between items-center mb-2"
            >
            <ListItemText primary={shop} />
            <IconButton onClick={(e) => { e.stopPropagation(); handleRemoveFavorite(index); }}>
              <StarIcon className="text-yellow-500" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FavoriteList;