import { useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  CheckCircle,
  Lightbulb,
  TriangleAlert,
  X,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import useSearch from "../../hooks/useSearch";
import SearchInput from "./SearchInput";
import EmptySearch from "./EmptySearch";
import type { Disease } from "../../types/Diseases";

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchData = [], isPending, error } = useSearch(searchQuery);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const { language } = useTheme();
  const t = translations[language];
  console.log(isPending);
  console.log(error);
  const filteredAdvice =
    selectedDisease?.advice[language].filter((item) => item.trim() !== "") ||
    [];
  const filteredRedFlags =
    selectedDisease?.red_flags[language].filter((item) => item.trim() !== "") ||
    [];
  const filteredContraindications =
    selectedDisease?.contraindications?.[language]?.filter(
      (item) => item.trim() !== "",
    ) || [];
  return (
    <>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Empty State */}
      {searchData?.length === 0 && <EmptySearch />}
      {/* Search Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {searchData.map((disease, index) => (
          <motion.button
            key={disease.id}
            onClick={() => setSelectedDisease(disease)}
            className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {disease.disease_name[language]}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {disease.complaint[language]}
                </p>
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                  disease.severity === "safe"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                }`}
              >
                {disease.severity === "safe" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {disease.symptoms[language]
                .slice(0, 3)
                .map((symptom: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium"
                  >
                    {symptom}
                  </span>
                ))}
              {disease.symptoms[language].length > 3 && (
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs">
                  +{disease.symptoms[language].length - 3}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
      {/* Disease Detail Modal */}

      {selectedDisease && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedDisease(null)}
        >
          <motion.div
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDisease(null)}
              className="float-right p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="clear-both">
              {/* Disease Name */}
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                  {selectedDisease.disease_name[language]}
                </h2>
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    selectedDisease.severity === "safe"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                  }`}
                >
                  {selectedDisease.severity === "safe" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase">
                  {t.description}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedDisease.complaint[language]}
                </p>
              </div>

              {/* Symptoms */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase">
                  {t.symptoms}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDisease.symptoms[language].map(
                    (symptom: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium"
                      >
                        {symptom}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Treatment */}
              <div className="p-4 rounded-2xl bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
                <h4 className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2 uppercase tracking-wide">
                  {t.treatment}
                </h4>

                <div className="space-y-4">
                  {selectedDisease.treatment[language].map((item, index) => {
                    const hasMedicine = item.medicine?.trim();
                    const hasGeneric = item.generic?.trim();
                    const hasDosage = item.dosage?.trim();
                    const hasDuration = item.duration?.trim();

                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-white/70 dark:bg-slate-800/40 p-4 border border-blue-100 dark:border-slate-700"
                      >
                        {hasMedicine && (
                          <h5 className="font-bold text-gray-900 dark:text-white text-base">
                            {item.medicine}
                          </h5>
                        )}

                        <div className="mt-2 space-y-2">
                          {hasGeneric && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              <span className="font-semibold">
                                {language === "en"
                                  ? "Generic:"
                                  : "المادة الفعالة:"}
                              </span>
                              {item.generic}
                            </p>
                          )}

                          {hasDosage && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              <span className="font-semibold">
                                {language === "en" ? "Dosage:" : "الجرعة:"}
                              </span>{" "}
                              {item.dosage}
                            </p>
                          )}

                          {hasDuration && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              <span className="font-semibold">
                                {language === "en" ? "Duration:" : "المدة:"}
                              </span>{" "}
                              {item.duration}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* key clue */}
              {selectedDisease.key_clue?.[language]?.trim() && (
                <div className="mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-8 h-8 text-amber-400" />
                    <div>
                      <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1 uppercase tracking-wide">
                        {t.keyClue}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedDisease.key_clue[language]}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {filteredAdvice.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2 uppercase tracking-wide">
                    {t.advice}
                  </h4>
                  <ul className="space-y-2">
                    {filteredAdvice.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 "
                      >
                        <span className="mt-1 text-cyan-500">.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {filteredRedFlags.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <h4 className="text-sm font-bold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">
                    {t.redFlags}
                  </h4>
                  <ul className="space-y-2">
                    {filteredRedFlags.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300 "
                      >
                        <TriangleAlert className="w-5 h-5 text-red-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {filteredContraindications.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="text-sm font-bold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">
                    {t.contraindications}
                  </h4>
                  <ul className="space-y-2">
                    {filteredContraindications.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-orange-700 dark:text-orange-300 "
                      >
                        <X className="w-5 h-5 text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Severity Warning */}
              <div
                className={`mt-4 p-3 rounded-xl flex items-center gap-3 ${
                  selectedDisease.severity === "safe"
                    ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                }`}
              >
                {selectedDisease.severity === "safe" ? (
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                )}
                <p
                  className={`text-sm font-medium ${
                    selectedDisease.severity === "safe"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {t.severity[selectedDisease.severity]}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default SearchSection;
