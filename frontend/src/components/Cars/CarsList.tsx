import styled from "styled-components";
import fetchCars from "@/services/getCars";
import { useEffect, useState } from "react";

interface Car {
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

const infoList: string[] = [
  "Make",
  "Model",
  "Year",
  "Description",
  "Odometer(km)",
  "Vehicle condition",
  "Sale location",
  "Sale category",
  "Salvage Vehicle",
  "Sale date",
  "Sale price",
];

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  font-weight: 600;
  padding: 10px; /* Adjust the padding to add space between cells */
`;

const CarsList = () => {
  const [carData, setCarData] = useState<Car[]>();

  useEffect(() => {
    const getCarsData = async () => {
      const data = await fetchCars();
      setCarData(data.docs);
      console.log(data);
    };

    getCarsData();
  });

  return (
    <StyledTable>
      <thead>
        <tr>
          {infoList.map((item, i) => (
            <StyledTh key={i}>{item}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {carData &&
          carData.map((item) => (
            <tr key={item._id}>
              <td>{item.make}</td>
              <td>{item.model}</td>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default CarsList;
