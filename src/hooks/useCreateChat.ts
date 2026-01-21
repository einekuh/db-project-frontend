import type { ChatCreate } from "@/entities/Chat";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/chats");

const useCreateChat = () => {
  return useMutation({
    mutationFn: (chat: ChatCreate) => apiClient.post(chat),
  });
};

export default useCreateChat;
