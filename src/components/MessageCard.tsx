import { Box } from "@chakra-ui/react";
import type { Message } from "@/entities/Message";

type Props = {
  message: Message;
  isMine: boolean;
};

const MessageCard = ({ message, isMine }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent={isMine ? "flex-end" : "flex-start"}
      my={2}
    >
      <Box
        maxW="70%"
        px={3}
        py={2}
        borderRadius="lg"
        bg={isMine ? "blue.500" : "gray.700"}
        color="white"
        marginX={5}
        marginY={5}
      >
        {message.text}
      </Box>
    </Box>
  );
};

export default MessageCard;
