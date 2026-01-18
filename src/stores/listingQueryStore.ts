import { create } from "zustand";

export interface ListingQuery {
  title?: string;
  brand_ids?: number[];
  color_ids?: number[];
  car_type_ids?: number[];
  price_range_ids?: number[];
  condition_ids?: string[];
  location_ids?: string[];
}
interface ListingQueryStore {
  listingQuery: ListingQuery;
  setTitle: (title: string) => void;
  setBrands: (brand: string[]) => void;
  setCarTypes: (car_type: string[]) => void;
  setColors: (car_type: string[]) => void;
  setPriceRange: (price_range: number[]) => void;
  setConditions: (condition: string[]) => void;
  setFuelTypes: (fuel_type: string[]) => void;
  setLocations: (locations: string[]) => void;
}

const useListingQueryStore = create<ListingQueryStore>((set) => ({
  listingQuery: {},
  setTitle: (title: string) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, title } })),
  setBrands: (brand: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, brand } })),
  setCarTypes: (car_type: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, car_type } })),
  setPriceRange: (price_range: number[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, price_range } })),
  setConditions: (condition: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, condition } })),
  setFuelTypes: (fuel_type: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, fuel_type } })),
  setLocations: (locations: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, locations } })),
  setColors: (colors: string[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, colors } })),
}));

export default useListingQueryStore;
