import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
        <NavBar />
      </Box>

      <Box pt="64px">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
