import APIClient from "@/services/api-Client";
import useAuthStore from "@/stores/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useDeleteUser = (user_id: number) => {
  const apiClient = new APIClient(`/users/${user_id}`);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setStatus = useAuthStore((s) => s.setStatus);

  return useMutation({
    mutationFn: () => apiClient.delete(),
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      //Approach 2: Updating the data in the cache
      setStatus("anonymous");
    },
    onError: (error: Error) => {
      const message = error?.message;

      // Temporäres Debugging: Status + Response loggen
      // (im Browser in der Konsole sichtbar)
      console.error("Delete account failed", { message });
      alert(`Could not delete account. Status: ${message}`);
    },
  });
};

export default useDeleteUser;
