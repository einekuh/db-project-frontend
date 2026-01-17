import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";
import type { Location } from "@/entities/Location";

const apiClient = new APIClient("/locations");

type UseLocationsOptions = {
  enabled?: boolean;
};

const useLocations = (options: UseLocationsOptions = {}) =>
  useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: options.enabled ?? true,
  });

export default useLocations;
