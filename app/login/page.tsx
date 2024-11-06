"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('ログインに失敗しました');
      }

      const data = await response.json();
      console.log('ログイン成功:', data);
      router.push('/');

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('予期しないエラーが発生しました');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">ログイン</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="username">
          ユーザー名
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          パスワード
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded"
        type="submit"
      >
        ログイン
      </button>
    </form>
  </div>
  );
}