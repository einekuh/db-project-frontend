import { SimpleGrid } from "@chakra-ui/react";

import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import { listingsFavorites } from "@/entities/Listing";

const FavoriteGrid = () => {
  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {listingsFavorites.map((listing) => (
          <CarCardContainer key={listing.listing_id}>
            <CarCard listing={listing} isUserListingCard={false} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FavoriteGrid;
