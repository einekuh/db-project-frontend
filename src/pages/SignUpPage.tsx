import SignUpForm from "@/components/SignUpForm";
import { Box } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Box justifyItems="center">
      <Box marginTop="5%">
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUpPage;
