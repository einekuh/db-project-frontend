import APIClient from "@/services/api-Client";
import useAuthStore from "@/stores/authStore";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/favorites");

const useAddFavorite = () => {
  const user = useAuthStore(s => s.user)

  return useMutation({
    mutationFn: (listing_id: number) => apiClient.post({user_id: user?.id, listing_id: listing_id}),
  });
};

export default useAddFavorite;
