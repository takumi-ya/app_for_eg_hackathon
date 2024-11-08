"use client";
import React from "react";
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const goToShopInfo = () => {
    router.push('/shopinfo');
  };

  const goToMenuList = () => {
    router.push('/menulist');
  }

  return (
    <div className="menu-container">
      <div className="button-container">
        <button className="button" onClick={goToMenuList}>メニュー一覧</button>
        <button className="button" onClick={goToShopInfo}>店舗情報</button>
        
      </div>
    </div>
  );
}