import { Box, HStack } from "@chakra-ui/react";
import Auth from "./Auth";
import { IoCarSportOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { CiSquarePlus } from "react-icons/ci";
import SearchInput from "./SearchInput";
import { IoMdHeartEmpty } from "react-icons/io";

const NavBar = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box marginLeft={6}>
          <Link to="/">
            <IoCarSportOutline size={30} />
          </Link>
        </Box>
        <SearchInput />
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
        >
          <Link to="/favorites">
            <IoMdHeartEmpty size={25} />
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
            <CiSquarePlus size={25} />
          </Link>
        </Box>

        <Auth />

        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
