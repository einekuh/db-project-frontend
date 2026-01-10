import type { LocationsFetchReponseObject } from "@/entities/LocationResult";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLocationsSuggestions = (search: string) => {
  const trimmed = search.trim();
  return useQuery({
    queryKey: ["suggestions", trimmed],
    queryFn: ({ signal }) =>
      axios
        .get<LocationsFetchReponseObject>("https://photon.komoot.io/api/", {
          params: { q: trimmed, limit: 5, osm_tag: "place:city" },
          signal,
        })
        .then((r) => r.data),
  });
};

/*getResults = (input: string) => {
        const controller = new AbortController();
        const request = axiosInstance.get<LocationsFetchReponseObject>(`${input}&limit=5&osm_tag=place:city`, {
        signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }*/

export default useLocationsSuggestions;
