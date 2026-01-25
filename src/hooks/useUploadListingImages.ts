import APIClient from "@/services/api-Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadListingImages = (listing_id: number) => {
  const apiClient = new APIClient(`/listings/${listing_id}/images/upload`);
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, File[]>({
    mutationFn: (files: File[]) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("images", file);
      });

      return apiClient.post(formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listing", listing_id, "details"],
      });
    },
  });
};

export default useUploadListingImages;
