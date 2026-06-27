import type { Disease } from "../types/Diseases";
import type { Guidelines } from "../types/Guidelines";
import supabase from "./supabase";
function normalizeArabic(text: string) {
  return text
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ؤئ]/g, "ي")
    .replace(/[\u064B-\u065F]/g, "")
    .trim()
    .toLowerCase();
}
export async function searchDiseases(query: string): Promise<Disease[]> {
  const safeQuery = query.trim();
  if (!safeQuery) return [];
  const normalizedArabic = normalizeArabic(safeQuery);
  console.log({
    original: safeQuery,
    normalized: normalizedArabic,
  });
  const { data: searchData, error } = await supabase
    .from("diseases")
    .select("*")
    .or(
      `search_text_ar.ilike.%${normalizedArabic}%,search_text_en.ilike.%${safeQuery.toLowerCase()}%`,
    );
  if (error) {
    console.error(error);
    throw new Error("Diseases can not be loaded!");
  }

  return searchData || [];
}

export async function searchGuidelines(query: string): Promise<Guidelines[]> {
  const safeQuery = query.trim();
  if (!safeQuery) return [];
  const normalizedArabic = normalizeArabic(safeQuery);
  console.log({
    original: safeQuery,
    normalized: normalizedArabic,
  });
  const { data: searchData, error } = await supabase
    .from("safety_guidelines_content")
    .select("*")
    .or(
      `search_text_ar.ilike.%${normalizedArabic}%,search_text_en.ilike.%${safeQuery.toLowerCase()}%`,
    );
  if (error) {
    console.error(error);
    throw new Error("Guidelines can not be loaded!");
  }

  return searchData || [];
}

export type SearchResult =
  | (Disease & { type: "disease" })
  | (Guidelines & { type: "guideline" });
export async function GlobalSearch(query: string): Promise<SearchResult[]> {
  const [diseases, guidelines] = await Promise.all([
    searchDiseases(query),
    searchGuidelines(query),
  ]);

  return [
    ...diseases.map((disease) => ({
      ...disease,
      type: "disease" as const,
    })),
    ...guidelines.map((guideline) => ({
      ...guideline,
      type: "guideline" as const,
    })),
  ];
}
