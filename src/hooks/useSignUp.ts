import type { UserCreate } from "@/entities/User";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";
import useLogin from "./useLogin";
//import type { AxiosRequestConfig } from "axios";
//import { useNavigate } from "react-router-dom";

const apiClient = new APIClient<UserCreate>("/register");

const useSignUp = () => {
  //const queryClient = useQueryClient();
  //const navigate = useNavigate();
  const loginUser = useLogin();

  return useMutation<UserCreate, Error, UserCreate>({
    mutationFn: (user: UserCreate) => apiClient.post(user),

    onSuccess: (_data, variables) => {
      // Approach 1: Invalidating the cache
      //queryClient.invalidateQueries({
      //queryKey: ["todos"],
      //});
      //Approach 2: Updating the data in the cache
      //navigate("/");
      loginUser.mutate({
        email: variables.email,
        password: variables.password,
      });
    },
    onError: () => {},
  });
};

export default useSignUp;
