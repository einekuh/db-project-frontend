import APIClient from "@/services/api-Client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useDeleteListing = (listing_id: number) => {
    const apiClient = new APIClient(`/listings/${listing_id}`)
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => apiClient.delete(),
        onSuccess: () => {queryClient.invalidateQueries({
      queryKey: ["listings"],
      });}
    })
}

export default useDeleteListing;