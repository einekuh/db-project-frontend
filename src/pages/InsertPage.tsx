import useAuthStore from "@/authStore";
import InsertForm from "@/components/InsertForm";
import { Box, Heading } from "@chakra-ui/react";

const InsertPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  if (authStatus !== "authenticated")
    return (
      <Box textAlign="center" marginTop={100}>
        <Heading fontSize="300%">Log in to insert a car!</Heading>
      </Box>
    );
  return (
    <>
      <Box justifyItems="center">
        <Box marginTop="5%" marginBottom="5%">
          <InsertForm />
        </Box>
      </Box>
    </>
  );
};

export default InsertPage;
