import type { Disease } from "../types/Diseases";
import supabase from "./supabase";

export async function search(query: string): Promise<Disease[]> {
  const safeQuery = query.trim();
  if (!safeQuery) return [];
  const { data: searchData, error } = await supabase
    .from("diseases")
    .select("*")
    .or(
      `disease_name->>en.ilike.%${safeQuery}%,disease_name->>ar.ilike.%${safeQuery}%,complaint->>en.ilike.%${safeQuery}%,complaint->>ar.ilike.%${safeQuery}%`,
    );

  // const { data: searchData, error } = await supabase
  //   .from("diseases")
  //   .select("*")
  //   .or(
  //     `disease_name->>en.ilike.%${safeQuery}%,disease_name->>ar.ilike.%${safeQuery}%`,
  //   );
  if (error) {
    console.error(error);
    throw new Error("Medical Field can not be loaded!");
  }
  // if (!searchData?.length) {
  //   const { data: fallbackData, error: fallbackError } = await supabase
  //     .from("diseases")
  //     .select("*")
  //     .or(
  //       `complaint->>en.ilike.%${safeQuery}%,complaint->>ar.ilike.%${safeQuery}%,symptoms->en.cs.{${safeQuery}},symptoms->ar.cs.{${safeQuery}}`,
  //     );
  //   if (fallbackError) {
  //     console.error(fallbackError);
  //     throw new Error("Medical Field can not be loaded!");
  //   }
  //   return fallbackData || [];
  // }
  return searchData || [];
}
