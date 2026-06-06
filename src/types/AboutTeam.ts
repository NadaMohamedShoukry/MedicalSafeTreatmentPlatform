export type AboutTeamResponse = {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string[];
    ar: string[];
  } | null;
  type: {
    en: string;
    ar: string;
  };
  bio: {
    en: string;
    ar: string;
  };
  image: string;
  key: number;
};
