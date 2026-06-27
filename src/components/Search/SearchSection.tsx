import { useState } from "react";
import { motion } from "motion/react";
import { AlertCircle, CheckCircle, Leaf, Pill, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

import useSearch from "../../hooks/useSearch";
import SearchInput from "./SearchInput";
import EmptySearch from "./EmptySearch";
import type { Disease } from "../../types/Diseases";
import SearchInitialState from "./SearchInitialState";
import { useDebounce } from "use-debounce";
import Spinner from "../Spinner";
import Error from "../Error";
import type { Guidelines } from "../../types/Guidelines";
import SafetyGuidelineCard from "../SafetyGuidelinesDetails/SafetyGuidelineCard";
import DiseasesCard from "../FieldsDetails/DiseasesCard";

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  type searchResult =
    | (Disease & { type: "disease" })
    | (Guidelines & { type: "guideline" });
  const { searchData = [], isPending, error } = useSearch(debouncedQuery);
  const [selectedItem, setSelectedItem] = useState<searchResult | null>(null);
  const { language } = useTheme();

  return (
    <>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isPending && <Spinner />}
      {error && <Error error={error} />}
      {searchQuery === "" && <SearchInitialState />}
      {searchData?.length === 0 && searchQuery !== "" && <EmptySearch />}
      {/* Search Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {searchData.map((item, index) => {
          if (item.type === "disease")
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.disease_name?.[language]}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.complaint?.[language]}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                      item.severity === "safe"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {item.severity === "safe" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.symptoms?.[language]
                    .slice(0, 3)
                    .map((symptom: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium"
                      >
                        {symptom}
                      </span>
                    ))}
                  {item.symptoms?.[language].length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs">
                      +{item.symptoms?.[language].length - 3}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          if (item.type === "guideline")
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title?.[language]}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.content.active_compound?.[language]}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                      item.id === 2
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {item.id === 2 ? (
                      <Leaf className="w-3.5 h-3.5" />
                    ) : (
                      <Pill className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.content.common_uses?.[language]
                    .slice(0, 3)
                    .map((symptom: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium"
                      >
                        {symptom}
                      </span>
                    ))}
                  {item.content.common_uses?.[language].length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs">
                      +{item.content.common_uses?.[language].length - 3}
                    </span>
                  )}
                </div>
              </motion.button>
            );
        })}
      </div>
      {/* Disease Detail Modal */}

      {selectedItem?.type === "disease" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="float-right p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="clear-both">
              <DiseasesCard
                disease={selectedItem}
                index={selectedItem.id}
                isModal={true}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {selectedItem?.type === "guideline" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="float-right p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="clear-both">
              <SafetyGuidelineCard
                guideline={selectedItem}
                index={selectedItem?.id}
                isModal={true}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default SearchSection;
