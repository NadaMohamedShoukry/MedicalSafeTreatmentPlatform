// export type ClinicalReferences = {
//   id: number;

//   medical_field_id: number;

//   type: string;

//   title: {
//     en: string;
//     ar: string;
//   };
//   content: Content;
// };
// type Content = {
//   content: RedFlagsContent | PediatricDoseContent | PregnancySafetyContent;
// };
// export type RedFlagsContent = { en: string[]; ar: string[] };
// export type PregnancySafetyContent = {
//   en: { safe: string[]; avoid: string[] };
//   ar: { safe: string[]; avoid: string[] };
// };
// export type PediatricDoseContent = { en: DrugInfo[]; ar: DrugInfo[] };
// type DrugInfo = {
//   drug: string;
//   dose: string;
//   frequency: string;
//   notes: string;
// };

export type ClinicalReferences = {
  id: number;

  medical_field_id: number;

  type: "red_flags" | "pediatric_doses" | "pregnancy_drug_safety";

  title: {
    en: string;
    ar: string;
  };

  content: RedFlagsContent | PediatricDoseContent | PregnancySafetyContent;
};

export type RedFlagsContent = {
  en: string[];
  ar: string[];
};

export type PediatricDoseContent = {
  en: DrugInfo[];
  ar: DrugInfo[];
};

export type PregnancySafetyContent = {
  en: {
    safe: string[];
    avoid: string[];
  };

  ar: {
    safe: string[];
    avoid: string[];
  };
};

export type DrugInfo = {
  drug: string;
  dose: string;
  frequency: string;
  notes: string;
};
