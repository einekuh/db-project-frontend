import BrandsSelector from "@/components/BrandsSelector";
import CarGrid from "@/components/CarGrid";
import CarTypesSelector from "@/components/CarTypesSelector";
import ColorsSelector from "@/components/ColorsSelector";
import ConditionsSelector from "@/components/ConditionsSelector";
import LocationsSelector from "@/components/LocationsSelector";
import PriceSelector from "@/components/PriceSelector";
import useListingQueryStore from "@/stores/listingQueryStore";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";

const HomePage = () => {
  const listingQuery = useListingQueryStore((s) => s.listingQuery);

  useEffect(() => {
    console.log(listingQuery);
  }, [listingQuery]);
  return (
    <Grid
      templateAreas={{
        base: `"aside" "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "400px 1fr",
      }}
    >
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "block", lg: "block" }}
        width={400}
        marginLeft={4}
        position={{ lg: "fixed" }}
      >
        <BrandsSelector />
        <ColorsSelector />
        <CarTypesSelector />
        <PriceSelector />
        <ConditionsSelector />
        <LocationsSelector />
      </GridItem>

      <GridItem area="main">
        <CarGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
