import CarGrid from "@/components/CarGrid";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        aside
      </GridItem>

      <GridItem area="main">
        <CarGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
