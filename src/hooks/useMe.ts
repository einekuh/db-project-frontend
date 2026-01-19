import type User from "@/entities/User";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/users/me");

const useMe = (retries: number) => {
  return useQuery<User, Error, User>({
    queryKey: ["user"],
    queryFn: apiClient.get,
    retry: retries,
  });
};

export default useMe;
