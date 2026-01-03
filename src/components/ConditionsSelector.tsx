import conditionObjects from "@/data/Conditions";
import { Portal, Select } from "@chakra-ui/react";
import { useState } from "react";

const ConditionsSelector = () => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  return (
    <Select.Root
      collection={conditionObjects}
      defaultValue={["spirited_away"]}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      width="100%"
      multiple
      onSelect={(e) => setSelectedConditions([...selectedConditions, e.value])}
    >
      <Select.HiddenSelect />

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select condition" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {conditionObjects.items.map((condition) => (
              <Select.Item item={condition} key={condition.value}>
                {condition.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default ConditionsSelector;
