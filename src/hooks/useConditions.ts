import type { Condition } from "@/entities/Condition";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/conditions");

type UseConditionsOptions = {
  enabled?: boolean;
};

const useCondtions = (options: UseConditionsOptions = {}) =>
  useQuery<Condition[]>({
    queryKey: ["condtions"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: options.enabled ?? true,
  });

export default useCondtions;
