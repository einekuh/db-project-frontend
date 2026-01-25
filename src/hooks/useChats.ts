import type { ChatResponse } from "@/entities/Chat";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/chats/me");

const useChats = () =>
  useQuery<ChatResponse, Error,ChatResponse>({
    queryKey: ["chats"],
    queryFn: apiClient.get,
  });

export default useChats;
