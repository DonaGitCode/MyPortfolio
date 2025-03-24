import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full hover:bg-[var(--text)]/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}