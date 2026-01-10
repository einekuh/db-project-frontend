import type User from "@/entities/User";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient();

const useSignUp = () => {
  //const queryClient = useQueryClient();

  return useMutation<User, Error, User>({
    mutationFn: apiClient.signup,
    onSuccess: () => {
      // Approach 1: Invalidating the cache
      //queryClient.invalidateQueries({
      //queryKey: ["todos"],
      //});
      //Approach 2: Updating the data in the cache
    },
    onError: () => {},
  });
};

export default useSignUp;
