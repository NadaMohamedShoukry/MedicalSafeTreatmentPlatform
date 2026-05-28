import { type Dispatch, type SetStateAction } from "react";
import { translations } from "../../data/translations";
import { useTheme } from "../../context/ThemeContext";
import { Search, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
function SearchInput({ searchQuery, setSearchQuery }: SearchInputProps) {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <motion.div
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative">
        {/* glowing effect behind the icon */}
        {/* absolute inset-0 -> makes glow cover parent completely */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 rounded-2xl blur-xl opacity-20" />
        <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl">
          <Search className="w-6 h-6 text-blue-500 shrink-0" />
          {/* flex-1 ->makes input take remianing width */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
          <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}

export default SearchInput;
