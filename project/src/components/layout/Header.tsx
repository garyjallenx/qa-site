import React from 'react';
import { BugPlay, Bell, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BugPlay className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">QualityHub</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button className="p-2 text-gray-300 hover:text-white">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}