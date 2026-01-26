import ChatCard from "@/components/ChatCard";
import ChatCardSkeleton from "@/components/ChatCardSkeleton";
import useChats from "@/hooks/useChats";
import {
  Box,
  GridItem,
  ScrollArea,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { useOutlet } from "react-router-dom";

const ChatsPage = () => {
  const { data, error, isLoading } = useChats();
  const outlet = useOutlet();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const hasChats = (data?.chats?.length ?? 0) > 0;
  const noChats = !isLoading && !hasChats;

  if (error) return error.message;

  if (noChats) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Heading size="5xl" textAlign="center">
          You don't have any chats yet!
        </Heading>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 3, md: 5 }} gap={{ base: "24px", md: "40px" }}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box h="100vh" marginLeft={3} pr={2}>
          <ScrollArea.Root h="100%" variant="always">
            <ScrollArea.Viewport h="100%">
              <ScrollArea.Content paddingEnd="3" textStyle="sm">
                {isLoading
                  ? skeletons.map((s) => <ChatCardSkeleton key={s} />)
                  : data?.chats.map((chat) => (
                      <ChatCard key={chat.chat_id} chat={chat} />
                    ))}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 4 }}>
        {outlet ?? (
          <Box
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="2xl" textAlign="center">
              Start to Chat!
            </Heading>
          </Box>
        )}
      </GridItem>
    </SimpleGrid>
  );
};

export default ChatsPage;
