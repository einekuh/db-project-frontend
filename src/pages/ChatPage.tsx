import MessageCard from "@/components/MessageCard";
import {
  Box,
  Button,
  Input,
  InputGroup,
  ScrollArea,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import useMessages from "@/hooks/useMessages";
import useMe from "@/hooks/useMe";
import useSendMessage from "@/hooks/useSendMessage";
import type { Message } from "@/entities/Message";

const ChatPage = () => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);
  const { id } = useParams();

  const chatId = parseInt(id!);

  const sendMessage = useSendMessage();
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, error, isLoading } = useMessages(id!);
  const [optimisticMessages, setOptimisticMessages] = useState<Message[]>(
    data || [],
  );
  const { data: user, error: authError } = useMe(2);
  const user_id = user?.id;

  if (authError) return authError.message;

  if (error) return error.message;

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
            {isLoading ? (
              <Box justifySelf="center" marginY="30%">
                <Spinner />
              </Box>
            ) : (
              optimisticMessages
                ?.filter((m) => m.chat_id === chatId)
                .map((message) => (
                  <MessageCard
                    key={message.message_id}
                    message={message}
                    isMine={message.sender_id === parseInt(user_id!)}
                  />
                ))
            )}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>

      {/* Input */}
      <Box marginRight="3.5%">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current && inputRef.current.value) {
              setOptimisticMessages([
                ...optimisticMessages,
                {
                  sender_id: parseInt(user_id!),
                  text: inputRef.current.value,
                },
              ]);
              sendMessage.mutate({
                chat_id: chatId,
                text: inputRef.current.value,
              });
              inputRef.current.value = "";
            }
          }}
        >
          <InputGroup>
            <>
              <Input
                ref={inputRef}
                placeholder="Type a message..."
                size="2xl"
                margin={3}
                type="text"
              />
              <Button size="2xl" type="submit">
                Send
              </Button>
            </>
          </InputGroup>
        </form>
      </Box>
    </Box>
  );
};

export default ChatPage;
