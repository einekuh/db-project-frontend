import { SimpleGrid, Image, Box } from "@chakra-ui/react";
import { useMemo, useState } from "react";

interface Props {
  images: string[] | null;
}

const CarPictures = ({ images }: Props) => {
  const list = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  if (!images) return null;
  if (list.length === 0) return null;

  const activeSrc = list[Math.min(activeIndex, list.length - 1)];

  return (
    <Box>
      {/* Hero */}
      <Image
        src={activeSrc}
        borderRadius={5}
        w="100%"
        maxH={{ base: "320px", md: "520px" }}
        objectFit="cover"
        mb={4}
      />

      {/* Thumbnails */}
      <SimpleGrid columns={{ base: 3, md: 5 }}>
        {list.map((src, idx) => (
          <Box
            marginRight={2}
            marginTop={2}
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
              cursor: "pointer",
            }}
          >
            <Image
              key={idx}
              src={src}
              borderRadius={5}
              w="100%"
              h={{ base: "80px", md: "90px" }}
              objectFit="cover"
              cursor="pointer"
              opacity={idx === activeIndex ? 1 : 0.7}
              transform={idx === activeIndex ? "scale(1.02)" : "none"}
              transition="all 0.15s ease"
              onClick={() => setActiveIndex(idx)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CarPictures;
