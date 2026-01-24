import CarAttributes from "@/components/CarAttributes";
import CarPictures from "@/components/CarPictures";
import ExpandableText from "@/components/ExpandableText";
import { Box, Text, Heading, HStack, Spinner } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import useListingDetails from "@/hooks/useListingDetails";
import useCreateChat from "@/hooks/useCreateChat";
const CarDetailsPage = () => {
  const { listing_id } = useParams();
  const id = parseInt(listing_id!);
  const { data: listing, error, isLoading } = useListingDetails(id);
  const navigate = useNavigate();
  const createChat = useCreateChat();
  if (error) throw error;

  return (
    <>
      {isLoading && <Spinner />}

      <Box px={{ base: 4, md: 8 }} py={6}>
        <Box maxW="1100px" mx="auto">
          <Heading mb={4} fontSize="150%">
            {listing?.title}
          </Heading>

          <ExpandableText maxChars={300}>
            {listing?.car_description || ""}
          </ExpandableText>

          <Box mt={6}>
            <CarAttributes car={listing?.car || null} />
          </Box>
          <Box
            mt={6}
            onClick={() => {
              createChat.mutate(listing?.listing_id!);
              if (createChat.isSuccess) navigate;
            }}
          >
            <HStack>
              <FaRegPaperPlane />
              <Text fontWeight="bold">Contact the Seller</Text>
            </HStack>
          </Box>
          <Box mt={6}>
            <CarPictures images={listing?.images || null} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CarDetailsPage;
