import styled from "styled-components";
import { ICar } from "./Cars";
import { color } from "@/constants/variable";

interface CarListProps {
  data: {
    docs: ICar[];
    count: number;
    averageKm: number;
    averageAgeString: string;
  };
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
];

const StyledTable = styled.table`
  margin: 70px auto;
  max-width: 1400px;
  width: 100%;
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid grey;
`;

const StyledTh = styled.th`
  font-weight: 600;
  padding: 24px 20px;
  text-align: left;
`;
const StyledTd = styled.td`
  padding: 20px;
  text-align: left;
  vertical-align: top;
`;

const NoData = styled.div`
  margin: 0 auto;
  background-color: ${color.primaryColor};
  height: 450px;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  color: ${color.textColor};
  font-size: 18px;
`;

const CarsList: React.FC<CarListProps> = ({ data }) => {
  const { docs } = data || {};
  return (
    <>
      {Array.isArray(docs) && docs?.length > 0 ? (
        <StyledTable>
          <thead>
            <StyledTr>
              {infoList.map((item, i) => (
                <StyledTh key={i}>{item}</StyledTh>
              ))}
            </StyledTr>
          </thead>
          <tbody>
            {docs.map((item) => (
              <StyledTr key={item._id}>
                <StyledTd>{item.make}</StyledTd>
                <StyledTd>{item.model}</StyledTd>
                <StyledTd>{item.year}</StyledTd>
                <StyledTd>{item.description}</StyledTd>
                <StyledTd>{item.odometer}</StyledTd>
                <StyledTd>{item.condition}</StyledTd>
                <StyledTd>{item.location}</StyledTd>
                <StyledTd>{item.category}</StyledTd>
                <StyledTd>{item.isSalvage ? "Yes" : "No"}</StyledTd>
                <StyledTd>{item.saleDate}</StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <NoData>No records available</NoData>
      )}
    </>
  );
};

export default CarsList;
