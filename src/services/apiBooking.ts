import supabase from "./supabase";
import { BookingRowType } from "@/types/supabase.types";

// fields "status"
export type FilterMethodType = "eq" | "lte" | "gte";
export type FilterType = {
  field: string;
  value: string;
  method?: FilterMethodType;
} | null;
type SortType = { field: string; value: string };
type GetBookingsProps = { filter: FilterType; sortBy?: SortType };

export async function getBookings({
  filter,
  sortBy,
}: GetBookingsProps): Promise<BookingRowType[]> {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  // FILTER
  if (filter !== null)
    query = query[filter.method || "eq"](filter.field, filter.value);
  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Bookings could not be loaded");
  }

  return data as unknown as BookingRowType[];
}
