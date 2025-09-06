import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function TopBar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-indigo-600">SynergySphere</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded"
          aria-label="Search"
        />
        <ThemeToggle />
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <button className="text-gray-600">Settings</button>
      </div>
    </header>
  );
}
