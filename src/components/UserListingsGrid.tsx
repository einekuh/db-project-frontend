import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";

import CarCard from "./CarCard";
import type { UserListings } from "@/entities/Listing";

interface Props {
  data: UserListings;
}

const UserListingsGrid = ({ data }: Props) => {
  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {data?.listings.map((listing) => (
          <CarCardContainer key={listing.listing_id}>
            <CarCard listing={listing} isUserListingCard={true} />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default UserListingsGrid;
