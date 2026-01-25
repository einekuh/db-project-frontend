import type { ListingEdit } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditListing = (listing_id: number) => {
  const apiClient = new APIClient(`/listings/${listing_id}`);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (listing: ListingEdit) => apiClient.update(listing),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listing", listing_id, "details"],
      });
    },
  });
};

export default useEditListing;
