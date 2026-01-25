export interface Chat {
  chat_id: number;
  listing_id: number
  chat_title: string
  chat_participant_1: ChatParticipant
  chat_participant_2: ChatParticipant
  creates_at: string,
  last_message_at: string;
  last_message_preview: string;
}

export interface ChatResponse{
  user_id: number,
  chats: Chat[]
}

interface ChatParticipant {
  name: string,
  user_id: number,
  role: string,
}



