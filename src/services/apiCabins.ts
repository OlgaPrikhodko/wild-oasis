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

type CabinCreateType = Omit<CabinType, "image"> & { image: File };

export async function createCabin(newCabin: CabinCreateType) {
  const imageName = `${Math.random()}-${newCabin?.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

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
