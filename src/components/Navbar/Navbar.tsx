import LanguageToggleButton from "./LanguageToggleButton";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";

function Navbar() {
  return (
    <nav className="sticky rounded-full top-3 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Logo />

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile & PC Search Icon */}
            <SearchIcon />
            {/* Theme Toggle */}
            <ThemeToggleButton />

            {/* Language Toggle */}
            <LanguageToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
