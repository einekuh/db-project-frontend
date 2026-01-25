export type Message = {
  message_id?: number;
  chat_id?: number;
  user_id: number;
  text: string;
  sent_at?: string;
};
export interface MessageCreate {
  chat_id: number;
  user_id: number;
  content: string;
  message_type: "user" | "system";
}

export interface MessageResponse {
  chat_id: number;
  messages: Message[];
}
