import type { Message } from "@/entities/Message";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const useMessages = (chat_id: string) => {
  const apiClient = new APIClient(`/chats/${chat_id}/messages`);
  return useQuery<Message[], Error, Message[]>({
    queryKey: ["messages", chat_id],
    queryFn: apiClient.get,
  });
};

export default useMessages;
