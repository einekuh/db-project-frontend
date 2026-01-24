import type { UserListings } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/listings/me");

const useUserListings = () => {
  return useQuery<UserListings, Error, UserListings>({
    queryKey: ["listings"],
    queryFn: apiClient.get,
  });
};

export default useUserListings;
