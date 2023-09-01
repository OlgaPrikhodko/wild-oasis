import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "@/services/apiBooking";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: number;
      breakfast:
        | {
            hasBreakfast: boolean;
            extrasPrice: number;
            totalPrice: number;
          }
        | Record<string, never>;
    }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries();
      navigate("/");
    },

    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
