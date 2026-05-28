import { Heart, Stethoscope, Activity } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";
function HeroStatsBoxes() {
  const { language } = useTheme();
  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      {[
        {
          icon: Stethoscope,
          value: "10+",
          label: language === "en" ? "Medical Fields" : "مجالات طبية",
        },
        {
          icon: Activity,
          value: "100+",
          label: language === "en" ? "Conditions" : "حالات مرضية",
        },
        {
          icon: Heart,
          value: "24/7",
          label: language === "en" ? "Access" : "متاح دائماً",
        },
      ].map((stat, i) => (
        <motion.div
          key={i}
          className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-slate-700/60 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <stat.icon className="w-5 h-5 text-blue-500 mb-2" />
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            {stat.value}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStatsBoxes;
