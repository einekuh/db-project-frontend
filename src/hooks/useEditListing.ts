import type { ListingEdit } from "@/entities/Listing"
import APIClient from "@/services/api-Client"
import { useMutation } from "@tanstack/react-query"

const useEditListing = (listing_id: number) => {
    const apiClient = new APIClient(`/listings/${listing_id}`)
    return useMutation({
        mutationFn: (listing: ListingEdit) => apiClient.update(listing)
    })
}

export default useEditListing;