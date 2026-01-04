import { Box, HStack } from "@chakra-ui/react";
import Auth from "./Auth";
import { IoCarSportOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { CiSquarePlus } from "react-icons/ci";
import SearchInput from "./SearchInput";
import { IoMdHeartEmpty } from "react-icons/io";
import useAuthStore from "@/authStore";
import { BsChatSquareDots } from "react-icons/bs";
import { LuTvMinimal } from "react-icons/lu";

const NavBar = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  return (
    <Box background={{ _dark: "black", _light: "white" }}>
      <HStack justifyContent="space-between">
        <Box marginLeft={8}>
          <Link to="/">
            <IoCarSportOutline size={60} />
          </Link>
        </Box>
        <SearchInput />
        {authStatus === "authenticated" && (
          <Box
            marginX={1}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform .15s ease-in",
              cursor: "pointer",
            }}
          >
            <Link to="/chats">
              <BsChatSquareDots size={30} />
            </Link>
          </Box>
        )}
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
        >
          <Link to="/favorites">
            <IoMdHeartEmpty size={30} />
          </Link>
        </Box>
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
        >
          <Link to="/insert">
            <CiSquarePlus size={30} />
          </Link>
        </Box>
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
        >
          <Link to="/listings">
            <LuTvMinimal size={30} />
          </Link>
        </Box>

        <Auth />

        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
