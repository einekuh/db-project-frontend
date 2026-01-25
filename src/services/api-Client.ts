import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  params: {},
  // Serialize array params without brackets so FastAPI list query params work:
  // brand_ids=1&brand_ids=2 instead of brand_ids[]=1&brand_ids[]=2
  paramsSerializer: {
    indexes: null,
  },
});

class APIClient<T = unknown> {
  endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data?: T, params?: AxiosRequestConfig) => {
    return axiosInstance
      .post(this.endpoint, data, params)
      .then((res) => res.data);
  };

  postPath = (entity?: T) => {
    return axiosInstance
      .post(this.endpoint + "/" + entity)
      .then((res) => res.data);
  };

  get = (params?: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, params).then((res) => res.data);
  };
  update = (payload?: T, id?: number) => {
    if (id) return axiosInstance.patch(this.endpoint + "/" + id, payload);
    return axiosInstance.patch(this.endpoint, payload);
  };

  delete = () => {
    return axiosInstance.delete(this.endpoint, { withCredentials: true });
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
