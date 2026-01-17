import useAuthStore from "@/stores/authStore";
import NavBar from "@/components/NavBar";
import useMe from "@/hooks/useMe";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useStaticData from "@/hooks/useStaticData";

const Layout = () => {
  const setStatus = useAuthStore((s) => s.setStatus);

  useStaticData();

  const { isSuccess: isAuthenticated } = useMe(1);

  if (isAuthenticated) setStatus("authenticated");

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
