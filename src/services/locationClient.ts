import type { LocationsFetchReponseObject } from "@/entities/LocationResult";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://photon.komoot.io/api/?q=",
  params: {},
});


class LocationClient {
    getResults = (input: string) => {
        const controller = new AbortController();
        const request = axiosInstance.get<LocationsFetchReponseObject>(`${input}&limit=5&osm_tag=place:city`, {
        signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
}

export default LocationClient;