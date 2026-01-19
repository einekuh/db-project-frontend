import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";
import useListingQueryStore from "@/stores/listingQueryStore";
import useListings from "@/hooks/useListings";
import CarCardSkeleton from "./CarCardSkeleton";

const CarGrid = () => {
  const listingQuery = useListingQueryStore((s) => s.listingQuery);

  const { data, error, isLoading } = useListings(listingQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return error.message;

  return (
    <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {isLoading
        ? skeletons.map((s) => (
            <CarCardContainer>
              <CarCardSkeleton key={s} />
            </CarCardContainer>
          ))
        : data?.map((listing) => (
            <CarCardContainer key={listing.listing_id}>
              <CarCard listing={listing} isUserListingCard={false} />
            </CarCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default CarGrid;
