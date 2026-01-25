import type { Listing } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import type { ListingQuery } from "@/stores/listingQueryStore";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/listings");

const useListings = (query: ListingQuery) => {
  return useQuery<Listing[], Error, Listing[]>({
    queryKey: ["listings", query],
    queryFn: () => apiClient.get({ params: { content: query } }),
    retry: 0,
  });
};

export default useListings;
