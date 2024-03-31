import CarsFilter from "./CarsFilter";
import CarsList from "./CarsList";
import styled from "styled-components";
import { useEffect, useState } from "react";
import fetchCars from "@/services/getCars";
import { devices } from "@/constants/variable";

interface CarDataResponse {
  docs: ICar[];
  count: number;
  averageKm: number;
  averageAgeString: string;
}

export interface ICar {
  _id: string;
  make: string;
  model: string;
  year: number;
  description: string;
  odometer: number;
  condition: string;
  location: string;
  category: string;
  isSalvage: boolean;
  saleDate: string;
}

const Container = styled.div``;

const selectedFiltersObj = {};

const Cars = () => {
  const [carData, setCarData] = useState<CarDataResponse>();
  const [selectedFilters, setSelectedFilters] = useState(selectedFiltersObj);
  const [appliedFilters, setAppliedFilters] = useState(selectedFiltersObj); // Store applied filters separately

  useEffect(() => {
    const getCarsData = async () => {
      const queryParams = { ...appliedFilters };
      const data = await fetchCars(queryParams);
      setCarData(data.data);
    };

    getCarsData();
  }, [appliedFilters]);

  const handleFilterChange = (filterName: string, value: any) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: value,
    });
  };

  const handleApplyFilters = () => {
    setAppliedFilters(selectedFilters); // Apply selected filters when the Apply button is clicked
  };

  return (
    <Container>
      <CarsFilter
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        onApply={handleApplyFilters} // Pass the apply handler to the filter component
        data={carData!}
      />
      <CarsList data={carData!} />
    </Container>
  );
};
export default Cars;
