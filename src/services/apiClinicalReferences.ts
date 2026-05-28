import type { ClinicalReferences } from "../types/ClinicalReferences";
import supabase from "./supabase";

export async function getClinicalReferences(
  field_id: number,
): Promise<ClinicalReferences[]> {
  const { data: clinical_references, error } = await supabase
    .from("clinical_references")
    .select("*")
    .eq("medical_field_id", field_id);

  if (error) {
    console.error(error);
    throw new Error("Clinical References can not be loaded!");
  }
  return clinical_references;
}
