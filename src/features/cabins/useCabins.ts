import { useQuery } from "@tanstack/react-query";
import { getCabins } from "@/services/apiCabins";

export function useCabins() {
  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins: isSuccess ? data : [], error };
}
