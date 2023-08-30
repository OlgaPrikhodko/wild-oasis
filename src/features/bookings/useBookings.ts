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

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings: isSuccess ? data : [], error };
}
