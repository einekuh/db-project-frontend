export interface Chat {
  chat_id: string;
  title: string;
  participantIds: string[];
  lastMessageAt: string;
  lastMessagePreview: string;
}

export const chats: Chat[] = [
  {
    chat_id: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    title: "Car listing questions",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    ],
    lastMessageAt: "2026-01-03T10:12:44.000Z",
    lastMessagePreview:
      "Yes, still available. I’ll send the VIN in a moment—any other questions?",
  },
  {
    chat_id: "0c8f6e1d-2a3b-4c5d-9e0f-1a2b3c4d5e6f",
    title: "Pickup scheduling",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "6e5d4c3b-2a1f-0e9d-8c7b-6a5f4e3d2c1b",
    ],
    lastMessageAt: "2026-01-02T18:40:03.000Z",
    lastMessagePreview:
      "Tomorrow 15:30 works. Want to meet at the main station parking?",
  },
  {
    chat_id: "7b6a5f4e-3d2c-1b0a-9e8d-7c6b5a4f3e2d",
    title: "Price negotiation",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "3e2d1c0b-9a8f-7e6d-5c4b-3a2f1e0d9c8b",
    ],
    lastMessageAt: "2026-01-01T21:05:12.000Z",
    lastMessagePreview:
      "I can do 10,200€ if you come this weekend. 9,800€ is too low.",
  },
  {
    chat_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    title: "Maintenance history",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "8d7c6b5a-4f3e-2d1c-0b9a-8f7e6d5c4b3a",
    ],
    lastMessageAt: "2025-12-30T09:18:51.000Z",
    lastMessagePreview:
      "Yes, full service history. Oil change was done in October 2025.",
  },
  {
    chat_id: "9e0f1a2b-3c4d-5e6f-8a9b-0c1d2e3f4a5b",
    title: "Document requirements",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
    ],
    lastMessageAt: "2025-12-28T14:02:07.000Z",
    lastMessagePreview:
      "ID, proof of payment, and we’ll fill out the purchase contract + vehicle documents at handover.",
  },
  {
    chat_id: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    title: "Car listing questions",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    ],
    lastMessageAt: "2026-01-03T10:12:44.000Z",
    lastMessagePreview:
      "Yes, still available. I’ll send the VIN in a moment—any other questions?",
  },
  {
    chat_id: "0c8f6e1d-2a3b-4c5d-9e0f-1a2b3c4d5e6f",
    title: "Pickup scheduling",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "6e5d4c3b-2a1f-0e9d-8c7b-6a5f4e3d2c1b",
    ],
    lastMessageAt: "2026-01-02T18:40:03.000Z",
    lastMessagePreview:
      "Tomorrow 15:30 works. Want to meet at the main station parking?",
  },
  {
    chat_id: "7b6a5f4e-3d2c-1b0a-9e8d-7c6b5a4f3e2d",
    title: "Price negotiation",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "3e2d1c0b-9a8f-7e6d-5c4b-3a2f1e0d9c8b",
    ],
    lastMessageAt: "2026-01-01T21:05:12.000Z",
    lastMessagePreview:
      "I can do 10,200€ if you come this weekend. 9,800€ is too low.",
  },
  {
    chat_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    title: "Maintenance history",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "8d7c6b5a-4f3e-2d1c-0b9a-8f7e6d5c4b3a",
    ],
    lastMessageAt: "2025-12-30T09:18:51.000Z",
    lastMessagePreview:
      "Yes, full service history. Oil change was done in October 2025.",
  },
  {
    chat_id: "9e0f1a2b-3c4d-5e6f-8a9b-0c1d2e3f4a5b",
    title: "Document requirements",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
    ],
    lastMessageAt: "2025-12-28T14:02:07.000Z",
    lastMessagePreview:
      "ID, proof of payment, and we’ll fill out the purchase contract + vehicle documents at handover.",
  },
  {
    chat_id: "2f3a1c7e-5a0b-4c2f-9b7a-3d9b7f1a2c10",
    title: "Car listing questions",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    ],
    lastMessageAt: "2026-01-03T10:12:44.000Z",
    lastMessagePreview:
      "Yes, still available. I’ll send the VIN in a moment—any other questions?",
  },
  {
    chat_id: "0c8f6e1d-2a3b-4c5d-9e0f-1a2b3c4d5e6f",
    title: "Pickup scheduling",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "6e5d4c3b-2a1f-0e9d-8c7b-6a5f4e3d2c1b",
    ],
    lastMessageAt: "2026-01-02T18:40:03.000Z",
    lastMessagePreview:
      "Tomorrow 15:30 works. Want to meet at the main station parking?",
  },
  {
    chat_id: "7b6a5f4e-3d2c-1b0a-9e8d-7c6b5a4f3e2d",
    title: "Price negotiation",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "3e2d1c0b-9a8f-7e6d-5c4b-3a2f1e0d9c8b",
    ],
    lastMessageAt: "2026-01-01T21:05:12.000Z",
    lastMessagePreview:
      "I can do 10,200€ if you come this weekend. 9,800€ is too low.",
  },
  {
    chat_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    title: "Maintenance history",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "8d7c6b5a-4f3e-2d1c-0b9a-8f7e6d5c4b3a",
    ],
    lastMessageAt: "2025-12-30T09:18:51.000Z",
    lastMessagePreview:
      "Yes, full service history. Oil change was done in October 2025.",
  },
  {
    chat_id: "9e0f1a2b-3c4d-5e6f-8a9b-0c1d2e3f4a5b",
    title: "Document requirements",
    participantIds: [
      "9a1c2d3e-4f5a-6b7c-8d9e-0a1b2c3d4e5f",
      "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
    ],
    lastMessageAt: "2025-12-28T14:02:07.000Z",
    lastMessagePreview:
      "ID, proof of payment, and we’ll fill out the purchase contract + vehicle documents at handover.",
  },
];
