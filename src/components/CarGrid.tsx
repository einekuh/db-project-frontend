import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import useListingQueryStore from "@/stores/listingQueryStore";
import useListings from "@/hooks/useListings";

const CarGrid = () => {
  const listingQuery = useListingQueryStore((s) => s.listingQuery);

  const { data } = useListings(listingQuery);

  return (
    <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {data?.map((listing) => (
        <CarCardContainer key={listing.listing_id}>
          <CarCard listing={listing} isUserListingCard={false} />
        </CarCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CarGrid;
