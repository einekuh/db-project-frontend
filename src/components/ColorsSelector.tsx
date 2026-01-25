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
import useDebouncedValue from "@/hooks/useDebouncedValue";

const ColorsSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 200);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const setColors = useListingQueryStore((s) => s.setColors);

  const colors = useStaticDataStore((s) => s.colors);

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return colors;
    return colors.filter((item) => item.color_name.toLowerCase().includes(q));
  }, [debouncedSearch, colors]);

  const collection = useMemo(
    () =>
      createListCollection({
        items: colors,
        itemToString: (item) => item.color_name,
        itemToValue: (item) => String(item.color_id),
      }),
    [colors],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedColors(details.value);
    const ids = details.value.map((v) => Number(v));
    setColors(ids);
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
        {selectedColors.map((colorId) => {
          const color = colors.find((c) => c.color_id === Number(colorId));
          return <Badge key={colorId}>{color?.color_name ?? colorId}</Badge>;
        })}
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
                <Combobox.Item key={item.color_id} item={item}>
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
