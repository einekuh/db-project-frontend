import type { Car } from "@/entities/Car";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

interface Props {
  car: Car | null;
}
const CarAttributes = ({ car }: Props) => {
  if (!car) return null;
  return (
    <Stack>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Brand:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.brand_name}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Type:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.car_type}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Color:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.color_name}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Condition:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.condition_type}</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default CarAttributes;
