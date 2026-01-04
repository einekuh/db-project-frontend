import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import car from "../assets/car.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Listing } from "@/entities/Listing";

interface Props {
  listing: Listing;
}

const ListingCard = ({ listing }: Props) => {
  const [isLiked, setLiked] = useState(listing.isFavorite);

  return (
    <Card.Root height="100%" width="100%" overflow="hidden">
      <Link to={`/listings/details/${listing.listing_id}`}>
        <Card.Header p={0} h="160px">
          {listing.images.length > 0 ? (
            listing.images.length < 2 ? (
              <Box display="flex" h="100%">
                <Image
                  src={listing.images[0]}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            ) : (
              <Box display="flex" h="100%">
                <Image
                  src={listing.images[0]}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />{" "}
                <Image
                  src={listing.images[1]}
                  w="50%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            )
          ) : (
            <Box display="flex" h="100%">
              <Image src={car} w="100%" h="100%" objectFit="cover" />
            </Box>
          )}
        </Card.Header>

        <Card.Body>
          {" "}
          <Heading>{listing.title}</Heading>
          <Text>{listing.description}</Text>
        </Card.Body>
      </Link>
      <Card.Footer>
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
          onClick={() => setLiked(!isLiked)}
        >
          {isLiked ? (
            <IoMdHeart color="red" size={20} />
          ) : (
            <IoMdHeartEmpty size={20} />
          )}
        </Box>
        <Box>
          <Text fontSize={18} fontWeight="bold">
            {listing.price} €
          </Text>
        </Box>
      </Card.Footer>
    </Card.Root>
  );
};

export default ListingCard;
