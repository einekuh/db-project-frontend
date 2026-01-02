import useAuthStore from "@/authStore";
import { Button, HStack } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus, setStatus } = useAuthStore();
  const navigate = useNavigate();

  if (authStatus === "authenticated")
    return (
      <HStack margin={2} width={100}>
        <Button
          size="2xs"
          onClick={() => {
            setStatus("anonymous");
            navigate("/");
          }}
        >
          Log Out
        </Button>
        <Link to="/profile">
          <CgProfile size={25} />
        </Link>
      </HStack>
    );
  return (
    <HStack margin={2} width={100}>
      <Button
        size="2xs"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </Button>
      <Button
        size="2xs"
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
