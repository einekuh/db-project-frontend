import { create } from "zustand";

export interface ListingQuery {
  title?: string;
  brand_ids?: number[];
  color_ids?: number[];
  car_type_ids?: number[];
  price_range?: number[];
  condition_ids?: number[];
  locations_ids?: number[];
}
interface ListingQueryStore {
  listingQuery: ListingQuery;
  setTitle: (title: string) => void;
  setBrands: (brand: number[]) => void;
  setCarTypes: (car_type: number[]) => void;
  setColors: (car_type: number[]) => void;
  setPriceRange: (price_range: number[]) => void;
  setConditions: (condition: number[]) => void;
  setFuelTypes: (fuel_type: number[]) => void;
  setLocations: (locations: number[]) => void;
}

const useListingQueryStore = create<ListingQueryStore>((set) => ({
  listingQuery: {},
  setTitle: (title: string) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, title } })),
  setBrands: (brand: number[]) =>
    set((store) => ({
      listingQuery: { ...store.listingQuery, brand_ids: brand },
    })),
  setCarTypes: (car_type: number[]) =>
    set((store) => ({
      listingQuery: { ...store.listingQuery, car_type_ids: car_type },
    })),
  setPriceRange: (price_range: number[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, price_range } })),
  setConditions: (condition: number[]) =>
    set((store) => ({
      listingQuery: { ...store.listingQuery, condition_ids: condition },
    })),
  setFuelTypes: (fuel_type: number[]) =>
    set((store) => ({ listingQuery: { ...store.listingQuery, fuel_type } })),
  setLocations: (locations: number[]) =>
    set((store) => ({
      listingQuery: { ...store.listingQuery, locations_ids: locations },
    })),
  setColors: (colors: number[]) =>
    set((store) => ({
      listingQuery: { ...store.listingQuery, color_ids: colors },
    })),
}));

export default useListingQueryStore;
