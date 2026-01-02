import useAuthStore from "@/authStore";
import { Box, Button, HStack } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus, setStatus } = useAuthStore();
  const navigate = useNavigate();

  if (authStatus === "authenticated")
    return (
      <HStack margin={2} width={100}>
        <Button
          variant="outline"
          marginRight={1}
          size="xs"
          onClick={() => {
            setStatus("anonymous");
            navigate("/");
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
            <CgProfile size={25} />
          </Link>
        </Box>
      </HStack>
    );
  return (
    <HStack margin={2} width={100}>
      <Button
        variant="outline"
        size="xs"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </Button>
      <Button
        variant="outline"
        size="xs"
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
