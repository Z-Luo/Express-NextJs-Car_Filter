import CarsFilter from "./CarsFilter";
import CarsList from "./CarsList";
import styled from "styled-components";
import { devices } from "@/constants/variable";

const Container = styled.div``;

const Cars = () => {
  return (
    <Container>
      <CarsFilter />
      <CarsList />
    </Container>
  );
};
export default Cars;
