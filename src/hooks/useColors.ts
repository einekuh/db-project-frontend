import type { Color } from "@/entities/Color";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/colors");

type UseColorsOptions = {
  enabled?: boolean;
};

const useColors = (options: UseColorsOptions = {}) =>
  useQuery<Color[]>({
    queryKey: ["colors"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: options.enabled ?? true,
  });

export default useColors;
