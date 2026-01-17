import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  params: {},
});

class APIClient<T = unknown> {
  endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (entity?: T) => {
    return axiosInstance.post(this.endpoint, entity).then((res) => res.data);
  };
  login = (data: Record<string, string>) => {
    return axiosInstance
      .post(this.endpoint, new URLSearchParams(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => res.data);
  };
}

export default APIClient;
