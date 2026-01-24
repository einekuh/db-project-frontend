import { SimpleGrid } from "@chakra-ui/react";

import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import useGetFavorites from "@/hooks/useGetFavorites";

const FavoriteGrid = () => {
  const { data } = useGetFavorites();

  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {data?.map((item) => (
          <CarCardContainer key={item.listing.listing_id}>
            <CarCard listing={item.listing} isUserListingCard={false} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FavoriteGrid;
