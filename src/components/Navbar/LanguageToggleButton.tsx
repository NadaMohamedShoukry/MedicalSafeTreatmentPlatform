import { useTheme } from "../../context/ThemeContext";

function LanguageToggleButton() {
  const { language, toggleLanguage } = useTheme();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105"
    >
      {language === "en" ? "عربي" : "English"}
    </button>
  );
}

export default LanguageToggleButton;
