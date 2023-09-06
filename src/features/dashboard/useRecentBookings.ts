import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

import { getBookingsAfterDate } from "@/services/apiBooking";
import { BookingsAfterDateType } from "@/types/supabase.types";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings: data as unknown as BookingsAfterDateType[] };
}
