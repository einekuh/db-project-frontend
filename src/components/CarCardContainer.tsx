import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CarCardContainer = ({ children }: Props) => {
  return (
    <Box
      margin={2}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default CarCardContainer;
