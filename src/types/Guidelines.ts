export type Guidelines = {
  id: number;
  created_at: string;
  safety_guideline_id: number;
  title: {
    en: string;
    ar: string;
  };
  content: object;
};
