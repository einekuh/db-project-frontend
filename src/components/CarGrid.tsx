import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import { homepageListings } from "@/entities/Listing";

const CarGrid = () => {
  return (
    <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {homepageListings.map((listing) => (
        <CarCardContainer key={listing.listing_id}>
          <CarCard listing={listing} isUserListingCard={false} />
        </CarCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CarGrid;
