import {
  Box,
  Button,
  Combobox,
  createListCollection,
  Field,
  FileUpload,
  Heading,
  Icon,
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
import { LuUpload } from "react-icons/lu";

import colors from "@/data/Colors";
import brands from "@/data/Brands";
import carTypes from "@/data/CarTypes";
import conditions from "@/data/Conditions";

const MAX_CHARACTERS = 300;
const schema = z.object({
  title: z.string().min(1, "Title is required!"),
  brand: z.string({ message: "Brand is required!" }),
  color: z.string({ message: "Color is required!" }),
  carType: z.string({ message: "Car type is required!" }),
  description: z.string().min(1, "Description is required!"),
  price: z.string({ message: "Price is required!" }),
  condition: z.string({ message: "Condition is required" }).array(),
  location: z.string({ message: "Location is required!" }),
});

type InsertFormData = z.infer<typeof schema>;

const InsertForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<InsertFormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/");
  });
  const [value, setValue] = useState("");

  //////////////////////////////////////////////////////////////
  const [searchValueColor, setSearchValueColor] = useState("");

  const filteredColors = useMemo(() => {
    const q = searchValueColor.trim().toLowerCase();
    if (!q) return [...colors];
    return colors.filter((b) => b.toLowerCase().includes(q));
  }, [searchValueColor]);

  const colorCollection = useMemo(
    () => createListCollection({ items: filteredColors }),
    [filteredColors]
  );
  //////////////////////////////////////////////////////////////
  const [searchValueBrand, setSearchValueBrand] = useState("");

  const filteredBrands = useMemo(() => {
    const q = searchValueBrand.trim().toLowerCase();
    if (!q) return [...brands];
    return brands.filter((b) => b.toLowerCase().includes(q));
  }, [searchValueBrand]);

  const brandCollection = useMemo(
    () => createListCollection({ items: filteredBrands }),
    [filteredBrands]
  );

  //////////////////////////////////////////////////////////////
  const [searchValueCarType, setSearchValueCarType] = useState("");

  const filteredCarTypes = useMemo(() => {
    const q = searchValueCarType.trim().toLowerCase();
    if (!q) return [...carTypes];
    return carTypes.filter((b) => b.toLowerCase().includes(q));
  }, [searchValueCarType]);

  const carTypeCollection = useMemo(
    () => createListCollection({ items: filteredCarTypes }),
    [filteredCarTypes]
  );

  //////////////////////////////////////////////////////////////

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={15}>Insert a car!</Heading>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.title} width={{ base: 300, md: 500 }}>
          <Field.Label>Title</Field.Label>
          <Input {...register("title")} placeholder="Enter a title" />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.brand} width={{ base: 300, md: 500 }}>
          <Field.Label>Brand</Field.Label>

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

        <Field.Root invalid={!!errors.color} width={{ base: 300, md: 500 }}>
          <Field.Label>Color</Field.Label>

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

        <Field.Root invalid={!!errors.carType} width={{ base: 300, md: 500 }}>
          <Field.Label>Car type</Field.Label>

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

          <Field.ErrorText>{errors.carType?.message as string}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.condition} width={{ base: 300, md: 500 }}>
          <Field.Label>Condition</Field.Label>

          <Controller
            control={control}
            name="condition"
            render={({ field }) => (
              <Select.Root
                name={field.name}
                collection={createListCollection({ items: conditions })}
                value={field.value}
                onValueChange={({ value }) => field.onChange(value[0] ?? "")}
                onInteractOutside={() => field.onBlur()}
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

        <Field.Root invalid={!!errors.location} width={{ base: 300, md: 500 }}>
          <Field.Label>City</Field.Label>
          <Input {...register("location")} placeholder="Enter a location" />
          <Field.ErrorText>{errors.location?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.price} width={{ base: 300, md: 500 }}>
          <Field.Label>Price</Field.Label>
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
          width={{ base: 300, md: 500 }}
        >
          <Field.Label>Description</Field.Label>
          <InputGroup
            endElement={
              <Span color="fg.muted" textStyle="xs">
                {value.length} / {MAX_CHARACTERS}
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
                setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS));
              }}
            />
          </InputGroup>
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root width={{ base: 300, md: 500 }}>
          <Field.Label>Upload Images</Field.Label>
          <FileUpload.Root
            maxW="xl"
            alignItems="stretch"
            maxFiles={10}
            accept="image/*"
          >
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone>
              <Icon size="md" color="fg.muted">
                <LuUpload />
              </Icon>
              <FileUpload.DropzoneContent>
                <Box>Drag and drop images here</Box>
                <Box color="fg.muted">.png, .jpg up to 5MB</Box>
              </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUpload.List />
          </FileUpload.Root>
        </Field.Root>

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default InsertForm;
