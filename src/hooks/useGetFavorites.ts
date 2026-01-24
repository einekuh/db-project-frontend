import type {  ListingFavorite } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/favorites/me");

const useGetFavorites = () => {
  return useQuery<ListingFavorite[], Error, ListingFavorite[]>({
    queryKey: ["favorites"],
    queryFn: () => apiClient.get(),
  });
};

export default useGetFavorites;
