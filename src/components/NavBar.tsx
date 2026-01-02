import { Box, HStack } from "@chakra-ui/react";
import Auth from "./Auth";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { CiSquarePlus } from "react-icons/ci";
import SearchInput from "./SearchInput";
import { IoMdHeart } from "react-icons/io";

const NavBar = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box marginX={4}>
          <Link to="/">
            <IoCarSport size={30} />
          </Link>
        </Box>
        <SearchInput />
        <Box marginX={1}>
          <Link to="/favorites">
            <IoMdHeart />
          </Link>
        </Box>
        <Box marginX={1}>
          <Link to="/insert">
            <CiSquarePlus />
          </Link>
        </Box>

        <Auth />

        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
