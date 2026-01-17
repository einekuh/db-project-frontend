import useListingQueryStore from "@/stores/listingQueryStore";
import useStaticDataStore from "@/stores/staticDataStore";
import {
  Badge,
  Combobox,
  Portal,
  Wrap,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

const ColorsSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const setColors = useListingQueryStore((s) => s.setColors);

  const colors = useStaticDataStore((s) => s.colors);

  const filteredItems = useMemo(
    () =>
      colors.filter((item) =>
        item.color_name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue, colors],
  );

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedColors(details.value);
    setColors(details.value);
    console.log(selectedColors);
  };
  return (
    <Combobox.Root
      multiple
      closeOnSelect
      width="100%"
      value={selectedColors}
      collection={collection}
      onValueChange={handleValueChange}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      size="lg"
    >
      <Wrap gap="2">
        {selectedColors.map((color) => (
          <Badge key={color}>{color}</Badge>
        ))}
      </Wrap>

      <Combobox.Control>
        <Combobox.Input placeholder="Search color" />
        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
          <Combobox.ClearTrigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              {filteredItems.map((item) => (
                <Combobox.Item key={item.color_id} item={item.color_name}>
                  {item.color_name}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
              <Combobox.Empty>No colors found</Combobox.Empty>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default ColorsSelector;
