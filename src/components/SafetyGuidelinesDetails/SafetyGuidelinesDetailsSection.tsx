import { motion } from "motion/react";
import useSafetyGuidelineById from "../../hooks/useSafetyGuidelineById";
import { useParams } from "react-router";
import Spinner from "../Spinner";
import Error from "../Error";
import { useTheme } from "../../context/ThemeContext";
import SafetyGuidelineCard from "./SafetyGuidelineCard";
import useGuideline from "../../hooks/useGuideline";
import Empty from "../Empty";
function SafetyGuidelinesDetailsSection() {
  const { guidelineId } = useParams();
  const { language } = useTheme();
  const {
    safetyGuidelineById = [],
    isPending: isPendingSafety,
    error: errorSafety,
  } = useSafetyGuidelineById(Number(guidelineId));

  const {
    guidelines = [],
    isPending,
    error,
  } = useGuideline(Number(guidelineId));
  console.log(guidelines);
  if (error) return <Error error={error} />;
  if (errorSafety) return <Error error={errorSafety} />;
  if (isPending || isPendingSafety) return <Spinner />;

  return (
    <>
      {safetyGuidelineById?.map((guideline) => (
        <motion.div
          className="mb-12 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4">
              {guideline.name[language]}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {guideline.description[language]}
            </p>
          </div>
        </motion.div>
      ))}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {guidelines.map((guideline, index) => (
          <SafetyGuidelineCard
            key={index}
            guideline={guideline}
            index={index}
          />
        ))}
      </div>
      {guidelines.length === 0 && (
        <Empty>
          {language === "en"
            ? "More guidelines coming soon..."
            : "المزيد من الارشادات قريباً..."}
        </Empty>
      )}
    </>
  );
}

export default SafetyGuidelinesDetailsSection;
