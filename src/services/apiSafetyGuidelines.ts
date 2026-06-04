import type { SafetyGuidelinesResponse } from "../types/SafetyGuidelines";
import supabase from "./supabase";

export async function getSafetyGuidelines(): Promise<
  SafetyGuidelinesResponse[]
> {
  const { data: safety_guidelines, error } = await supabase
    .from("safety_guidelines")
    .select("*");
  if (error) {
    throw new Error(error.message);
  }
  return safety_guidelines;
}

export async function getSafetyGuidelinesById(
  guidelineId: number,
): Promise<SafetyGuidelinesResponse[]> {
  const { data: safety_guidelines, error } = await supabase
    .from("safety_guidelines")
    .select("*")
    .eq("id", guidelineId);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return safety_guidelines;
}
