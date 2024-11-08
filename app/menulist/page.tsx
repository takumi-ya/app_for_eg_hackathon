"use client";
import React from "react";
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const goToShop = () => {
    router.push('/shop');
  };

  const goToAddMenu = () => {
    router.push('/addmenu');
  };

  return (
    <div className="menu-container">
      <h1 className="section-title">メニュー一覧</h1>
      <button onClick={goToAddMenu}>新規作成</button>

      <button onClick={goToShop}>メインページに戻る</button>
    </div>
  );
}