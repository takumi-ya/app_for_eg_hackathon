"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);

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

  const addMenu = () => {
    // Add menu to database
    router.push('/shop');
  }

  return (
    <div className="menu-container">

      <header className="username">店舗情報</header>

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
          <input className="input-field" type="text" placeholder="お店の名前" />
          <textarea className="textarea-field" placeholder="お店説明"></textarea>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51855.156475555435!2d139.67964154636616!3d35.67830010303876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be2fe4371ad%3A0x7f4f3fc2b347e1b1!2z44Gm44KT44G344KJ5rex55S6!5e0!3m2!1sja!2sjp!4v1731089863206!5m2!1sja!2sjp" 
            width="300" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen={true}  
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        </div>
      </div>

      <button className="footer-button" onClick={addMenu}>情報を更新</button>
    </div>
  );
}
