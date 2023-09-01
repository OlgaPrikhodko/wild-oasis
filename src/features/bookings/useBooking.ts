import { useQuery } from "@tanstack/react-query";
import { getBooking } from "@/services/apiBooking";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams<{ bookingId: string }>();

  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(Number(bookingId)),
    retry: false,
  });

  return { isLoading, booking: isSuccess ? data : null, error };
}
