"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {

  const goToShopInfo = () => {
    window.location.href = "/shopinfo";
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