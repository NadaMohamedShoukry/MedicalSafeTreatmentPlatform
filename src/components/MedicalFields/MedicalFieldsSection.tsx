import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import MedicalFieldCard from "./MedicalFieldCard";
import useMedicalFields from "../../hooks/useMedicalFields";
function MedicalFieldsSection() {
  const { language } = useTheme();
  const t = translations[language];
  const { medicalFields = [], isPending, error } = useMedicalFields();
  console.log(isPending);
  console.log(error);

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
            {t.medicalFields}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === "en"
              ? "Explore comprehensive medical information across various specialties"
              : "استكشف معلومات طبية شاملة عبر مختلف التخصصات"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicalFields.map((field, index) => (
            <MedicalFieldCard
              key={field.id}
              field={{
                id: field.id,
                images: field.images,
                name: field.name[language],
                description: field.description[language],
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicalFieldsSection;
