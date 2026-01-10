import {
  Button,
  Combobox,
  createListCollection,
  Field,
  Heading,
  HStack,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";

import colors from "@/data/Colors";
import brands from "@/data/Brands";
import carTypes from "@/data/CarTypes";
import conditions from "@/data/Conditions";
import type { ListingDetails } from "@/entities/Listing";

import CarThumbnails from "./CarThumbnails";
import MyFileUpload from "./FileUpload";

const MAX_CHARACTERS = 300;
const schema = z.object({
  title: z.string().min(1, "Title is required!"),
  brand: z.string({ message: "Brand is required!" }),
  color: z.string({ message: "Color is required!" }),
  car_type: z.string({ message: "Car type is required!" }),
  description: z.string().min(1, "Description is required!"),
  price: z.string({ message: "Price is required!" }),
  condition: z.string({ message: "Condition is required" }),
  location: z.string({ message: "Location is required!" }),
});

type EditFormData = z.infer<typeof schema>;

interface Props {
  listing: ListingDetails | null;
}

const EditForm = ({ listing }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<EditFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: listing?.title,
      brand: listing?.car.brand,
      color: listing?.car.color,
      car_type: listing?.car.car_type,
      description: listing?.description,
      price: listing?.price.toString(),
      condition: listing?.car.condition,
      location: listing?.location,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  //////////////////////////////////////////////////////////////
  const [edit, setEdit] = useState(false);

  //////////////////////////////////////////////////////////////
  const [descriptionValue, setDescriptionValue] = useState("");

  //////////////////////////////////////////////////////////////
  const [colorSearchValue, setColorSearchValue] = useState("");

  const filteredColors = useMemo(() => {
    const q = colorSearchValue.trim().toLowerCase();
    if (!q) return [...colors];
    return colors.filter((b) => b.toLowerCase().includes(q));
  }, [colorSearchValue]);

  const colorCollection = useMemo(
    () => createListCollection({ items: filteredColors }),
    [filteredColors]
  );
  //////////////////////////////////////////////////////////////
  const [brandSearchValue, setBrandSearchValue] = useState("");

  const filteredBrands = useMemo(() => {
    const q = brandSearchValue.trim().toLowerCase();
    if (!q) return [...brands];
    return brands.filter((b) => b.toLowerCase().includes(q));
  }, [brandSearchValue]);

  const brandCollection = useMemo(
    () => createListCollection({ items: filteredBrands }),
    [filteredBrands]
  );

  //////////////////////////////////////////////////////////////
  const [carTypeSearchValue, setCarTypeSearchValue] = useState("");

  const filteredCarTypes = useMemo(() => {
    const q = carTypeSearchValue.trim().toLowerCase();
    if (!q) return [...carTypes];
    return carTypes.filter((b) => b.toLowerCase().includes(q));
  }, [carTypeSearchValue]);

  const carTypeCollection = useMemo(
    () => createListCollection({ items: filteredCarTypes }),
    [filteredCarTypes]
  );

  //////////////////////////////////////////////////////////////

  if (listing === null) return null;

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={16} fontSize="250%">
        Edit your car!
      </Heading>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.title} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Title</Heading>
          </Field.Label>
          <Input {...register("title")} size="xl" disabled={!edit} />

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
                disabled={!edit}
                collection={brandCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setBrandSearchValue(details.inputValue)
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
                        <Combobox.Item key={item} item={item}>
                          {item}
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
                disabled={!edit}
                collection={colorCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setColorSearchValue(details.inputValue)
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
                        <Combobox.Item key={item} item={item}>
                          {item}
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

        <Field.Root invalid={!!errors.car_type} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Car type</Heading>
          </Field.Label>

          <Controller
            control={control}
            name="car_type"
            render={({ field }) => (
              <Combobox.Root
                disabled={!edit}
                collection={carTypeCollection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInputValueChange={(details) =>
                  setCarTypeSearchValue(details.inputValue)
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
                        <Combobox.Item key={item} item={item}>
                          {item}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />

          <Field.ErrorText>
            {errors.car_type?.message as string}
          </Field.ErrorText>
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
                disabled={!edit}
                name={field.name}
                collection={createListCollection({ items: conditions })}
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
                          <Select.Item key={condition} item={condition}>
                            {condition}
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
          <Input
            {...register("location")}
            placeholder="Enter a location"
            size="xl"
            disabled={!edit}
          />
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
                disabled={!edit}
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
                {descriptionValue.length} / {MAX_CHARACTERS}
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
                setDescriptionValue(
                  e.currentTarget.value.slice(0, MAX_CHARACTERS)
                );
              }}
              size="xl"
              disabled={!edit}
              defaultValue={listing.description}
            />
          </InputGroup>
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        <CarThumbnails images={listing.images} edit={edit} />
        {edit ? <MyFileUpload /> : null}

        <HStack>
          <Button
            type="button"
            hidden={edit}
            onClick={() => setEdit(true)}
            size="xl"
          >
            Edit
          </Button>

          <Button type="submit" hidden={!edit} size="xl">
            Submit
          </Button>

          <Button
            type="button"
            hidden={!edit}
            onClick={() => {
              setEdit(false);
              reset({
                title: listing.title,
                brand: listing.car.brand,
                color: listing.car.color,
                car_type: listing.car.car_type,
                description: listing.description,
                price: listing.price.toString(),
                condition: listing.car.condition,
                location: listing.location,
              });
            }}
            size="xl"
          >
            Cancel
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

export default EditForm;
