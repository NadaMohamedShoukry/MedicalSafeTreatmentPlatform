import type { AboutTeamResponse } from "../types/AboutTeam";
import supabase from "./supabase";

export async function getAboutTeam(): Promise<AboutTeamResponse[]> {
  const { data: about_team, error } = await supabase
    .from("about_team")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error("About Team can not be loaded!");
  }
  return about_team;
}
