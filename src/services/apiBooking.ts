import supabase from "./supabase";
import { BookingRowType } from "@/types/supabase.types";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  if (error) {
    console.log(error);
    throw new Error("Bookings could not be loaded");
  }

  return data as unknown as BookingRowType[];
}
