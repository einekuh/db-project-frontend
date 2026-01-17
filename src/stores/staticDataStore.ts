import type { Brand } from "@/entities/Brand";
import type { CarType } from "@/entities/CarType";
import type { Color } from "@/entities/Color";
import type { Condition } from "@/entities/Condition";
import type { Location } from "@/entities/Location";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface staticDataStore {
  brands: Brand[];
  colors: Color[];
  conditions: Condition[];
  carTypes: CarType[];
  locations: Location[];
  setBrands: (brands: Brand[]) => void;
  setColors: (brands: Color[]) => void;
  setConditions: (brands: Condition[]) => void;
  setCarTypes: (brands: CarType[]) => void;
  setLocations: (brands: Location[]) => void;
}

/*const useStaticDataStore = create<staticDataStore>((set) => ({
  brands: [],
  colors: [],
  conditions: [],
  carTypes: [],
  locations: [],
  setBrands: (fetchedBrands: Brand[]) =>
    set((store) => ({ ...store, brands: fetchedBrands })),
  setColors: (fetchedColors: Color[]) =>
    set((store) => ({ ...store, colors: fetchedColors })),
  setConditions: (fetchedConditions: Condition[]) =>
    set((store) => ({ ...store, conditions: fetchedConditions })),
  setCarTypes: (fetchedCarTypes: CarType[]) =>
    set((store) => ({ ...store, carTypes: fetchedCarTypes })),
  setLocations: (fetchedLocations: Location[]) =>
    set((store) => ({ ...store, locations: fetchedLocations })),
}));*/

const useStaticDataStore = create<staticDataStore>()(
  persist(
    (set) => ({
      brands: [],
      colors: [],
      conditions: [],
      carTypes: [],
      locations: [],
      setBrands: (fetchedBrands: Brand[]) =>
        set((store) => ({ ...store, brands: fetchedBrands })),
      setColors: (fetchedColors: Color[]) =>
        set((store) => ({ ...store, colors: fetchedColors })),
      setConditions: (fetchedConditions: Condition[]) =>
        set((store) => ({ ...store, conditions: fetchedConditions })),
      setCarTypes: (fetchedCarTypes: CarType[]) =>
        set((store) => ({ ...store, carTypes: fetchedCarTypes })),
      setLocations: (fetchedLocations: Location[]) =>
        set((store) => ({ ...store, locations: fetchedLocations })),
    }),
    {
      name: "static-data-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useStaticDataStore;
