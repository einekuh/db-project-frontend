import useAuthStore from "@/stores/authStore";
import type { UserLogin } from "@/entities/User";
import APIClient from "@/services/api-Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient<UserLogin>("/login");

const useLogin = () => {
  const setStatus = useAuthStore((s) => s.setStatus);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<UserLogin, Error, UserLogin>({
    mutationFn: (user: UserLogin) =>
      apiClient.login({
        username: user.email,
        password: user.password,
      }),
    onSuccess: () => {
      // Approach 1: Invalidating the cache
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      //Approach 2: Updating the data in the cache
      setStatus("authenticated");
      navigate("/");
    },

    onError: () => {},
  });
};

export default useLogin;
