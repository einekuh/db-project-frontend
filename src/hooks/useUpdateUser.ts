import type { UserUpdate } from "@/entities/User";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/users/me");

const useUpdateUser = () => {
  return useMutation({
    mutationFn: (updatedUser: UserUpdate) => apiClient.update(updatedUser),
    onSuccess: () => {},

    onError: () => {},
  });
};

export default useUpdateUser;
