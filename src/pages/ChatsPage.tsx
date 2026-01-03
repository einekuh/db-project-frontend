import ChatCard from "@/components/ChatCard";
import { chats } from "@/entities/Chat";
import { Box, GridItem, ScrollArea, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const ChatsPage = () => {
  return (
    <SimpleGrid columns={{ base: 3, md: 5 }} gap={{ base: "24px", md: "40px" }}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box h="100vh" marginLeft={3}>
          <ScrollArea.Root h="100%" variant="always">
            <ScrollArea.Viewport h="100%">
              <ScrollArea.Content paddingEnd="3" textStyle="sm">
                {chats.map((chat) => (
                  <ChatCard key={chat.id} chat={chat} />
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
