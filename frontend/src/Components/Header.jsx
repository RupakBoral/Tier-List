import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="w-full flex justify-between items-center p-6 bg-gray-300 border-b-2 dark:border-gray-300 border-gray-500 dark:bg-gray-900 h-1/6">
      <h1 className="text-3xl font-bold font-poppins">TIER</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-400 dark:bg-gray-800 text-gray-200 font-bold dark:text-white rounded"
      >
        {darkMode ? "☀" : "🌙"}
      </button>
    </div>
  );
};

export default Header;
