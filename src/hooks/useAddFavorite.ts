import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/favorites");

const useAddFavorite = () => {
  return useMutation({
    mutationFn: (listing_id: number) => apiClient.post(listing_id),
  });
};

export default useAddFavorite;
