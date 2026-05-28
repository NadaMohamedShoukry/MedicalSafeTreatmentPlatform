import type { MedicalFieldsResponse } from "../types/MedicalFields";
import supabase from "./supabase";

export async function getMedicalFields(): Promise<MedicalFieldsResponse[]> {
  const { data: medical_fields, error } = await supabase
    .from("medical_fields")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Medical Fields can not be loaded!");
  }
  return medical_fields;
}

export async function getMedicalFieldById(
  field_id: number,
): Promise<MedicalFieldsResponse[]> {
  const { data: medical_fields, error } = await supabase
    .from("medical_fields")
    .select("*")
    .eq("id", field_id);
  if (error) {
    console.error(error);
    throw new Error("Medical Field can not be loaded!");
  }
  return medical_fields;
}
