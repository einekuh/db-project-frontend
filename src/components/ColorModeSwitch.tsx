import { useColorMode } from "./ui/color-mode";
import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginX={5} marginLeft={12}>
      <Switch
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette={"cyan"}
        size="md"
      ></Switch>
      <Text>{colorMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
