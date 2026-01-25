import type { ListingCreate } from "@/entities/Listing";
import APIClient from "@/services/api-Client";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient("/listings");

const useCreateListing = () => {
  return useMutation<unknown, Error, ListingCreate>({
    mutationFn: (listing: ListingCreate) => {
      const formData = new FormData();

      // Textfelder entsprechend ListingCreatePayload / listing_create_form im Backend
      formData.append("title", listing.title);
      formData.append("brand", listing.brand);
      formData.append("color", listing.color);
      formData.append("car_type", listing.car_type);
      formData.append("condition", listing.condition);
      formData.append("location", listing.location);
      formData.append("description", listing.description);
      formData.append("price", listing.price.toString());

      // Mehrere Bilder anhängen; FastAPI erwartet key "images"
      listing.images.forEach((file) => {
        formData.append("images", file);
      });

      return apiClient.post(formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
  });
};

export default useCreateListing;
