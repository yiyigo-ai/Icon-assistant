import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // 从 localStorage 读取主题偏好
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // 默认深色主题
    return true;
  });

  useEffect(() => {
    // 更新 body 类名
    if (isDark) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    // 保存到 localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return { isDark, toggleTheme };
};

export default useTheme;
