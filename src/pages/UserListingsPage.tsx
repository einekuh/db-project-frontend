import useAuthStore from "@/authStore";
import UserListingsGrid from "@/components/UserListingsGrid";
import { Box, Heading } from "@chakra-ui/react";

const UserListingsPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  if (authStatus !== "authenticated")
    return (
      <Box marginX="37%" marginY="5%">
        <Heading fontSize="300%">Log in to insert a car!</Heading>
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
