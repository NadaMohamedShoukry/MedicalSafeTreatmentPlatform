import { Earth, Hospital, Pill } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";

function WelcomeStatsBoxes() {
  const { language } = useTheme();

  return (
    <motion.div
      className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {[
        {
          label: language === "en" ? "10+ Fields" : "10+ مجالات",
          icon: <Hospital />,
        },
        {
          label: language === "en" ? "100+ Diseases" : "100+ مرض",
          icon: <Pill />,
        },
        {
          label: language === "en" ? "Bilingual" : "لغتان",
          icon: <Earth />,
        },
        {
          label: language === "en" ? "Egypt 2030" : "مصر 2030",
          icon: "🇪🇬",
        },
      ].map((stat, i) => (
        <motion.div
          key={i}
          className=" flex flex-col items-center justify-center p-2 sm:p-4 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl sm:text-4xl mb-2 text-blue-700 dark:text-blue-200">
            {stat.icon}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default WelcomeStatsBoxes;
