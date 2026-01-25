import { Box, Card, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import type { Chat } from "@/entities/Chat";
import useAuthStore from "@/stores/authStore";

interface Props {
  chat: Chat;
}

const ChatCard = ({ chat }: Props) => {
  const user = useAuthStore((s) => s.user);

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
      <Card.Root width="90%" overflow="hidden" height="100px">
        <Card.Body display="flex" flexDirection="column" gap={1} py={3}>
          <Heading size="sm" lineClamp={1}>
            {chat.chat_title}
          </Heading>

          <Box fontSize="sm" color="fg.muted" lineClamp={2}>
            Chat with:{" "}
            {chat.chat_participant_1.user_id === user?.id
              ? chat.chat_participant_2.name
              : chat.chat_participant_1.name}
          </Box>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ChatCard;
