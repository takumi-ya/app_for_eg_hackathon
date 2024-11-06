'use client';
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';


export default function UserPage() {

  const { username } = useUser();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 id="page-title" className="text-2xl">ユーザーページ</h1>
      <div id="user-icon" className="mb-4">
          {/* https://heroicons.com/ */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
      <div id="username" className="mb-4">
        <h1 className="text-2xl">{username}</h1>
      </div>

      <div className="w-full max-w-md">
        <div className="flex border-b">
          <button
            id="NGlist-tab"
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'NGlist-tab' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => handleTabClick('NGlist-tab')}
          >
            NG Food list
          </button>
          <button
            id="Favoritelist-tab"
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'Favoritelist-tab' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => handleTabClick('Favoritelist-tab')}
          >
            Favorite shop list
          </button>
        </div>
        <div className="p-4">
          {activeTab === "NGlist-tab" && <div id="NGFoodList">
            <h2>NG Food List</h2>
            </div>}
          {activeTab === "Favoritelist-tab" && <div id="FavoriteShop">
            <h3>Favorite list</h3>
            </div>}
        </div>
      </div>

      <div>
        <button
          id="logout-button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            //
          }}
        >
          ログアウト
        </button>  
      </div>
    </div>
  );
}