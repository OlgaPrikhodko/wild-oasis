import { signup as signupApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account succesfully created! Please verify the new account from the user's email adress."
      );
    },
  });

  return { signup, isLoading };
}
