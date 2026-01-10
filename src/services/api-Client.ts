import type User from "@/entities/User";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:8000/",
  params: {},
});

class APIClient {
  signup = (user: User) => {
    return axiosInstance.post("/register", user).then((res) => res.data);
  };

  login = (user: User) => {
    return axiosInstance.post("/register", user).then((res) => res.data);
  };

  me = (user_id: string) => {
    return axiosInstance.get(`/users/${user_id}`).then((res) => res.data);
  };
}

export default APIClient;
