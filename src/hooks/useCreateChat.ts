import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/chats/start");

const useCreateChat = () => {
  return useMutation({
    mutationFn: (listing_id: number ) => apiClient.post({listing_id: listing_id}),
  });
};

export default useCreateChat;
