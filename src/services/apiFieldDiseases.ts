import type { Disease } from "../types/Diseases";
import supabase from "./supabase";

export async function getFieldDiseases(field_id: number): Promise<Disease[]> {
  const { data: diseases, error } = await supabase
    .from("diseases")
    .select("*")
    .eq("medical_field_id", field_id);

  if (error) {
    console.error(error);
    throw new Error("Medical Fields can not be loaded!");
  }
  return diseases;
}
