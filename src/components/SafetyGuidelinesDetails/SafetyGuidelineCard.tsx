/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import type { Guidelines } from "../../types/Guidelines";
import { useTheme } from "../../context/ThemeContext";
import {
  AlertTriangle,
  BookOpen,
  FlaskConical,
  Info,
  Leaf,
  Pill,
  ShieldAlert,
  Users,
  Zap,
} from "lucide-react";

interface GuidelineCardProps {
  guideline: Guidelines;
  index: number;
}
const SECTION_CONFIG: Record<
  string,
  {
    icon: React.ElementType;
    labelEn: string;
    labelAr: string;
    color: "blue" | "red" | "amber" | "orange" | "green" | "purple" | "slate";
  }
> = {
  overview: {
    icon: BookOpen,
    labelEn: "Overview",
    labelAr: "نظرة عامة",
    color: "blue",
  },
  risks: {
    icon: ShieldAlert,
    labelEn: "Risks",
    labelAr: "المخاطر",
    color: "red",
  },
  risks_and_toxicity: {
    icon: AlertTriangle,
    labelEn: "Risks & Toxicity",
    labelAr: "المخاطر والسمية",
    color: "red",
  },
  common_uses: {
    icon: Leaf,
    labelEn: "Common Uses",
    labelAr: "الاستخدامات الشائعة",
    color: "green",
  },
  active_compound: {
    icon: FlaskConical,
    labelEn: "Active Compound",
    labelAr: "المركب الفعال",
    color: "purple",
  },
  potential_benefits: {
    icon: Zap,
    labelEn: "Potential Benefits",
    labelAr: "الفوائد المحتملة",
    color: "amber",
  },
  vulnerable_groups: {
    icon: Users,
    labelEn: "Vulnerable Groups",
    labelAr: "الفئات الأكثر عرضة للخطر",
    color: "orange",
  },
  mechanism: {
    icon: FlaskConical,
    labelEn: "Mechanism",
    labelAr: "الآلية",
    color: "purple",
  },
  recommendations: {
    icon: Pill,
    labelEn: "Recommendations",
    labelAr: "التوصيات",
    color: "blue",
  },
};
// / Fallback for unknown section keys
const FALLBACK_CONFIG = {
  icon: Info,
  labelEn: "",
  labelAr: "",
  color: "slate" as const,
};
const COLOR_STYLES = {
  blue: {
    wrapper:
      "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800",
    heading: "text-blue-700 dark:text-blue-400",
    text: "text-gray-700 dark:text-gray-300",
    bullet: "text-cyan-500",
    icon: "text-blue-500 dark:text-blue-400",
  },
  red: {
    wrapper: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    heading: "text-red-700 dark:text-red-400",
    text: "text-red-700 dark:text-red-300",
    bullet: "text-red-400",
    icon: "text-red-500",
  },
  amber: {
    wrapper:
      "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    heading: "text-amber-700 dark:text-amber-400",
    text: "text-gray-700 dark:text-gray-300",
    bullet: "text-amber-400",
    icon: "text-amber-500 dark:text-amber-400",
  },
  orange: {
    wrapper:
      "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    heading: "text-orange-700 dark:text-orange-400",
    text: "text-orange-700 dark:text-orange-300",
    bullet: "text-orange-400",
    icon: "text-orange-500",
  },
  green: {
    wrapper:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    heading: "text-green-700 dark:text-green-400",
    text: "text-gray-700 dark:text-gray-300",
    bullet: "text-green-400",
    icon: "text-green-500 dark:text-green-400",
  },
  purple: {
    wrapper:
      "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    heading: "text-purple-700 dark:text-purple-400",
    text: "text-gray-700 dark:text-gray-300",
    bullet: "text-purple-400",
    icon: "text-purple-500 dark:text-purple-400",
  },
  slate: {
    wrapper:
      "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700",
    heading: "text-slate-700 dark:text-slate-300",
    text: "text-gray-700 dark:text-gray-300",
    bullet: "text-slate-400",
    icon: "text-slate-500",
  },
};

// const renderValue = (value: any) => {
//   if (!value) return null;

//   if (Array.isArray(value)) {
//     return value.map((v, i) => <p key={i}>• {v}</p>);
//   }

//   return <p>{value}</p>;
// };
function SectionBlock({
  sectionKey,
  value,
  language,
}: {
  sectionKey: string;
  value: any;
  language: "en" | "ar";
}) {
  const config = SECTION_CONFIG[sectionKey] ?? FALLBACK_CONFIG;
  const styles = COLOR_STYLES[config.color];
  const Icon = config.icon;

  const label = config.labelEn
    ? language === "en"
      ? config.labelEn
      : config.labelAr
    : sectionKey.replace(/_/g, " ");

  const localizedValue = value?.[language];
  if (!localizedValue) return null;

  const isArray = Array.isArray(localizedValue);
  const isEmpty = isArray
    ? localizedValue.filter((v: string) => v.trim()).length === 0
    : !String(localizedValue).trim();

  if (isEmpty) return null;

  return (
    <div className={`mt-4 p-4 rounded-2xl border ${styles.wrapper}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 shrink-0 ${styles.icon}`} />
        <h4
          className={`text-sm font-bold uppercase tracking-wide ${styles.heading}`}
        >
          {label}
        </h4>
      </div>

      {isArray ? (
        <ul className="space-y-2">
          {(localizedValue as string[])
            .filter((item) => item.trim())
            .map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-sm ${styles.text}`}
              >
                <span className={`mt-1 font-bold ${styles.bullet}`}>•</span>
                <span>{item}</span>
              </li>
            ))}
        </ul>
      ) : (
        <p className={`text-sm leading-relaxed ${styles.text}`}>
          {localizedValue}
        </p>
      )}
    </div>
  );
}

function SafetyGuidelineCard({ guideline, index }: GuidelineCardProps) {
  const { language } = useTheme();
  console.log(guideline);
  // Determine card type badge based on content keys present
  const SECTION_ORDER = [
    "overview",
    "common_uses",
    "active_compound",
    "potential_benefits",
    "mechanism",
    "recommendations",
    "risks",
    "risks_and_toxicity",
    "vulnerable_groups",
  ];

  const keys = Object.keys(guideline.content).sort((a, b) => {
    const ai = SECTION_ORDER.indexOf(a);
    const bi = SECTION_ORDER.indexOf(b);
    // Unknown keys go to the end
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
  const isHerb =
    keys.includes("common_uses") || keys.includes("active_compound");
  //   const isSupplement = keys.includes("overview") || keys.includes("risks");
  return (
    <motion.div
      key={guideline.id}
      className="p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Disease Name with Severity Badge */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {guideline.title[language]}
        </h3>
        <div
          className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            isHerb
              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
              : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
          }`}
        >
          {isHerb ? (
            <Leaf className="w-3.5 h-3.5" />
          ) : (
            <Pill className="w-3.5 h-3.5" />
          )}
          <span>
            {isHerb
              ? language === "en"
                ? "Herb"
                : "عشبة"
              : language === "en"
                ? "Supplement"
                : "مكمل"}
          </span>
        </div>
      </div>

      {/* Dynamically render each content section */}
      {keys.map((sectionKey) => (
        <SectionBlock
          key={sectionKey}
          sectionKey={sectionKey}
          value={(guideline.content as Record<string, unknown>)[sectionKey]}
          language={language}
        />
      ))}
    </motion.div>
  );
}

export default SafetyGuidelineCard;
