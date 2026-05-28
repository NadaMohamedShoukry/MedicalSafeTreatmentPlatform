export type Language = "en" | "ar";

export type TreatmentItem = {
  medicine: string;
  generic: string;
  dosage: string;
  duration: string;
};
export type Disease = {
  id: number;

  medical_field_id: number;

  disease_name: {
    en: string;
    ar: string;
  };

  complaint: {
    en: string;
    ar: string;
  };

  symptoms: {
    en: string[];
    ar: string[];
  };

  treatment: {
    en: TreatmentItem[];
    ar: TreatmentItem[];
  };
  key_clue: { en: string; ar: string };
  severity: "safe" | "serious";
  advice: {
    en: string[];
    ar: string[];
  };
  red_flags: {
    en: string[];
    ar: string[];
  };
  contraindications: { en: string[]; ar: string[] };
};
