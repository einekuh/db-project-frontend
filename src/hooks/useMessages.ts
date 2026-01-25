import type { MessageResponse } from "@/entities/Message";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const useMessages = (chat_id: string) => {
  const apiClient = new APIClient(`/chats/${chat_id}/messages`);
  return useQuery<MessageResponse, Error, MessageResponse>({
    queryKey: ["messages", chat_id],
    queryFn: apiClient.get,
  });
};

export default useMessages;
