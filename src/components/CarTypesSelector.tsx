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

const CarTypesSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 200);
  const [selectedCarTypes, setSelectedCarTypes] = useState<string[]>([]);
  const setCarTypes = useListingQueryStore((s) => s.setCarTypes);

  const carTypes = useStaticDataStore((s) => s.carTypes);

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return carTypes;
    return carTypes.filter((item) =>
      item.car_type_name.toLowerCase().includes(q),
    );
  }, [debouncedSearch, carTypes]);

  const collection = useMemo(
    () =>
      createListCollection({
        items: carTypes,
        itemToString: (item) => item.car_type_name,
        itemToValue: (item) => String(item.car_type_id),
      }),
    [carTypes],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedCarTypes(details.value);
    const ids = details.value.map((v) => Number(v));
    setCarTypes(ids);
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
        {selectedCarTypes.map((typeId) => {
          const type = carTypes.find((t) => t.car_type_id === Number(typeId));
          return <Badge key={typeId}>{type?.car_type_name ?? typeId}</Badge>;
        })}
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
                <Combobox.Item key={item.car_type_id} item={item}>
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
