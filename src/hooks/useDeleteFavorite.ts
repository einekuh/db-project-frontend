import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const useDeleteFavorite = (listing_id: number) => {
  const apiClient = new APIClient(`/favorites/${listing_id}`);
  return useMutation({
    mutationFn: apiClient.post,
  });
};

export default useDeleteFavorite;
