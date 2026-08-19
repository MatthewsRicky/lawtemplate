"use client";

import { useThemeWithFallback } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeWithFallback();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d6c7] bg-white text-[#163a2e] transition hover:bg-[#f6f1e8] dark:border-[#2d564b] dark:bg-[#1a3d35] dark:text-[#d8ba60] dark:hover:bg-[#1e4a3f]"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
