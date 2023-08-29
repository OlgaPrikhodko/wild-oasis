import { useQuery } from "@tanstack/react-query";
import { getBookings } from "@/services/apiBooking";

export function useBookings() {
  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, bookings: isSuccess ? data : [], error };
}
