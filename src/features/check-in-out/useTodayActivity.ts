import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "@/services/apiBooking";

export function useTodayActivity() {
  const { isLoading, data } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { activities: data || [], isLoading };
}
