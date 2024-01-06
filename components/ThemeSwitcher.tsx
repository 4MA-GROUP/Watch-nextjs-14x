"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { WiDayCloudy } from "react-icons/wi";
import { IoIosCloudyNight } from "react-icons/io";

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
      >
        {theme === "light" ? <WiDayCloudy className="text-yellow-500 mr-2" size={24} /> : <IoIosCloudyNight className="text-gray-300 mr-2" size={24} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;