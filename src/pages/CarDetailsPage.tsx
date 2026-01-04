import CarAttributes from "@/components/CarAttributes";
import CarPictures from "@/components/CarPictures";
import ExpandableText from "@/components/ExpandableText";
import { listingDetails } from "@/entities/Listing";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CarDetailsPage = () => {
  const { listing_id } = useParams();
  const listing = listingDetails.find((l) => l.listing_id === listing_id);
  //if (error) throw error;

  return (
    <>
      {/*isLoading && <Spinner />*/}

      <Box px={{ base: 4, md: 8 }} py={6}>
        <Box maxW="1100px" mx="auto">
          <Heading mb={4}>{listing?.title}</Heading>

          <ExpandableText maxChars={300}>
            {listing?.description || ""}
          </ExpandableText>

          <Box mt={6}>
            <CarAttributes car={listing?.car || null} />
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
