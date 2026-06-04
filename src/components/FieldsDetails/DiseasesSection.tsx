import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import DiseasesCard from "./DiseasesCard";

import useFieldDiseases from "../../hooks/useFieldDiseases";
import useMedicalFieldById from "../../hooks/useMedicalFieldById";
import Error from "../Error";
import Spinner from "../Spinner";
import Empty from "../Empty";
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

  if (error) return <Error error={error} />;
  if (errorDiseases) return <Error error={errorDiseases} />;
  if (isPending || isPendingDiseases) return <Spinner />;
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
              className="text-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-slate-700/60 shadow-lg px-2 py-1 rounded-2xl"
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
      {fieldDiseases.length === 0 && (
        <Empty>
          {language === "en"
            ? "More conditions coming soon..."
            : "المزيد من الحالات قريباً..."}
        </Empty>
      )}
    </>
  );
}

export default DiseasesSection;
