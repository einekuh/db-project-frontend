import useAuthStore from "@/stores/authStore";
import FavoriteGrid from "@/components/FavoriteGrid";
import { Box, Heading } from "@chakra-ui/react";
import useGetFavorites from "@/hooks/useGetFavorites";

const FavoritesPage = () => {
  const authStatus = useAuthStore((s) => s.authStatus);
  const { data } = useGetFavorites();
  if (authStatus !== "authenticated")
    return (
      <Box textAlign="center" marginTop={100}>
        <Heading fontSize="300%">Log in to see your favorites!</Heading>
      </Box>
    );
  if (data)
    return (
      <>
        <Box marginX="15%">
          {data.length > 0 ? (
            <>
              <Box marginX="2%">
                <Heading>Here are your Favorites!</Heading>
              </Box>
              <FavoriteGrid favorites={data} />
            </>
          ) : (
            <Heading>You don't have any Favorites yet!</Heading>
          )}
        </Box>
      </>
    );
};

export default FavoritesPage;
