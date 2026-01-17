import type { Brand } from "@/entities/Brand";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/brands");

type UseBrandsOptions = {
  enabled?: boolean;
};

const useBrands = (options: UseBrandsOptions = {}) =>
  useQuery<Brand[], Error, Brand[]>({
    queryKey: ["brands"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: options.enabled ?? true,
  });

export default useBrands;
