import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import LogoImage from "../../assets/logo3.png";
function Logo() {
  const { language } = useTheme();

  const navigate = useNavigate();
  const t = translations[language];
  return (
    <button
      onClick={() => navigate("/home")}
      className="flex items-center gap-1 group cursor-pointer"
    >
      <img className=" w-22 h-17 sm:w-24 sm:h-19" src={LogoImage} />

      <span className="hidden sm:block text-lg font-bold bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
        {t.platformName}
      </span>
    </button>
  );
}

export default Logo;
