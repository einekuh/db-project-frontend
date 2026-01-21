import {
  Box,
  Button,
  Card,
  CloseButton,
  Dialog,
  Heading,
  HStack,
  Image,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import car from "../assets/car.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Listing } from "@/entities/Listing";
import { IoLocationOutline } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAddFavorite from "@/hooks/useAddFavorite";
import useDeleteFavorite from "@/hooks/useDeleteFavorite";

interface Props {
  listing: Listing;
  isUserListingCard: boolean;
}

const CarCard = ({ listing, isUserListingCard }: Props) => {
  const [isLiked, setLiked] = useState(listing.isFavorite);

  const addFavorite = useAddFavorite();
  const deleteFavorite = useDeleteFavorite(listing.listing_id);

  const handleFavorite = (listing_id: number) => {
    if (isLiked) {
      deleteFavorite.mutate(listing_id);
      setLiked(false);
    } else {
      addFavorite.mutate(listing_id);
      setLiked(true);
    }
  };

  const handleDelete = () => {
    //implement deleting logic
  };
  return (
    <Card.Root height="100%" width="100%" overflow="hidden">
      <Link to={`/listings/${listing.listing_id}/details`}>
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
        {isUserListingCard ? (
          <>
            <Link to={`/listings/${listing.listing_id}/edit`}>
              <Box
                marginX={1}
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform .15s ease-in",
                  cursor: "pointer",
                }}
              >
                <TiEdit size={25} />
              </Box>
            </Link>
            <Dialog.Root motionPreset="slide-in-bottom" size="sm">
              <Dialog.Trigger asChild>
                <Box
                  marginX={1}
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform .15s ease-in",
                    cursor: "pointer",
                  }}
                >
                  <RiDeleteBin6Line size={25} />
                </Box>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>
                        <Heading>Delete</Heading>
                      </Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Text>
                        Do you really want to delete this listing? It will not
                        be possible to restore it!
                      </Text>
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </Dialog.ActionTrigger>
                      <Button
                        variant="outline"
                        colorPalette="red"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </>
        ) : (
          <Stack>
            <HStack>
              <Box
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform .15s ease-in",
                  cursor: "pointer",
                }}
                onClick={() => handleFavorite(listing.listing_id)}
              >
                {isLiked ? (
                  <IoMdHeart color="red" size={20} />
                ) : (
                  <IoMdHeartEmpty size={20} />
                )}
              </Box>
              <Box marginRight="10%">
                <Text fontSize={18} fontWeight="bold">
                  {listing.price} €
                </Text>
              </Box>
            </HStack>
            <Box>
              <HStack>
                <IoLocationOutline />
                <Text>{listing.location}</Text>
              </HStack>
            </Box>
          </Stack>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default CarCard;
