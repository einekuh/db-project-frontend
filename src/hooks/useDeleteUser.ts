import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

// Deletes the currently authenticated user via DELETE /users/self.
// Backend uses FastAPI Users' `active_user` dependency, so only the
// logged-in user can delete themselves; admins still use DELETE /users/{id}.
const apiClient = new APIClient("/users/self");

const useDeleteUser = () => {
  return useMutation({
    mutationFn: () => apiClient.delete(),
  });
};

export default useDeleteUser;
