import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import UserListingCard from "./UserListingCard";
import { listings } from "@/entities/Listing";

const UserListingsGrid = () => {
  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {listings.map((listing) => (
          <CarCardContainer key={listing.listing_id}>
            <UserListingCard listing={listing} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default UserListingsGrid;
