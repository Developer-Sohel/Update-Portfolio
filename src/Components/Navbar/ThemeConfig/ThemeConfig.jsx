import React, { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeConfig = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // Set initial theme to 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); // Toggle between dark and light
  };

  return (
    <div>
      <button
        className='tracking-widest leading-8 text-white font-semibold text-[16px] flex items-center'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? ( // Show sun icon when theme is dark
          <>
            <BsSun className="mr-2 bg-gray-700 text-lg w-8 h-8 p-2 rounded-full font-bold shadow-2xl" />
          </>
        ) : ( // Show moon icon when theme is light
          <>
            <BsMoon className="mr-2 bg-gray-700 text-lg w-8 h-8 p-2 rounded-full font-bold shadow-2xl" />
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeConfig;