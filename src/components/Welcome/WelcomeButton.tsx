import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import { motion } from "motion/react";
function WelcomeButton() {
  const { language } = useTheme();
  const t = translations[language];
  const navigate = useNavigate();
  return (
    <motion.div
      className="pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <button
        onClick={() => navigate("/home")}
        className="group relative px-7 sm:px-11 py-3 sm:py-4 rounded-full bg-linear-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative flex items-center gap-3">
          {t.enterPlatform}
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={language === "ar" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </motion.svg>
        </span>
      </button>
    </motion.div>
  );
}

export default WelcomeButton;
