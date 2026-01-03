import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const ChatsPage = () => {
  return (
    <SimpleGrid columns={{ base: 3, md: 5 }} gap={{ base: "24px", md: "40px" }}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box height="20">Column 1</Box>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 4 }}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default ChatsPage;
