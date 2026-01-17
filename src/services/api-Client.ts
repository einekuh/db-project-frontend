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
  get = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };
  update = (payload?: T, id?: number) => {
    if (id) return axiosInstance.patch(this.endpoint + "/" + id, payload);
    return axiosInstance.patch(this.endpoint, payload);
  };

  delete = (id?: number) => {
    return axiosInstance.patch(this.endpoint + "/" + id);
  };

  login = (data: Record<string, string>) => {
    return axiosInstance
      .post(this.endpoint, new URLSearchParams(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: true,
      })
      .then((res) => res.data);
  };
}

export default APIClient;
