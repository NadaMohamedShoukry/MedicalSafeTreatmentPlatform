import IntialSearch from "../../assets/initial.svg";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
function SearchInitialState() {
  const { language } = useTheme();
  const t = translations[language];
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5">
      <img className="w-40 h-35" src={IntialSearch} alt="empty-data" />
      <p className="text-xl text-center">
        {language === "en" ? t.searchPlaceholder : t.searchPlaceholder}
      </p>
    </div>
  );
}

export default SearchInitialState;
