import type { MessageCreate } from "@/entities/Message";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/messages");

const useSendMessage = () =>
  useMutation({
    mutationFn: (message: MessageCreate) => apiClient.post(message),
  });

export default useSendMessage;
