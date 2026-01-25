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

const BrandsSelector = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 200);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const setBrands = useListingQueryStore((s) => s.setBrands);
  const brands = useStaticDataStore((s) => s.brands);

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter((b) => b.brand_name.toLowerCase().includes(q));
  }, [debouncedSearch, brands]);

  const collection = useMemo(
    () =>
      createListCollection({
        items: brands,
        itemToString: (item) => item.brand_name,
        itemToValue: (item) => String(item.brand_id),
      }),
    [brands],
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedBrands(details.value);
    const ids = details.value.map((v) => Number(v));
    setBrands(ids);
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
      size="lg"
    >
      <Wrap gap="2">
        {selectedBrands.map((brandId) => {
          const brand = brands.find((b) => b.brand_id === Number(brandId));
          return <Badge key={brandId}>{brand?.brand_name ?? brandId}</Badge>;
        })}
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
                <Combobox.Item key={item.brand_id} item={item}>
                  {item.brand_name}
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
