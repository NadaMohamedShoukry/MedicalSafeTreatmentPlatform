export type MedicalFieldsResponse = {
  id: number;
  created_at: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  images: string;
};
