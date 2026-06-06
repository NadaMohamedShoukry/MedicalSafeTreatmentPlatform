import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
function Aim() {
  const { language } = useTheme();
  const t = translations[language];
  return (
    <motion.div
      className="p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-center text-3xl sm:text-2xl mb-5 font-bold text-blue-600 dark:text-blue-400">
        {language === "en" ? "Our Aim" : "هدفنا"}
      </p>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        {t.aim}
      </p>
    </motion.div>
  );
}

export default Aim;
