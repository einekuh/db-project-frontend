import type { Car } from "@/entities/Car";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

interface Props {
  car: Car | null;
}
const CarAttributes = ({ car }: Props) => {
  if (!car) return null;
  return (
    <SimpleGrid columns={2}>
      <Box>
        <Heading>{car.brand}</Heading>
      </Box>

      <Box></Box>
      <Box></Box>

      <Box></Box>
    </SimpleGrid>
  );
};

export default CarAttributes;
