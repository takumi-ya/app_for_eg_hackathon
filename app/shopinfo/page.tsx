"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const ingredientOptions = ["えび", "かに", "小麦", "そば", "卵", "乳", "落花生"];

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const toggleIngredient = (ingredient: string) => {
    setIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="menu-container">

      <div className="button-container">
        <button className="button">メニュー一覧</button>
        <button className="button">店舗情報</button>
        
      </div>

      <header className="username">お店の名前</header>
      <h1 className="section-title">メニュー登録/編集</h1>

      <div className="content">
        <div className="image-section">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="uploaded-image"
            />
          ) : (
            <label className="image-upload-overlay" htmlFor="image-upload">
              画像をアップロード
            </label>
          )}
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
        
        <div className="info-all">
        <div className="info-section">
          <input className="input-field" type="text" placeholder="商品名" />
          <textarea className="textarea-field" placeholder="商品説明"></textarea>
        </div>

        <div className="selected-ingredients">
          <h2>使用食材</h2>
          <div className="tag-container">
            {ingredientOptions.map((option) => (
              <button
                key={option}
                className={`tag ${
                  ingredients.includes(option) ? "tag-selected" : "tag-unselected"
                }`}
                onClick={() => toggleIngredient(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        </div>
      </div>

      <button className="footer-button">メニューを追加/編集</button>
    </div>
  );
}
