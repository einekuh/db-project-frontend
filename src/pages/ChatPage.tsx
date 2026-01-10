import MessageCard from "@/components/MessageCard";
import { messages } from "@/entities/Message";
import { Box, Button, Input, InputGroup, ScrollArea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";

const myId = "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e";

const ChatPage = () => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);
  const { id } = useParams();

  return (
    <Box>
      {/* Messages */}

      <ScrollArea.Root height="83dvh" width="98%">
        <ScrollArea.Viewport
          css={{
            "--scroll-shadow-size": "4rem",
            maskImage:
              "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            "&[data-at-top]": {
              maskImage:
                "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
            "&[data-at-bottom]": {
              maskImage:
                "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
          }}
        >
          <ScrollArea.Content spaceY="4">
            {messages
              .filter((m) => m.chatId === id)
              .map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  isMine={message.senderId === myId}
                />
              ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>

      {/* Input */}
      <Box marginRight="3.5%">
        <InputGroup>
          <>
            <Input placeholder="Type a message..." size="2xl" margin={3} />
            <Button size="2xl">Send</Button>
          </>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default ChatPage;
