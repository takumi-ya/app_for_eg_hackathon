import React from 'react';

export default function UserPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">ユーザーページ</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            ユーザー名
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="username"
            name="username"
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