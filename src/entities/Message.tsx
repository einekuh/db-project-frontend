export type Message = {
  message_id?: number;
  chat_id?: number;
  sender_id: number;
  text: string;
  created_at?: string;
};
export interface MessageCreate {
  chat_id: number;
  user_id: number;
  content: string;
  message_type: "user" | "system";
}
