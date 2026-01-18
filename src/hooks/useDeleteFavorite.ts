import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/favorites");

const useDeleteFavorite = () => {
  return useMutation({
    mutationFn: (listing_id: number) => apiClient.postPath(listing_id),
  });
};

export default useDeleteFavorite;
