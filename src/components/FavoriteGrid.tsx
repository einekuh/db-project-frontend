import { SimpleGrid } from "@chakra-ui/react";

import CarCardContainer from "./CarCardContainer";
import CarCard from "./CarCard";

const FavoriteGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <>
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2 }}>
        {skeletons.map((skeleton) => (
          <CarCardContainer key={skeleton}>
            <CarCard />
          </CarCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FavoriteGrid;
