import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { FilterType, getBookings } from "@/services/apiBooking";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter: FilterType =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings: isSuccess ? data : [], error };
}
