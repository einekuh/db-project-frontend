import BrandsSelector from "@/components/BrandsSelector";
import CarGrid from "@/components/CarGrid";
import CarTypesSelector from "@/components/CarTypesSelector";
import ColorsSelector from "@/components/ColorsSelector";
import ConditionsSelector from "@/components/ConditionsSelector";
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
        <BrandsSelector />
        <ColorsSelector />
        <CarTypesSelector />
        <PriceSelector />
        <ConditionsSelector />
      </GridItem>

      <GridItem area="main">
        <CarGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
