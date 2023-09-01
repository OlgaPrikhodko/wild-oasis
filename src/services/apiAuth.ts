import { LoginUserType } from "@/types/user.types";
import supabase from "./supabase";

export async function login({ email, password }: LoginUserType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
