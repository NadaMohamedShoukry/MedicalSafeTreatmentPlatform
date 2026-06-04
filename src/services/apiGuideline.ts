import type { Guidelines } from "../types/Guidelines";
import supabase from "./supabase";

export async function getGuidelineById(
  guidelineId: number,
): Promise<Guidelines[]> {
  const { data: safety_guidelines_content, error } = await supabase
    .from("safety_guidelines_content")
    .select("*")
    .eq("safety_guideline_id", guidelineId)
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);

  return safety_guidelines_content;
}
