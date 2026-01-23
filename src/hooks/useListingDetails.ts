import type { ListingDetails } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const useListingDetails = (listing_id: number) => {
  const apiClient = new APIClient(`/listings/${listing_id}/details`);
  return useQuery<ListingDetails, Error, ListingDetails>({
    queryKey: ["listing", listing_id, "details"],
    queryFn: apiClient.get,
  });
};

export default useListingDetails;
