import CarAttributes from "@/components/CarAttributes";
import CarPictures from "@/components/CarPictures";
import { Box, Text, Heading, HStack, Spinner } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import useListingDetails from "@/hooks/useListingDetails";
import useCreateChat from "@/hooks/useCreateChat";
import useAuthStore from "@/stores/authStore";
const CarDetailsPage = () => {
  const { listing_id } = useParams();
  const id = parseInt(listing_id!);
  const { data: listing, error, isLoading } = useListingDetails(id);
  const navigate = useNavigate();
  const createChat = useCreateChat();
  const user = useAuthStore((s) => s.user);

  if (error) throw error;

  if (listing)
    return (
      <>
        {isLoading && <Spinner />}

        <Box px={{ base: 4, md: 8 }} py={6}>
          <Box maxW="1100px" mx="auto">
            <Heading mb={4} fontSize="150%">
              {listing?.title}
            </Heading>

            <Text fontSize="130%">{listing?.car_description}</Text>

            <Box mt={6}>
              <CarAttributes car={listing.car} />
            </Box>
            <Box
              mt={6}
              onClick={() => {
                if (!listing) return;

                const isOwner =
                  user?.id !== undefined &&
                  Number(listing.creator_user_id) === user.id;

                if (isOwner && user?.id) {
                  // Für eigene Listings: zur eigenen Chat-Übersicht navigieren,
                  // statt einen neuen Chat mit sich selbst zu erstellen.
                  navigate(`/chats/${user.id}`);
                } else {
                  // Für fremde Listings: wie bisher Chat für das Listing starten.
                  createChat.mutate(listing.listing_id);
                }
              }}
            >
              <HStack>
                <FaRegPaperPlane />
                <Text
                  fontWeight="bold"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  {user?.id !== undefined &&
                  listing &&
                  Number(listing.creator_user_id) === user.id
                    ? "View your chats"
                    : "Contact the Seller"}
                </Text>
              </HStack>
            </Box>
            <Box mt={6}>
              <CarPictures images={listing?.images || null} />
            </Box>
          </Box>
        </Box>
      </>
    );

  return null;
};

export default CarDetailsPage;
