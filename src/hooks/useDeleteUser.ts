import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";


const useDeleteUser = (user_id: number) => {
  const apiClient = new APIClient(`/users/${user_id}`);

  return useMutation({
    mutationFn: () => apiClient.delete(),
  });
};

export default useDeleteUser;
