import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";

function Logo() {
  const { language } = useTheme();

  const navigate = useNavigate();
  const t = translations[language];
  return (
    <button
      onClick={() => navigate("/home")}
      className="flex items-center gap-3 group cursor-pointer"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300 group-hover:scale-105">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <span className="hidden sm:block text-lg font-bold bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
        {t.platformName}
      </span>
    </button>
  );
}

export default Logo;
