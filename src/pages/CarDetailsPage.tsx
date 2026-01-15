import CarAttributes from "@/components/CarAttributes";
import CarPictures from "@/components/CarPictures";
import ExpandableText from "@/components/ExpandableText";
import { listingDetails } from "@/entities/Listing";
import { Box, Text, Heading, HStack } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
const CarDetailsPage = () => {
  const { listing_id } = useParams();
  const listing = listingDetails.find((l) => l.listing_id === listing_id);
  //if (error) throw error;

  return (
    <>
      {/*isLoading && <Spinner />*/}

      <Box px={{ base: 4, md: 8 }} py={6}>
        <Box maxW="1100px" mx="auto">
          <Heading mb={4} fontSize="150%">
            {listing?.title}
          </Heading>

          <ExpandableText maxChars={300}>
            {listing?.description || ""}
          </ExpandableText>

          <Box mt={6}>
            <CarAttributes car={listing?.car || null} />
          </Box>
          <Box mt={6}>
            <Link to="/chats">
              <ChakraLink>
                <HStack>
                  <FaRegPaperPlane />
                  <Text fontWeight="bold">Contact the Seller</Text>
                </HStack>
              </ChakraLink>
            </Link>
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
