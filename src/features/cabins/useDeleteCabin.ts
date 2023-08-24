import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabin as deleteCabinApi } from "@/services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id: number) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin has been successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err: { message: string }) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
