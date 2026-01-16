import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  params: {},
});

class APIClient<T> {
  endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (entity: T) => {
    return axiosInstance.post(this.endpoint, entity).then((res) => res.data);
  };
}

export default APIClient;
