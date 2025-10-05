import { useEffect, useState } from "react";
import "./theme.css";

import React from "react";

const WithoutUsedefine = () => {
  const [theme, setTheme] = useState("dark");

  // When the component mounts, check if a theme is saved in localStorage
  //  If yes, use that saved theme instead of default ("dark")
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Whenever 'theme' changes, save it into localStorage
  //    This ensures theme preference persists even after refreshing
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default WithoutUsedefine;
