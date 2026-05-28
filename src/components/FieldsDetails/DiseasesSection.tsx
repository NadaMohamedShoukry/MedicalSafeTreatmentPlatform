import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import DiseasesCard from "./DiseasesCard";
import EmptyField from "./EmptyField";
import useFieldDiseases from "../../hooks/useFieldDiseases";
import useMedicalFieldById from "../../hooks/useMedicalFieldById";
function DiseasesSection() {
  const navigate = useNavigate();
  const { fieldId } = useParams();

  const { language } = useTheme();
  const {
    fieldDiseases = [],
    isPending: isPendingDiseases,
    error: errorDiseases,
  } = useFieldDiseases(Number(fieldId));

  const { medicalFieldById, isPending, error } = useMedicalFieldById(
    Number(fieldId),
  );
  console.log(isPending, isPendingDiseases);
  console.log(error, errorDiseases);
  console.log(fieldDiseases);
  return (
    <>
      {medicalFieldById?.map((field) => (
        <motion.div
          className="mb-12 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4">
              {field.name[language]}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {field.description[language]}
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate(`/clinical-references/${field.id}`)}
              className="text-lg text-gray-900 dark:text-white border border-blue-700 dark:border-blue-200 px-2 py-1 rounded-2xl"
            >
              {language === "en" ? "For your safety" : "من أجل سلامتك"}
            </button>
          </div>
        </motion.div>
      ))}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {fieldDiseases.map((disease, index) => (
          <DiseasesCard disease={disease} index={index} />
        ))}
      </div>
      {fieldDiseases.length === 0 && <EmptyField />};
    </>
  );
}

export default DiseasesSection;
