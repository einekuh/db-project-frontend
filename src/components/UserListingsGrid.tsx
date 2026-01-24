import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";

import CarCard from "./CarCard";
import useUserListings from "@/hooks/useUserListings";

const UserListingsGrid = () => {
  const { data } = useUserListings();

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
