import useAuthStore from "@/authStore";
import useLogout from "@/hooks/useLogout";
import { Box, Button, HStack } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus } = useAuthStore();
  const logoutUser = useLogout();
  const navigate = useNavigate();
  if (authStatus === "authenticated")
    return (
      <HStack margin={2} width={100}>
        <Button
          variant="outline"
          marginRight={1}
          size="xl"
          onClick={() => {
            logoutUser.mutate();
          }}
        >
          Log Out
        </Button>
        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
        >
          <Link to="/profile">
            <CgProfile size={30} />
          </Link>
        </Box>
      </HStack>
    );
  return (
    <HStack margin={2} width={100}>
      <Button
        variant="outline"
        size="xl"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </Button>
      <Button
        variant="outline"
        size="xl"
        onClick={() => {
          navigate("/login");
        }}
      >
        Log In
      </Button>
    </HStack>
  );
};

export default Auth;
