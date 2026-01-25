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
import { useEffect, useMemo, useState } from "react";

import type { ListingDetails } from "@/entities/Listing";

import CarThumbnails from "./CarThumbnails";
import MyFileUpload from "./MyFileUpload";
import useEditListing from "@/hooks/useEditListing";
import useUploadListingImages from "@/hooks/useUploadListingImages";
import useDeleteListingImages from "@/hooks/useDeleteListingImages";
import useStaticDataStore from "@/stores/staticDataStore";

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
      brand: listing?.car.brand_name,
      color: listing?.car.color_name,
      car_type: listing?.car.car_type,
      description: listing?.car_description,
      price: listing?.price.toString(),
      condition: listing?.car.condition_type,
      location: listing?.location,
    },
  });

  // Ensure form values are populated once listing data is loaded asynchronously
  useEffect(() => {
    if (!listing) return;
    reset({
      title: listing.title,
      brand: listing.car.brand_name,
      color: listing.car.color_name,
      car_type: listing.car.car_type,
      description: listing.car_description,
      price: listing.price.toString(),
      condition: listing.car.condition_type,
      location: listing.location,
    });
  }, [listing, reset]);

  const onSubmit = handleSubmit((data) => {
    if (!listing) return;

    const payload = {
      title: data.title,
      brand: data.brand,
      color: data.color,
      car_type: data.car_type,
      condition: data.condition,
      location: data.location,
      description: data.description,
      price: parseFloat(data.price.replace(/[^\d.-]/g, "")),
    };

    editListing.mutate(payload, {
      onSuccess: () => {
        if (files.length > 0) {
          uploadImages.mutate(files);
        }
        if (deletedImages.length > 0 && listing) {
          deleteImages.mutate({ image_urls: deletedImages });
        }

        setEdit(false);
        setFiles([]);
        setDeletedImages([]);
        setDescriptionValue(data.description.slice(0, MAX_CHARACTERS));
      },
    });
  });

  //////////////////////////////////////////////////////////////
  const [edit, setEdit] = useState(false);

  const editListing = useEditListing(listing?.listing_id ?? 0);
  const uploadImages = useUploadListingImages(listing?.listing_id ?? 0);
  const deleteImages = useDeleteListingImages(listing?.listing_id ?? 0);

  const [files, setFiles] = useState<File[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>(
    listing?.images ?? [],
  );
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

  useEffect(() => {
    if (!listing) return;
    setCurrentImages(listing.images ?? []);
    setDeletedImages([]);
  }, [listing]);

  //////////////////////////////////////////////////////////////
  const [descriptionValue, setDescriptionValue] = useState("");

  //////////////////////////////////////////////////////////////
  const [colorSearchValue, setColorSearchValue] = useState("");
  const colors = useStaticDataStore((s) => s.colors);

  const filteredColors = useMemo(() => {
    const q = colorSearchValue.trim().toLowerCase();
    if (!q) return [...colors];
    return colors.filter((b) => b.color_name.toLowerCase().includes(q));
  }, [colorSearchValue, colors]);

  const colorCollection = useMemo(
    () =>
      createListCollection({
        items: filteredColors,
        itemToString: (item) => item.color_name,
        itemToValue: (item) => item.color_name,
      }),
    [filteredColors],
  );
  //////////////////////////////////////////////////////////////
  const brands = useStaticDataStore((s) => s.brands);

  const [brandSearchValue, setBrandSearchValue] = useState("");

  const filteredBrands = useMemo(() => {
    const q = brandSearchValue.trim().toLowerCase();
    if (!q) return [...brands];
    return brands.filter((b) => b.brand_name.toLowerCase().includes(q));
  }, [brandSearchValue, brands]);

  const brandCollection = useMemo(
    () =>
      createListCollection({
        items: filteredBrands,
        itemToString: (item) => item.brand_name,
        itemToValue: (item) => item.brand_name,
      }),
    [filteredBrands],
  );

  //////////////////////////////////////////////////////////////
  const [carTypeSearchValue, setCarTypeSearchValue] = useState("");
  const carTypes = useStaticDataStore((s) => s.carTypes);

  const filteredCarTypes = useMemo(() => {
    const q = carTypeSearchValue.trim().toLowerCase();
    if (!q) return [...carTypes];
    return carTypes.filter((b) => b.car_type_name.toLowerCase().includes(q));
  }, [carTypeSearchValue, carTypes]);

  const carTypeCollection = useMemo(
    () =>
      createListCollection({
        items: filteredCarTypes,
        itemToString: (item) => item.car_type_name,
        itemToValue: (item) => item.car_type_name,
      }),
    [filteredCarTypes],
  );

  //////////////////////////////////////////////////////////////

  const conditions = useStaticDataStore((s) => s.conditions);

  const cond = useMemo(
    () => conditions.map((c) => c.condition_type),
    [conditions],
  );

  ///////////////////////////////////////////////////////////////

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
                        <Combobox.Item key={item.brand_name} item={item}>
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
                        <Combobox.Item key={item.color_id} item={item}>
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
                        <Combobox.Item key={item.car_type_id} item={item}>
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
                  e.currentTarget.value.slice(0, MAX_CHARACTERS),
                );
              }}
              size="xl"
              disabled={!edit}
              defaultValue={listing.car_description}
            />
          </InputGroup>
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        <CarThumbnails
          images={currentImages}
          edit={edit}
          onRemove={(index) => {
            setCurrentImages((prev) => {
              const url = prev[index];
              if (url) {
                setDeletedImages((removed) => [...removed, url]);
              }
              return prev.filter((_, i) => i !== index);
            });
          }}
        />
        {edit ? (
          <MyFileUpload
            files={files}
            onFilesChange={setFiles}
            disabled={!edit}
          />
        ) : null}

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
              setCurrentImages(listing.images ?? []);
              setFiles([]);
              setDescriptionValue(listing.car_description ?? "");
              reset({
                title: listing.title,
                brand: listing.car.brand_name,
                color: listing.car.color_name,
                car_type: listing.car.car_type,
                description: listing.car_description,
                price: listing.price.toString(),
                condition: listing.car.condition_type,
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
