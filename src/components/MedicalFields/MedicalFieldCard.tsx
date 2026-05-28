import { useNavigate } from "react-router";

import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MedicalFieldCardProps {
  field: {
    id: number;
    name: string;
    description: string;
    images: string;
  };
  index: number;
}
function MedicalFieldCard({ field, index }: MedicalFieldCardProps) {
  const { language } = useTheme();

  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(`/field/${field.id}`)}
      className="group relative p-6 rounded-3xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60
       dark:border-slate-700/60 shadow-lg hover:shadow-2xl transition-all 
       duration-500 overflow-hidden text-left w-full hover:border-slate-800/40 hover:dark:border-cyan-300/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 bg-linear-to-br from-blue-200 to-cyan-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      <div className="flex gap-10">
        {/* Icon */}
        <div className="relative mb-4">
          <img className="w-28 h-25" src={field.images} />
        </div>

        {/* Content */}
        <div className="relative space-y-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {field.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {field.description}
          </p>
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
        <span>{language === "en" ? "Learn more" : "اعرف المزيد"}</span>
        {language === "ar" ? (
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        ) : (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute -bottom-20 -right-20 w-40 h-40 bg-linear-to-br from-blue-200 to-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />
    </motion.button>
  );
}

export default MedicalFieldCard;
