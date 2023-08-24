import supabase, { supabaseUrl } from "./supabase";
import { CabinType } from "@/types/supabase.types";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data as CabinType[];
}

type CabinCreateType = Omit<CabinType, "image" | "id"> & {
  image: File | string;
};

export async function createEditCabin(newCabin: CabinCreateType, id?: number) {
  let imagePath: string;
  let imageName = "NULL";
  if (typeof newCabin.image === "string") {
    imagePath = newCabin.image;
  } else {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  // create/edit cabin
  let query;

  // create:
  if (!id)
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]);
  // edit:
  else
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  // upload image:
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete the cabin IF there was an error uploading image
  if (data && storageError) {
    await supabase
      .from("cabins")
      .delete()
      .eq("id", (data as CabinType).id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
