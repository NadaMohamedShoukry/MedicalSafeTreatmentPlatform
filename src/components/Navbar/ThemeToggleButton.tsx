import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";

function ThemeToggleButton() {
  const { theme, language, toggleTheme } = useTheme();
  const t = translations[language];
  //   const navigate = useNavigate();
  return (
    <button
      onClick={toggleTheme}
      className=" p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
      aria-label={theme === "light" ? t.darkMode : t.lightMode}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-700" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
