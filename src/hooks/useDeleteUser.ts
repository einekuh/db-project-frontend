import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/users");

const useDeleteUser = () => {
  return useMutation({
    mutationFn: (userId: number) => apiClient.delete(userId),
  });
};

export default useDeleteUser;
