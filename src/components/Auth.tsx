import useAuthStore from "@/authStore";
import { Button, HStack } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus, setStatus } = useAuthStore();
  const navigate = useNavigate();

  if (authStatus === "authenticated")
    return (
      <HStack margin={2}>
        <Button size="2xs" onClick={() => setStatus("anonymous")}>
          Logout
        </Button>

        <CgProfile size={25} />
      </HStack>
    );
  return (
    <HStack margin={1}>
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
        Login
      </Button>
    </HStack>
  );
};

export default Auth;
