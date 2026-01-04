import useAuthStore from "@/authStore";
import FavoriteGrid from "@/components/FavoriteGrid";
import { Box, Heading } from "@chakra-ui/react";

const FavoritesPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  if (authStatus !== "authenticated")
    return (
      <Box marginX="34%" marginY="5%">
        <Heading fontSize="300%">Log in to see your favorites!</Heading>
      </Box>
    );
  return (
    <>
      <Box marginX="15%">
        <Box marginX="2%">
          <Heading>Here are your Favorites!</Heading>
        </Box>

        <FavoriteGrid />
      </Box>
    </>
  );
};

export default FavoritesPage;
