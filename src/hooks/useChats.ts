import type { Chat } from "@/entities/Chat";
import APIClient from "@/services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/chats/me");

const useChats = () =>
  useQuery<Chat[], Error, Chat[]>({
    queryKey: ["chats"],
    queryFn: apiClient.get,
  });

export default useChats;
