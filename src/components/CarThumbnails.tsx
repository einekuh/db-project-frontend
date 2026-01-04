import { Box, SimpleGrid, Image } from "@chakra-ui/react";

import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  images: string[] | null;
  edit: boolean;
}
const CarThumbnails = ({ images, edit }: Props) => {
  let count = 0;
  if (!images) return null;
  if (images.length === 0) return null;
  return (
    <SimpleGrid columns={{ base: 3, md: 5 }}>
      {images.map((src, idx) => (
        <Box marginRight={2} marginTop={2}>
          <Image
            key={idx}
            src={src}
            borderRadius={5}
            w="100%"
            h={{ base: "80px", md: "90px" }}
            objectFit="cover"
            cursor="pointer"
          />
          <Box
            margin={1}
            _hover={
              edit
                ? {
                    transform: "scale(1.05)",
                    transition: "transform .15s ease-in",
                    cursor: "pointer",
                  }
                : {
                    transform: "scale(1)",
                    transition: "transform .15s ease-in",
                    cursor: "pointer",
                  }
            }
            onClick={edit ? () => {} : () => (count = count + 1)}
          >
            <RiDeleteBin6Line size={20} />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CarThumbnails;
