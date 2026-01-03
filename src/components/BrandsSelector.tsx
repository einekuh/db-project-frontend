import { brands } from "@/data/Brands";
import {
  Badge,
  Combobox,
  Portal,
  Wrap,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

const BrandsSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredItems = useMemo(
    () =>
      brands.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems]
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedBrands(details.value);
  };
  return (
    <Combobox.Root
      multiple
      closeOnSelect
      width="100%"
      value={selectedBrands}
      collection={collection}
      onValueChange={handleValueChange}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
      variant="subtle"
      marginTop={7}
      marginRight={10}
    >
      <Wrap gap="2">
        {selectedBrands.map((brand) => (
          <Badge key={brand}>{brand}</Badge>
        ))}
      </Wrap>

      <Combobox.Control>
        <Combobox.Input placeholder="Search brand" />
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
                <Combobox.Item key={item} item={item}>
                  {item}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
              <Combobox.Empty>No brands found</Combobox.Empty>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default BrandsSelector;
