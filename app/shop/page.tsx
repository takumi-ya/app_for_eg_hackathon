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
    <div className="menu-container h-full flex flex-col justify-center items-center" >
      <div className="button-container flex flex-wrap justify-center">
        <button className="button" onClick={goToMenuList}>メニュー一覧</button>
        <button className="button" onClick={goToShopInfo}>店舗情報</button>
        <button className="button" onClick={goToShopInfo}>予約確認</button>
        
      </div>
    </div>
  );
}