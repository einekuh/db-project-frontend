import conditions from "@/data/Conditions";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useMemo, useState } from "react";

const ConditionsSelector = () => {
  const conditionCollection = useMemo(
    () => createListCollection({ items: conditions }),
    []
  );

  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  return (
    <Select.Root
      collection={conditionCollection}
      value={selectedConditions}
      onValueChange={({ value }) => {
        setSelectedConditions(value);
        console.log(selectedConditions);
      }}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      width="100%"
      multiple
      closeOnSelect
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
            {conditions.map((condition) => (
              <Select.Item key={condition} item={condition}>
                {condition}
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
