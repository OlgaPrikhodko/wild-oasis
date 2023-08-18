import supabase from "./supabase";
import { CabinType } from "@/types/supabase.types";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data as CabinType[];
}
