import { Box, HStack } from "@chakra-ui/react";
import Auth from "./Auth";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import Favorite from "./Favorite";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box marginX={3}>
          <Link to="/">
            <IoCarSport size={30} />
          </Link>
        </Box>
        <SearchInput />
        <Favorite />
        <Auth />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
