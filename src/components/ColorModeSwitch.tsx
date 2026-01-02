import { useColorMode } from "./ui/color-mode";
import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding={2}>
      <Switch
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette={"cyan"}
        size="xs"
      ></Switch>
      <Text fontSize={11}>{colorMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
