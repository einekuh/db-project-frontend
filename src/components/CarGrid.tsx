import { SimpleGrid } from "@chakra-ui/react";
import CarCardContainer from "./CarCardContainer";
import CarCardSkeleton from "./CarCardSkeleton";

const CarGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <SimpleGrid padding={5} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>
      {skeletons.map((skeleton) => (
        <CarCardContainer key={skeleton}>
          <CarCardSkeleton />
        </CarCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CarGrid;
