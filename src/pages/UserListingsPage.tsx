import useAuthStore from "@/stores/authStore";
import UserListingsGrid from "@/components/UserListingsGrid";
import { Box, Heading } from "@chakra-ui/react";
import useUserListings from "@/hooks/useUserListings";

const UserListingsPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  const { data } = useUserListings();
  if (authStatus !== "authenticated")
    return (
      <Box textAlign="center" marginTop={100}>
        <Heading fontSize="300%">Log in to see your cars!</Heading>
      </Box>
    );
  if (data)
    return (
      <Box marginX="15%">
        {data.listings.length > 0 ? (
          <Box marginX="2%">
            <Heading>Here are your Listings!</Heading>
            <UserListingsGrid data={data} />
          </Box>
        ) : (
          <Box
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="5xl" textAlign="center">
              You don't have any listing yet!
            </Heading>
          </Box>
        )}
      </Box>
    );
};

export default UserListingsPage;
