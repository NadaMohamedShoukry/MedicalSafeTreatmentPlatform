export type Guidelines = {
  id: number;
  created_at: string;
  safety_guideline_id: number;
  title: {
    en: string;
    ar: string;
  };
  content: {
    risks: {
      en: string;
      ar: string;
    };
    common_uses: {
      en: string[];
      ar: string[];
    };
    active_compound: {
      en: string;
      ar: string;
    };
    vulnerable_groups: {
      en: string[];
      ar: string[];
    };
    potential_benefits: {
      en: string[];
      ar: string[];
    };
    risks_and_toxicity: {
      en: string[];
      ar: string[];
    };
  };
  search_text_ar: string;
  search_text_en: string;
};
