import type { ListingCreate } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/listings");

const useInsertCar = () => {
  return useMutation({
    mutationFn: (listing: ListingCreate) => apiClient.post(listing),
  });
};

export default useInsertCar;
