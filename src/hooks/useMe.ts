import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/users/me");

const useMe = (retries: number) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: apiClient.get,
    retry: retries,
  });
};

export default useMe;
