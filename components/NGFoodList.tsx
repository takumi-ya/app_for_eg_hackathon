'use client';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const NGList = () => {
  const [items, setItems] = useState<string[]>(['トマト', 'きゅうり']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = async () => {
    if (newItem.trim() !== '') {
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setNewItem('');
      await sendDataToBackend(updatedItems);
    }
  };

  const handleDeleteItem = async (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    await sendDataToBackend(updatedItems);
  };

  const sendDataToBackend = async (updatedItems: string[]) => {
    try {
      const response = await fetch('/api/nglist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: updatedItems }),
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
    <div id='NGlist-content' className='w-72 max-w-md'>
      <h2 className='text-xl mb-4'>NG Food List</h2>
      <div className='mb-4'>
        <input
          type='text'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className='border p-2 rounded mr-2'
          placeholder='Add new item'
        />
        <button
          onClick={handleAddItem}
          className='bg-blue-500 text-white p-2 rounded'
        >
          + Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className='flex justify-between items-center mb-2'>
            {item}
            <IconButton>
              <DeleteIcon onClick={() => handleDeleteItem(index)} />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGList;