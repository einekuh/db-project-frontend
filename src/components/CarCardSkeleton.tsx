import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const CarCardSkeleton = () => {
  return (
    <Card.Root height="220px">
      <Card.Header>
        <Skeleton></Skeleton>
      </Card.Header>
      <Card.Body></Card.Body>
      <Card.Footer>
        <SkeletonText></SkeletonText>
      </Card.Footer>
    </Card.Root>
  );
};

export default CarCardSkeleton;
