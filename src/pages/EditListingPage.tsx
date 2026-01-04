import EditForm from "@/components/EditForm";
import { listingDetails } from "@/entities/Listing";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const EditListingPage = () => {
  const { listing_id } = useParams();
  const listing = listingDetails.find((l) => l.listing_id === listing_id);

  return (
    <>
      <Box justifyItems="center">
        <Box marginTop="5%" marginBottom="5%">
          <EditForm listing={listing || null} />
        </Box>
      </Box>
    </>
  );
};

export default EditListingPage;
