import MessageCard from "@/components/MessageCard";
import { messages } from "@/entities/Message";
import { Box, Button, Input, InputGroup, ScrollArea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const myId = "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e";

const ChatPage = () => {
  const { id } = useParams();

  return (
    <Box h="100vh" marginLeft={3} display="flex" flexDirection="column">
      {/* Messages */}
      <Box flex="1" minH={0}>
        <ScrollArea.Root h="100%" variant="always">
          <ScrollArea.Viewport h="100%">
            <ScrollArea.Content paddingEnd="3" textStyle="sm">
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
          <ScrollArea.Scrollbar />
        </ScrollArea.Root>
      </Box>

      {/* Input */}
      <Box py={3} pr={3}>
        <InputGroup>
          <>
            <Input placeholder="Type a message..." />
            <Button>Send</Button>
          </>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default ChatPage;
