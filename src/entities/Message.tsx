export type Message = {
  message_id?: number;
  chat_id?: number;
  sender_id: number;
  text: string;
  created_at?: string;
};
export type MessageCreate = {
  chat_id: number;
  text: string;
};
