import useAuthStore from "@/stores/authStore";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// FastAPI Users exposes the auth routes under /auth/{backend_name}/...
// Our backend uses the JWT backend with name "jwt", so logout lives at
// POST /auth/jwt/logout.
const apiClient = new APIClient("/logout");

const useLogout = () => {
  const setStatus = useAuthStore((s) => s.setStatus);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => apiClient.post(),
    onSuccess: () => {
      // Approach 1: Invalidating the cache
      //queryClient.invalidateQueries({
      //queryKey: ["todos"],
      //});
      //Approach 2: Updating the data in the cache
      setStatus("anonymous");
      navigate("/");
    },

    onError: () => {},
  });
};

export default useLogout;
