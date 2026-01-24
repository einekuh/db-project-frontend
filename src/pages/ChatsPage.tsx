import ChatCard from "@/components/ChatCard";
import ChatCardSkeleton from "@/components/ChatCardSkeleton";
import useChats from "@/hooks/useChats";
import { Box, GridItem, ScrollArea, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const ChatsPage = () => {
  const { data, error, isLoading } = useChats();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return error.message;

  return (
    <SimpleGrid columns={{ base: 3, md: 5 }} gap={{ base: "24px", md: "40px" }}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box h="100vh" marginLeft={3}>
          <ScrollArea.Root h="100%" variant="always">
            <ScrollArea.Viewport h="100%">
              <ScrollArea.Content paddingEnd="3" textStyle="sm">
                {isLoading
                  ? skeletons.map((s) => <ChatCardSkeleton key={s} />)
                  : data?.map((chat) => (
                      <ChatCard key={chat.chat_id} chat={chat} />
                    ))}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 4 }}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default ChatsPage;
