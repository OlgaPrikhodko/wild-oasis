import supabase from "./supabase";
import { BookingRowType } from "@/types/supabase.types";

// fields "status"
export type FilterMethodType = "eq" | "lte" | "gte";
export type FilterType = {
  field: string;
  value: string;
  method?: FilterMethodType;
} | null;

//direction: "asc" | "desc"
type SortType = { field: string; direction: string };
type GetBookingsProps = { filter: FilterType; sortBy?: SortType };
// sortBy: startDate-desc startDate-asc

export async function getBookings({ filter, sortBy }: GetBookingsProps) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count: count || 0 } as unknown as {
    data: BookingRowType[];
    count: number;
  };
}
