import { PAGE_SIZE } from "@/utils/constants";
import supabase from "./supabase";
import {
  BookingDetailsType,
  BookingRowType,
  StatusType,
} from "@/types/supabase.types";

// fields "status"
export type FilterMethodType = "eq" | "lte" | "gte";
export type FilterType = {
  field: string;
  value: string;
  method?: FilterMethodType;
} | null;

//direction: "asc" | "desc"
type SortType = { field: string; direction: string };
type GetBookingsProps = { filter: FilterType; sortBy?: SortType; page: number };
// sortBy: startDate-desc startDate-asc

export async function getBookings({ filter, sortBy, page }: GetBookingsProps) {
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

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
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

export async function getBooking(id: number) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Bookings could not be loaded");
  }

  return data as BookingDetailsType;
}

export async function updateBooking(
  id: number,
  obj: {
    status: StatusType;
    isPaid?: boolean;
    hasBreakfast?: boolean;
    extrasPrice?: number;
    totalPrice?: number;
  }
) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id: number) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
