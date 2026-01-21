import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/ listings/me");

const useGetUserListings = () => {
  return useQuery({
    queryKey: ["listings"],
    queryFn: apiClient.get,
  });
};

export default useGetUserListings;
