import CarsFilter from "./CarsFilter";
import CarsList from "./CarsList";
import styled from "styled-components";
import { useEffect, useState } from "react";
import fetchCars from "@/services/getCars";
import { devices, color } from "@/constants/variable";

const { textColor, blueColor } = color;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreButton = styled.button`
  height: 48px;
  width: 142px;
  border-radius: 30px;
  background-color: ${blueColor};
  color: ${textColor};
  cursor: pointer;
  border: 0;
  font-size: 18px;
  margin-bottom: 20px;
`;

const selectedFiltersObj = {};
const initialItemsToShow = 10;
const itemsIncrement = 10;

const Cars = () => {
  const [carData, setCarData] = useState<CarDataResponse>();
  const [selectedFilters, setSelectedFilters] = useState(selectedFiltersObj);
  const [appliedFilters, setAppliedFilters] = useState(selectedFiltersObj);
  const [sortFilters, setSortFilters] = useState(selectedFiltersObj);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  useEffect(() => {
    const getCarsData = async () => {
      const queryParams = { ...appliedFilters, ...sortFilters };
      const data = await fetchCars(queryParams);
      setCarData(data.data);
    };

    getCarsData();
  }, [appliedFilters, sortFilters]);

  const handleFilterChange = (filterName: string, value: any) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: value,
    });
  };

  const handleApplyFilters = () => {
    setAppliedFilters(selectedFilters); // Apply selected filters when the Apply button is clicked
  };
  const handleSortFilters = () => {
    setSortFilters(selectedFilters); // Apply selected filters when the sort button is clicked
  };

  const handleClearFilters = () => {
    setSelectedFilters({}); // Reset selected filters to initial state
    setCarData(undefined); // Clear car list data
  };

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsIncrement);
  };

  return (
    <Container>
      <CarsFilter
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        onApply={handleApplyFilters}
        onSortChange={handleSortFilters}
        onClear={handleClearFilters}
        data={carData!}
      />
      <CarsList data={carData!} itemsToShow={itemsToShow} />
      {carData && carData.docs.length > itemsToShow && (
        <MoreButton onClick={handleLoadMore}>Load more</MoreButton>
      )}
    </Container>
  );
};
export default Cars;
