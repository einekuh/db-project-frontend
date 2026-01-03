export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
};

export const messages: Message[] = [
  {
    id: "b7e6a0c1-1b9c-4d32-9a1f-7f1d2c3a4b5c",
    chatId: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    senderId: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    text: "Is the car still available?",
    createdAt: "2026-01-03T09:58:12.000Z",
  },
  {
    id: "c8f7b1d2-2cab-4a21-8b0e-6e2c1a0f9d8c",
    chatId: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    senderId: "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
    text: "Yes, still available.",
    createdAt: "2026-01-03T10:00:05.000Z",
  },
  {
    id: "d9a8c2e3-3dba-4b10-9c1d-5d3b2a1c0e9f",
    chatId: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    senderId: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    text: "Nice. Can you send the VIN and service history?",
    createdAt: "2026-01-03T10:02:41.000Z",
  },
  {
    id: "e0b9d3f4-4ecb-4c01-8d2e-4c2a1b0d9e8f",
    chatId: "0c8f6e1d-2a3b-4c5d-9e0f-1a2b3c4d5e6f",
    senderId: "6e5d4c3b-2a1f-0e9d-8c7b-6a5f4e3d2c1b",
    text: "Can I see it tomorrow afternoon?",
    createdAt: "2026-01-02T18:25:19.000Z",
  },
  {
    id: "f1c0e4a5-5fda-4d12-9e3f-3b1a0c9d8e7f",
    chatId: "0c8f6e1d-2a3b-4c5d-9e0f-1a2b3c4d5e6f",
    senderId: "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
    text: "Tomorrow 15:30 works. Meet at the main station parking?",
    createdAt: "2026-01-02T18:40:03.000Z",
  },
  {
    id: "a2d1f5b6-6aeb-4e23-8f4a-2a0b9c8d7e6f",
    chatId: "7b6a5f4e-3d2c-1b0a-9e8d-7c6b5a4f3e2d",
    senderId: "3e2d1c0b-9a8f-7e6d-5c4b-3a2f1e0d9c8b",
    text: "Would you take 9,800€ if I pick it up this weekend?",
    createdAt: "2026-01-01T20:54:37.000Z",
  },
  {
    id: "b3e2a6c7-7bfc-4f34-9a5b-1f9e8d7c6b5a",
    chatId: "7b6a5f4e-3d2c-1b0a-9e8d-7c6b5a4f3e2d",
    senderId: "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
    text: "I can do 10,200€ if you come this weekend.",
    createdAt: "2026-01-01T21:05:12.000Z",
  },
  {
    id: "c4f3b7d8-8c0d-4a45-8b6c-0e8d7c6b5a4f",
    chatId: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    senderId: "8d7c6b5a-4f3e-2d1c-0b9a-8f7e6d5c4b3a",
    text: "Do you have service records and when was the last oil change?",
    createdAt: "2025-12-30T09:05:33.000Z",
  },
  {
    id: "d5a4c8e9-9d1e-4b56-9c7d-0d7c6b5a4f3e",
    chatId: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    senderId: "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
    text: "Yes, full service history. Oil change was done in October 2025.",
    createdAt: "2025-12-30T09:18:51.000Z",
  },
  {
    id: "e6b5d9f0-0e2f-4c67-8d8e-0c6b5a4f3e2d",
    chatId: "9e0f1a2b-3c4d-5e6f-8a9b-0c1d2e3f4a5b",
    senderId: "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
    text: "What documents do I need for the purchase?",
    createdAt: "2025-12-28T13:50:11.000Z",
  },
  {
    id: "f7c6e0a1-1f30-4d78-9e9f-0b5a4f3e2d1c",
    chatId: "9e0f1a2b-3c4d-5e6f-8a9b-0c1d2e3f4a5b",
    senderId: "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
    text: "ID + payment proof. We’ll fill out the purchase contract at handover.",
    createdAt: "2025-12-28T14:02:07.000Z",
  },
];
