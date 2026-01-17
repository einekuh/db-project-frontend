import { useEffect } from "react";
import useStaticDataStore from "@/stores/staticDataStore";
import useBrands from "./useBrands";
import useCarTypes from "./useCarTypes";
import useConditions from "./useConditions";
import useLocations from "./useLocations";
import useColors from "./useColors";

const useStaticData = () => {
  const { brands, colors, conditions, carTypes, locations } =
    useStaticDataStore();

  const setBrands = useStaticDataStore((s) => s.setBrands);
  const setColors = useStaticDataStore((s) => s.setColors);
  const setLocations = useStaticDataStore((s) => s.setLocations);
  const setCarTypes = useStaticDataStore((s) => s.setCarTypes);
  const setConditions = useStaticDataStore((s) => s.setConditions);

  // nur fetchen, wenn im Store noch leer
  const brandsQ = useBrands({ enabled: brands.length === 0 });
  const colorsQ = useColors({ enabled: colors.length === 0 });
  const locationsQ = useLocations({ enabled: locations.length === 0 });
  const carTypesQ = useCarTypes({ enabled: carTypes.length === 0 });
  const conditionsQ = useConditions({ enabled: conditions.length === 0 });

  useEffect(() => {
    if (brandsQ.data) setBrands(brandsQ.data);
  }, [brandsQ.data, setBrands]);

  useEffect(() => {
    if (colorsQ.data) setColors(colorsQ.data);
  }, [colorsQ.data, setColors]);

  useEffect(() => {
    if (locationsQ.data) setLocations(locationsQ.data);
  }, [locationsQ.data, setLocations]);

  useEffect(() => {
    if (carTypesQ.data) setCarTypes(carTypesQ.data);
  }, [carTypesQ.data, setCarTypes]);

  useEffect(() => {
    if (conditionsQ.data) setConditions(conditionsQ.data);
  }, [conditionsQ.data, setConditions]);
};

export default useStaticData;
