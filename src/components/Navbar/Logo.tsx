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
        <img className=" w-14 h-9" src="../../../public/new_logo.png" />
      </div>
      <span className="hidden sm:block text-lg font-bold bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
        {t.platformName}
      </span>
    </button>
  );
}

export default Logo;
