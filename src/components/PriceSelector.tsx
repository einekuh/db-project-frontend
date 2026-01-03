import { Code, HStack, Slider, Stack, useSlider } from "@chakra-ui/react";

const PriceSelector = () => {
  const slider = useSlider({
    defaultValue: [0, 20_000],

    max: 100_000,
    step: 500,
  });
  return (
    <Stack align="flex-start" marginTop={5}>
      <Slider.RootProvider value={slider} width="100%" size="sm">
        <Slider.Label>Select price range</Slider.Label>
        <HStack>
          <Code>{slider.value[0].toLocaleString("de-DE")}</Code>{" "}
          <Code>{slider.value[1].toLocaleString("de-DE")}</Code>€
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
