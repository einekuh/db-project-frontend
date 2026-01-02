import useAuthStore from "@/authStore";
import InsertForm from "@/components/InsertForm";
import { Box, Heading } from "@chakra-ui/react";

const InsertPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  if (authStatus !== "authenticated")
    return (
      <Box marginX="40%" marginY="5%">
        <Heading>Log in to insert a Car!</Heading>
      </Box>
    );
  return (
    <>
      <Box justifyItems="center">
        <Box marginTop="5%">
          <InsertForm />
        </Box>
      </Box>
    </>
  );
};

export default InsertPage;
