import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";
import { translations } from "../../data/translations";
function HeroTextContent() {
  const { language } = useTheme();
  const t = translations[language];
  return (
    <>
      <motion.div
        className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {language === "en" ? "🇪🇬 Egypt Vision 2030" : "🇪🇬 رؤية مصر 2030"}
        </span>
      </motion.div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
        {language === "en" ? (
          <>
            Your{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            Medical Awareness Platform
          </>
        ) : (
          <>
            منصتك{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              الموثوقة
            </span>{" "}
            للتوعية الطبية
          </>
        )}
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        {t.aim}
      </p>
    </>
  );
}

export default HeroTextContent;
