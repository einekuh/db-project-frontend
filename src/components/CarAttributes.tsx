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
          <Text fontSize="130%">{car.brand}</Text>
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
          <Text fontSize="130%">{car.color}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Condition:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.condition}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Fuel:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.fuel_type}</Text>
        </HStack>
      </Box>

      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            {" "}
            Registration Date{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.registration_date}</Text>
        </HStack>
      </Box>
      <Box marginY={3}>
        <HStack>
          <Text fontSize="130%" fontWeight="bold">
            Kilometers:{" "}
          </Text>{" "}
          <Text fontSize="130%">{car.kilometer_count}</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default CarAttributes;
