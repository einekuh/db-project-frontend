import BrandSelector from "@/components/BrandSelector";
import CarGrid from "@/components/CarGrid";
import CarTypeSelector from "@/components/CarTypeSelector";
import ColorSelector from "@/components/ColorSelector";
import PriceSelector from "@/components/PriceSelector";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside" "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "block", lg: "block" }}
        width={300}
        marginLeft={4}
      >
        <BrandSelector />
        <ColorSelector />
        <CarTypeSelector />
        <PriceSelector />
      </GridItem>

      <GridItem area="main">
        <CarGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
