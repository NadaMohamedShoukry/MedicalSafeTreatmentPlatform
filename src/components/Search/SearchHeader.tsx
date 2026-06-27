import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
function SearchHeader() {
  const { language } = useTheme();
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
          <div className="relative w-17 h-17 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl">
            <Search className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
        {language === "en" ? "Advanced Medical Search" : "البحث الطبي المتقدم"}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {language === "en"
          ? "Search for diseases, symptoms, treatments, supplements, and herbs"
          : "ابحث عن الأمراض والأعراض والعلاجات والمكملات والأعشاب"}
      </p>
    </motion.div>
  );
}

export default SearchHeader;
