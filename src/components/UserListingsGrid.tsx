import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";

import { listings } from "@/entities/Listing";
import CarCard from "./CarCard";

const UserListingsGrid = () => {
  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {listings.map((listing) => (
          <CarCardContainer key={listing.listing_id}>
            <CarCard listing={listing} isUserListingCard={true} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default UserListingsGrid;
