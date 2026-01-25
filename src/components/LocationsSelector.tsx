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

const LocationsSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 200);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const setLocations = useListingQueryStore((s) => s.setLocations);

  const locations = useStaticDataStore((s) => s.locations);

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter((item) =>
      `${item.city}, ${item.country}`.toLowerCase().includes(q),
    );
  }, [debouncedSearch, locations]);

  const collection = useMemo(
    () =>
      createListCollection({
        items: locations,
        itemToString: (item) => `${item.city}, ${item.country}`,
        itemToValue: (item) => String(item.location_id),
      }),
    [locations],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedLocations(details.value);
    const ids = details.value.map((v) => Number(v));
    setLocations(ids);
  };
  return (
    <Combobox.Root
      multiple
      closeOnSelect
      width="100%"
      value={selectedLocations}
      collection={collection}
      onValueChange={handleValueChange}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
      variant="subtle"
      marginTop={7}
      marginRight={10}
      size="lg"
    >
      <Wrap gap="2">
        {selectedLocations.map((locationId) => {
          const loc = locations.find(
            (l) => l.location_id === Number(locationId),
          );
          const label = loc ? `${loc.city}, ${loc.country}` : locationId;
          return <Badge key={locationId}>{label}</Badge>;
        })}
      </Wrap>

      <Combobox.Control>
        <Combobox.Input placeholder="Search location" />
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
                <Combobox.Item key={item.location_id} item={item}>
                  {item.city + ", " + item.country}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
              <Combobox.Empty>No Locations found</Combobox.Empty>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default LocationsSelector;
