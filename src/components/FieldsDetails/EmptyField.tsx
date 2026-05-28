import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { FileSearchCorner } from "lucide-react";
function EmptyField() {
  const { language } = useTheme();
  return (
    <motion.div
      className="text-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <FileSearchCorner className="w-12 h-12 sm:w-16 sm:h-16 " />
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {language === "en"
            ? "More conditions coming soon..."
            : "المزيد من الحالات قريباً..."}
        </p>
      </div>
    </motion.div>
  );
}

export default EmptyField;
