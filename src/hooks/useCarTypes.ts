import type { CarType } from "@/entities/CarType";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/car-types");

type UseCarTypesOptions = {
  enabled?: boolean;
};

const useCarTypes = (options: UseCarTypesOptions = {}) =>
  useQuery<CarType[]>({
    queryKey: ["car-types"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: options.enabled ?? true,
  });

export default useCarTypes;
