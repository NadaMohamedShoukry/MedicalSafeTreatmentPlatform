import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router";

function Navbar() {
  const { language, toggleLanguage } = useTheme();
  const navigate = useNavigate();
  return (
    <nav className="sticky rounded-full top-3 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Logo />

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              onClick={() => navigate("/about-us")}
              className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:border-blue-400/50 transition-all duration-300"
            >
              {language === "en" ? "Who are we?" : "من نحن؟"}
            </Button>
            <SearchIcon />
            <ThemeToggleButton />

            <Button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              {language === "en" ? "عربي" : "English"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
