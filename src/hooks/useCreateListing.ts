import type { ListingCreate } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/listings");

const useCreateListing = () => {
  return useMutation<ListingCreate, Error, ListingCreate>({
    mutationFn: (listing: ListingCreate) => apiClient.post(listing, {headers: { "Content-Type": "multipart/form-data" }}),
  });
};

export default useCreateListing;
