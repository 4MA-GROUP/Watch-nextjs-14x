"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="border-[1px] bg-black dark:bg-white text-white dark:text-black dark:!border-white rounded-md transition-all p-1 px-3 focus:ring-4"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;