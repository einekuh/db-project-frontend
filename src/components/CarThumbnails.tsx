import { Box, SimpleGrid, Image } from "@chakra-ui/react";

import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  images: string[];
  edit: boolean;
  onRemove?: (index: number) => void;
}
const CarThumbnails = ({ images, edit, onRemove }: Props) => {
  if (!images || images.length === 0) return null;
  return (
    <SimpleGrid columns={{ base: 3, md: 5 }}>
      {images.map((src, idx) => (
        <Box key={src} marginRight={2} marginTop={2}>
          <Image
            src={src}
            borderRadius={5}
            w="100%"
            h={{ base: "80px", md: "90px" }}
            objectFit="cover"
            cursor="pointer"
          />
          {edit && (
            <Box
              margin={1}
              _hover={{
                transform: "scale(1.05)",
                transition: "transform .15s ease-in",
                cursor: "pointer",
              }}
              onClick={onRemove ? () => onRemove(idx) : undefined}
            >
              <RiDeleteBin6Line size={20} />
            </Box>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CarThumbnails;
