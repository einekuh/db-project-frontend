import { Card, Heading, HStack } from "@chakra-ui/react";

const CarCardSkeleton = () => {
  return (
    <Card.Root height="220px">
      <Card.Header>
        <HStack>
          <Heading></Heading>
        </HStack>
      </Card.Header>
      <Card.Body></Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
};

export default CarCardSkeleton;
