import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import ListingCard from "./ListingCard";
import { homepageListings } from "@/entities/Listing";

const CarGrid = () => {
  return (
    <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {homepageListings.map((listing) => (
        <CarCardContainer key={listing.listing_id}>
          <ListingCard listing={listing} />
        </CarCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CarGrid;
