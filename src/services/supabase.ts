import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

export const supabaseUrl = "https://imqposylegvxnqxlaout.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltcXBvc3lsZWd2eG5xeGxhb3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMTExNzAsImV4cCI6MjAwNzY4NzE3MH0._9qcWlbu-x4E1wrpmcry-IL6XtF_iADsus32q5-XdPM";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
