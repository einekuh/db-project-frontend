import { Box, Card, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import type { Chat } from "@/entities/Chat";

interface Props {
  chat: Chat;
}

const ChatCard = ({ chat }: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      margin={2}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(`${chat.chat_id}`);
      }}
    >
      <Card.Root width="100%" overflow="hidden" height="75px">
        <Card.Body display="flex" flexDirection="column" gap={1} py={3}>
          <Heading size="sm" lineClamp={1}>
            {chat.chat_title}
          </Heading>

          <Box fontSize="sm" color="fg.muted" lineClamp={2}>
            {chat.last_message_preview}
          </Box>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ChatCard;
