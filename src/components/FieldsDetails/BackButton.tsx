import { ArrowLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
function BackButton() {
  const { language } = useTheme();

  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate("/home")}
      className="mb-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {language === "ar" ? (
        <div className="flex items-center  gap-3">
          <ArrowLeft className="w-5 h-5 rotate-180" />
          <span className="mb-1.5">{"رجوع"}</span>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <span>{"Back"}</span>
        </div>
      )}
    </motion.button>
  );
}

export default BackButton;
