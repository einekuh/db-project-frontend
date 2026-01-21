import useAuthStore from "@/stores/authStore";
import UserListingsGrid from "@/components/UserListingsGrid";
import { Box, Heading } from "@chakra-ui/react";

const UserListingsPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);

  if (authStatus !== "authenticated")
    return (
      <Box textAlign="center" marginTop={100}>
        <Heading fontSize="300%">Log in to see your cars!</Heading>
      </Box>
    );
  return (
    <Box marginX="15%">
      <Box marginX="2%">
        <Heading>Here are your Listings!</Heading>
        <UserListingsGrid />
      </Box>
    </Box>
  );
};

export default UserListingsPage;
