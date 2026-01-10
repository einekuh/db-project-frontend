import type User from "@/entities/User";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  params: {},
});

class APIClient {
  endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (user: User) => {
    return axiosInstance.post(this.endpoint, user).then((res) => res.data);
  };
}

export default APIClient;
