/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Combobox,
  createListCollection,
  Field,
  Heading,
  Input,
  InputGroup,
  NumberInput,
  Portal,
  Select,
  Span,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";

import MyFileUpload from "./FileUpload";
import useStaticDataStore from "@/stores/staticDataStore";
/*import LocationClient from "@/services/locationClient";
import type { LocationResult } from "@/entities/LocationResult";
import { CanceledError } from "axios";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useLocationsSuggestions from "@/services/locationClient";*/

const MAX_CHARACTERS = 300;
const schema = z.object({
  title: z.string().min(1, "Title is required!"),
  brand: z.string({ message: "Brand is required!" }),
  color: z.string({ message: "Color is required!" }),
  carType: z.string({ message: "Car type is required!" }),
  description: z.string().min(1, "Description is required!"),
  price: z.string({ message: "Price is required!" }),
  condition: z.string({ message: "Condition is required" }),
  location: z.string({ message: "Location is required!" }),
});

type InsertFormData = z.infer<typeof schema>;

const InsertForm = () => {
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////

  const {
    register,
    //setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<InsertFormData>({ resolver: zodResolver(schema) });

  /*const locationValue = useWatch({ control, name: "location" }) ?? "";
  const debouncedSearchLocation = useDebouncedValue(locationValue, 500);
  const { data, isFetching } = useLocationsSuggestions(debouncedSearchLocation);

  const suggestions =
    data?.features?.map(
      (r) => `${r.properties.name}, ${r.properties.country}`
    ) ?? [];
*/
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/");
  });
  const [description, setDescription] = useState("");

  //////////////////////////////////////////////////////////////
  const [searchValueColor, setSearchValueColor] = useState("");
  const colors = useStaticDataStore((s) => s.colors);

  const filteredColors = useMemo(() => {
    const q = searchValueColor.trim().toLowerCase();
    if (!q) return [...colors];
    return colors.filter((b) => b.color_name.toLowerCase().includes(q));
  }, [searchValueColor, colors]);

  const colorCollection = useMemo(
    () => createListCollection({ items: filteredColors }),
    [filteredColors],
  );
  //////////////////////////////////////////////////////////////^

  const brands = useStaticDataStore((s) => s.brands);

  const [searchValueBrand, setSearchValueBrand] = useState("");

  const filteredBrands = useMemo(() => {
    const q = searchValueBrand.trim().toLowerCase();
    if (!q) return [...brands];
    return brands.filter((b) => b.brand_name.toLowerCase().includes(q));
  }, [searchValueBrand, brands]);

  const brandCollection = useMemo(
    () => createListCollection({ items: filteredBrands }),
    [filteredBrands],
  );

  //////////////////////////////////////////////////////////////
  const [searchValueCarType, setSearchValueCarType] = useState("");
  const carTypes = useStaticDataStore((s) => s.carTypes);

  const filteredCarTypes = useMemo(() => {
    const q = searchValueCarType.trim().toLowerCase();
    if (!q) return [...carTypes];
    return carTypes.filter((b) => b.car_type_name.toLowerCase().includes(q));
  }, [searchValueCarType, carTypes]);

  const carTypeCollection = useMemo(
    () => createListCollection({ items: filteredCarTypes }),
    [filteredCarTypes],
  );

  //////////////////////////////////////////////////////////////

  const conditions = useStaticDataStore((s) => s.conditions);

  const cond = useMemo(
    () => conditions.map((c) => c.condition_type),
    [conditions],
  );

  ///////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////
  const [searchValueLocation, setSearchValueLocation] = useState("");

  const locations = useStaticDataStore((s) => s.locations);

  const filteredLocations = useMemo(() => {
    const q = searchValueLocation.trim().toLowerCase();
    if (!q) return [...locations];
    return locations.filter(
      (b) => b.city + ", " + b.country.toLowerCase().includes(q),
    );
  }, [searchValueLocation, locations]);

  const locationsCollection = useMemo(
    () => createListCollection({ items: filteredLocations }),
    [filteredLocations],
  );

  //////////////////////////////////////////////////////////////

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={16} fontSize="250%">
        Insert a car!
      </Heading>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.title} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Title</Heading>
          </Field.Label>
          <Input {...register("title")} placeholder="Enter a title" size="xl" />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.brand} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Brand</Heading>
          </Field.Label>

          <Controller
            control={control}
            name="brand"
            render={({ field }) => (
              <Combobox.Root
                collection={brandCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setSearchValueBrand(details.inputValue)
                }
                onInteractOutside={() => field.onBlur()}
                size="lg"
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Select a brand" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No brands found</Combobox.Empty>

                      {brandCollection.items.map((item) => (
                        <Combobox.Item
                          key={item.brand_id}
                          item={item.brand_name}
                        >
                          {item.brand_name}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />

          <Field.ErrorText>{errors.brand?.message as string}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.color} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Color</Heading>
          </Field.Label>

          <Controller
            control={control}
            name="color"
            render={({ field }) => (
              <Combobox.Root
                collection={colorCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setSearchValueColor(details.inputValue)
                }
                onInteractOutside={() => field.onBlur()}
                size="lg"
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Select a color" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No colors found</Combobox.Empty>

                      {colorCollection.items.map((item) => (
                        <Combobox.Item
                          key={item.color_id}
                          item={item.color_name}
                        >
                          {item.color_name}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />

          <Field.ErrorText>{errors.color?.message as string}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.carType} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Car type</Heading>
          </Field.Label>

          <Controller
            control={control}
            name="carType"
            render={({ field }) => (
              <Combobox.Root
                collection={carTypeCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setSearchValueCarType(details.inputValue)
                }
                onInteractOutside={() => field.onBlur()}
                size="lg"
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Select a car type" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No car types found</Combobox.Empty>

                      {carTypeCollection.items.map((item) => (
                        <Combobox.Item
                          key={item.car_type_id}
                          item={item.car_type_name}
                        >
                          {item.car_type_name}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />

          <Field.ErrorText>{errors.carType?.message as string}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.condition} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Condition</Heading>
          </Field.Label>

          <Controller
            control={control}
            name="condition"
            render={({ field }) => (
              <Select.Root
                name={field.name}
                collection={createListCollection({ items: cond })}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInteractOutside={() => field.onBlur()}
                size="lg"
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select condition" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>

                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      <Select.ItemGroup>
                        {conditions.map((condition) => (
                          <Select.Item
                            key={condition.condition_id}
                            item={condition.condition_type}
                          >
                            {condition.condition_type}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.ItemGroup>
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />

          <Field.ErrorText>{errors.condition?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.location} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>City</Heading>
          </Field.Label>
          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <Combobox.Root
                collection={locationsCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setSearchValueLocation(details.inputValue)
                }
                onInteractOutside={() => field.onBlur()}
                size="lg"
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Select a location" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No locations found</Combobox.Empty>

                      {locationsCollection.items.map((item) => (
                        <Combobox.Item
                          key={item.location_id}
                          item={item.city + ", " + item.country}
                        >
                          {item.city + ", " + item.country}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />
          {/*<Box position="relative" width="100%">
            <Input
              {...register("location")}
              placeholder="Enter a location"
              size="xl"
              autoComplete="off"
            />

            {locationValue.trim().length > 3 && suggestions.length > 0 && (
              <Box
                position="absolute"
                top="100%"
                left={0}
                right={0}
                mt="2"
                bg="gray.950"
                borderWidth="1px"
                borderRadius="md"
                zIndex="dropdown"
                maxH="240px"
                overflowY="auto"
              >
                {suggestions.map((s) => (
                  <Box
                    key={s}
                    px="3"
                    py="2"
                    cursor="pointer"
                    _hover={{ bg: "gray.900" }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setValue("location", s, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
          )}
          </Box>*/}

          <Field.ErrorText>{errors.location?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.price} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Price</Heading>
          </Field.Label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <NumberInput.Root
                disabled={field.disabled}
                name={field.name}
                value={field.value}
                onValueChange={({ value }) => {
                  field.onChange(value);
                }}
                size="lg"
                width="100%"
                formatOptions={{
                  style: "currency",
                  currency: "EUR",
                  currencyDisplay: "code",
                  currencySign: "standard",
                }}
                step={100}
              >
                <NumberInput.Control />
                <NumberInput.Input onBlur={field.onBlur} />
              </NumberInput.Root>
            )}
          />
          <Field.ErrorText>{errors.price?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root
          invalid={!!errors.description}
          width={{ base: 300, md: 750 }}
        >
          <Field.Label>
            <Heading>Description</Heading>
          </Field.Label>
          <InputGroup
            endElement={
              <Span color="fg.muted" textStyle="xs">
                {description.length} / {MAX_CHARACTERS}
              </Span>
            }
          >
            <Textarea
              {...register("description")}
              variant="outline"
              autoresize
              placeholder="Write a short description"
              maxLength={MAX_CHARACTERS}
              onChange={(e) => {
                setDescription(e.currentTarget.value.slice(0, MAX_CHARACTERS));
              }}
              size="xl"
            />
          </InputGroup>
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        <MyFileUpload />
        <Button type="submit" size="xl">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default InsertForm;
