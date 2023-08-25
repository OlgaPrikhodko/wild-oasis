import supabase from "./supabase";

import { SettingsType } from "@/types/supabase.types";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data as SettingsType;
}
