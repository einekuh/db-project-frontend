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
        backgroundColor="yellow"
      >
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
        aside <br />
      </GridItem>

      <GridItem area="main" backgroundColor="green">
        main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
