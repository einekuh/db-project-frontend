import { Box, Card, SkeletonText } from "@chakra-ui/react";

const ChatCardSkeleton = () => {
  return (
    <Box
      margin={2}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      <Card.Root width="90%" overflow="hidden" height="100px">
        <Card.Body display="flex" flexDirection="column" gap={1} py={3}>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ChatCardSkeleton;
