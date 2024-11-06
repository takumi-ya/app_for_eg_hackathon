import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<string[]>(['丸亀', '資さんうどん', '赤いきつね']);

  const handleRemoveFavorite = async (index: number) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    await sendDataToBackend(updatedFavorites);
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
    <div id="Favoritelist-content">
      <h2 className="text-xl mb-4">Favorite Shop List</h2>
      <ul>
        {favorites.map((shop, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {shop}
            <IconButton onClick={() => handleRemoveFavorite(index)}>
              <StarIcon className="text-yellow-500" />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;