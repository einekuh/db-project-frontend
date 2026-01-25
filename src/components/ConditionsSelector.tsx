import useListingQueryStore from "@/stores/listingQueryStore";
import useStaticDataStore from "@/stores/staticDataStore";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useMemo, useState } from "react";

const ConditionsSelector = () => {
  const conditions = useStaticDataStore((s) => s.conditions);

  const conditionCollection = useMemo(
    () =>
      createListCollection({
        items: conditions,
        itemToString: (item) => item.condition_type,
        itemToValue: (item) => item.condition_type,
      }),
    [conditions],
  );

  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const setConditions = useListingQueryStore((s) => s.setConditions);

  return (
    <Select.Root
      collection={conditionCollection}
      value={selectedConditions}
      onValueChange={({ value }) => {
        setSelectedConditions(value);
        setConditions(value);
      }}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      width="100%"
      multiple
      closeOnSelect
      size="lg"
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
              <Select.Item key={condition.condition_id} item={condition}>
                {condition.condition_type}
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
