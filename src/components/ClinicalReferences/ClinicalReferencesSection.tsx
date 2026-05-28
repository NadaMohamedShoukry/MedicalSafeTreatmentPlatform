/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import useClinicalReferences from "../../hooks/useClinicalReferences";
import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { AlertTriangle, Baby, ShieldAlert, TriangleAlert } from "lucide-react";
import type {
  PediatricDoseContent,
  PregnancySafetyContent,
  RedFlagsContent,
} from "../../types/ClinicalReferences";
import EmptyClinical from "./EmptyClinical";
function ClinicalReferencesSection() {
  const { fieldId } = useParams();
  const { language } = useTheme();
  console.log(fieldId);
  const { clinicalReferences, isPending, error } = useClinicalReferences(
    Number(fieldId),
  );
  console.log(clinicalReferences, isPending, error);

  const redFlags = clinicalReferences?.find((ref) => ref.type === "red_flags");
  const pediatricDoses = clinicalReferences?.find(
    (ref) => ref.type === "pediatric_doses",
  );
  const pregnancySafety = clinicalReferences?.find(
    (ref) => ref.type === "pregnancy_drug_safety",
  );
  return (
    <>
      <motion.div
        className="mb-12 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mt-12 text-2xl sm:text-3xl font-black text-gray-900 dark:text-white ">
          {language === "en" ? "For your safety" : "من أجل سلامتك"}
        </h1>
      </motion.div>
      {clinicalReferences?.length === 0 && <EmptyClinical />}
      {redFlags && (
        <motion.div
          className="mb-6 p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold">{redFlags.title[language]}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(redFlags.content as RedFlagsContent)[language].map(
              (flag: string) => (
                <div
                  key={flag}
                  className="flex items-center  gap-3 rounded-2xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4"
                >
                  <TriangleAlert className="w-5 h-5 text-red-500" />
                  <p className="font-medium leading-relaxed"> {flag}</p>
                </div>
              ),
            )}
          </div>
        </motion.div>
      )}
      {pediatricDoses && (
        <motion.div
          className="mb-6 p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <Baby className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">
              {pediatricDoses.title[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {(pediatricDoses.content as PediatricDoseContent)[language].map(
              (item: any) => (
                <div
                  key={item.drug}
                  className="rounded-2xl border p-6 sm:p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md  border-white/60 dark:border-slate-700/60 "
                >
                  <h3 className="font-bold text-lg mb-4"> {item.drug} </h3>{" "}
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">
                        {language === "ar" ? "الجرعة:" : "Dose:"}
                      </span>
                      {item.dose}
                    </p>
                    <p>
                      <span className="font-semibold">
                        {language === "ar" ? "التكرار:" : "Frequency:"}
                      </span>
                      {item.frequency}
                    </p>
                    <p>
                      <span className="font-semibold">
                        {language === "ar" ? "ملاحظات:" : "Notes:"}{" "}
                      </span>
                      {item.notes}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="mb-6 hidden lg:block overflow-x-auto p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-center p-4">
                    {language === "ar" ? "الدواء" : "Drug"}
                  </th>
                  <th className="text-center p-4">
                    {language === "ar" ? "الجرعة" : "Dose"}
                  </th>
                  <th className="text-center p-4">
                    {language === "ar" ? "التكرار" : "Frequency"}
                  </th>
                  <th className="text-center p-4">
                    {language === "ar" ? "ملاحظات" : "Notes"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(pediatricDoses.content as PediatricDoseContent)[language].map(
                  (item: any) => (
                    <tr key={item.drug} className="border-b">
                      <td className="p-4 font-medium text-center">
                        {item.drug}
                      </td>
                      <td className="p-4 text-center"> {item.dose} </td>
                      <td className="p-4 text-center"> {item.frequency} </td>
                      <td className="p-4 text-center"> {item.notes} </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {pregnancySafety && (
        <motion.div
          className="mb-6 p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <ShieldAlert className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">
              {pregnancySafety.title[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">
                ✔ {language === "ar" ? "آمنة" : "Generally Safe"}
              </h3>
              <div className="space-y-3">
                {(pregnancySafety.content as PregnancySafetyContent)[
                  language
                ].safe.map((item: string) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* AVOID */}
            <div className="rounded-3xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6">
              {" "}
              <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                ✘ {language === "ar" ? "ممنوعة" : "Avoid"}
              </h3>
              <div className="space-y-3">
                {(pregnancySafety.content as PregnancySafetyContent)[
                  language
                ].avoid.map((item: string) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ClinicalReferencesSection;
