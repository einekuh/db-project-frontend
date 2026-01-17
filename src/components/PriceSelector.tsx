import useListingQueryStore from "@/stores/listingQueryStore";
import {
  Code,
  Heading,
  HStack,
  Slider,
  Stack,
  useSlider,
  Text,
} from "@chakra-ui/react";

const PriceSelector = () => {
  const slider = useSlider({
    defaultValue: [0, 20_000],

    max: 100_000,
    step: 500,
    onValueChangeEnd: () => {
      console.log(slider.value);
      setPriceRange(slider.value);
    },
  });
  const setPriceRange = useListingQueryStore((s) => s.setPriceRange);
  return (
    <Stack align="flex-start" marginTop={5}>
      <Slider.RootProvider value={slider} width="100%" size="sm">
        <Slider.Label>
          <Heading>Select price range</Heading>
        </Slider.Label>
        <HStack>
          <Code size="lg">{slider.value[0].toLocaleString("de-DE")}</Code>{" "}
          <Code size="lg">{slider.value[1].toLocaleString("de-DE")}</Code>
          <Text fontSize="140%">€</Text>
        </HStack>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.RootProvider>
    </Stack>
  );
};

export default PriceSelector;
