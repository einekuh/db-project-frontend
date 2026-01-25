import { SimpleGrid } from "@chakra-ui/react";

import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import type { ListingFavorite } from "@/entities/Listing";

interface Props {
  favorites: ListingFavorite[];
}

const FavoriteGrid = ({ favorites }: Props) => {
  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {favorites?.map((item) => (
          <CarCardContainer key={item.listing.listing_id}>
            <CarCard listing={item.listing} isUserListingCard={false} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FavoriteGrid;
