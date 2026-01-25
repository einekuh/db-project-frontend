import APIClient from "@/services/api-Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteImagesPayload {
  image_urls: string[];
}

const useDeleteListingImages = (listing_id: number) => {
  const apiClient = new APIClient<DeleteImagesPayload>(
    `/listings/${listing_id}/images/delete`,
  );
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, DeleteImagesPayload>({
    mutationFn: (payload: DeleteImagesPayload) => apiClient.post(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listing", listing_id, "details"],
      });
    },
  });
};

export default useDeleteListingImages;
