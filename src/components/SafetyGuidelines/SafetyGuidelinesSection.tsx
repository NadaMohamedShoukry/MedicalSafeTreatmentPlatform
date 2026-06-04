import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import useSafetyGuidelines from "../../hooks/useSafetyGuidelines";
import Error from "../Error";
import Spinner from "../Spinner";
import SafetyGuidelinesCard from "./SafetyGuidelinesCard";
function SafetyGuidelinesSection() {
  const { language } = useTheme();
  const t = translations[language];
  const { safetyGuidelines = [], isPending, error } = useSafetyGuidelines();
  if (error) return <Error error={error} />;
  if (isPending) return <Spinner />;
  return (
    <section className="py-12 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t.safetyGuidelines}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === "en"
              ? "Important safety information regarding supplements and natural products"
              : "معلومات هامة عن السلامة فيما يخص المكملات والمنتجات الطبيعية"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {safetyGuidelines.map((guideline, index) => (
            <SafetyGuidelinesCard
              key={guideline.id}
              guideline={{
                id: guideline.id,
                images: guideline.images,
                name: guideline.name[language],
                description: guideline.description[language],
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SafetyGuidelinesSection;
