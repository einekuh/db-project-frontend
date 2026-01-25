import APIClient from "@/services/api-Client";
import useAuthStore from "@/stores/authStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/chats/start");

const useCreateChat = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  return useMutation({
    mutationFn: (listing_id: number) =>
      apiClient.post({ listing_id: listing_id }),
    onSuccess: () => navigate(`/chats/${user?.id}`),
  });
};

export default useCreateChat;
