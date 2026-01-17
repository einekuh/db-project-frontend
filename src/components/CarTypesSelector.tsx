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

const CarTypesSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCarTypes, setSelectedCarTypes] = useState<string[]>([]);
  const setCarTypes = useListingQueryStore((s) => s.setCarTypes);

  const carTypes = useStaticDataStore((s) => s.carTypes);

  const filteredItems = useMemo(
    () =>
      carTypes.filter((item) =>
        item.car_type_name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue, carTypes],
  );

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedCarTypes(details.value);
    setCarTypes(details.value);
    console.log(selectedCarTypes);
  };
  return (
    <Combobox.Root
      multiple
      closeOnSelect
      width="100%"
      value={selectedCarTypes}
      collection={collection}
      onValueChange={handleValueChange}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      size="lg"
    >
      <Wrap gap="2">
        {selectedCarTypes.map((type) => (
          <Badge key={type}>{type}</Badge>
        ))}
      </Wrap>

      <Combobox.Control>
        <Combobox.Input placeholder="Search car type" />
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
                <Combobox.Item key={item.car_type_id} item={item.car_type_name}>
                  {item.car_type_name}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
              <Combobox.Empty>No car types found</Combobox.Empty>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default CarTypesSelector;
