"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import { Router } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const goToShopInfo = () => {
    router.push('/shopinfo');
  };

  return (
    <div className="menu-container">
      <div className="button-container">
        <button className="button">メニュー一覧</button>
        <button className="button" onClick={goToShopInfo}>店舗情報</button>
        
      </div>
    </div>
  );
}