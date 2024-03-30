import styled from "styled-components";
import { devices, color } from "@/constants/variable";
import { useState } from "react";

const { primaryColor, whiteColor, greyColor, textColor, blackColor } = color;

interface FilterOption {
  label: string;
  options?: string[];
  optionsByMake?: Record<string, string[]>; // Optional property for options by make
}

interface SortButtonProps {
  active?: boolean;
}

const ColorWrapper = styled.div`
  background-color: ${color.primaryColor};
`;

const Container = styled.div`
  background-color: ${primaryColor};
  max-width: 960px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  margin: 150px 0 25px 0;

  color: ${textColor};
`;

const FilterContainer = styled.div`
  background-color: ${textColor};
  //   height: 200px;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FilterWrapper = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: end;
  //   align-items: center;
  //
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Select = styled.select`
  border-radius: 20px;
  width: 222px;
  height: 34px;
  background-color: ${whiteColor};
  color: ${greyColor};
  border: solid 1px grey;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 25px;
`;
const ApplyBtn = styled.button`
  height: 34px;
  width: 200px;
  border-radius: 20px;
  background-color: ${blackColor};
  color: ${textColor};
  cursor: pointer;
`;
const ClearBtn = styled.button`
  height: 34px;
  width: 200px;
  border-radius: 20px;
  background-color: ${textColor};
  color: ${greyColor};
  border: solid 1px grey;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`;
const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SortContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Data = styled.div`
  font-size: 18px;
  color: ${textColor};
`;

const SortDropdown = styled.select`
  height: 50px;
  width: 200px;
  border-radius: 30px;
  background-color: ${primaryColor};
  color: ${textColor};
  border: solid 1px grey;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  padding-left: 30px;
`;

const SortButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 130px;
  border-radius: 30px;
  border: solid 1px grey;
  overflow: hidden;
`;

const SortButton = styled.button<SortButtonProps>`
  flex: 1;
  height: 100%;
  border: none;
  background-color: ${(props) =>
    props.active ? "#ffffff61" : `${primaryColor}`};
  color: ${(props) => (props.active ? "#fff" : `${textColor}`)};
  cursor: pointer;
`;

const LeftSortButton = styled(SortButton)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const RightSortButton = styled(SortButton)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const filterOptions: FilterOption[] = [
  {
    label: "Make",
    options: ["Audi", "BMW", "Mercedes", "Toyota", "Honda", "Ford"],
  },
  {
    label: "Model",
    // optionsByMake: {
    //   Audi: ["A3", "A4", "A5", "Q3", "Q5"],
    //   BMW: ["3 Series", "5 Series", "X3", "X5"],
    //   Mercedes: ["C-Class", "E-Class", "GLC", "GLE"],
    //   Toyota: ["Corolla", "Camry", "RAV4", "Highlander"],
    //   Honda: ["Civic", "Accord", "CR-V", "Pilot"],
    //   Ford: ["Focus", "Fusion", "Escape", "Explorer"],
    // },
    options: ["A3", "A4", "A5", "A7", "Q3", "Q5"],
  },
  {
    label: "Year",
    options: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
  },
  {
    label: "Odometer",
    options: [
      "Odometer",
      "0-50000",
      "50001-100000",
      "100001-200000",
      "200001-300000",
    ],
  },
  {
    label: "Condition",
    options: [
      "All Car Conditions",
      "Excellent",
      "Above Average",
      "Average",
      "Poor",
    ],
  },
  {
    label: "State",
    options: ["State", "ACT", "NSW", "QLD", "SA", "TAS", "VIC", "WA"],
  },
  {
    label: "Custom Date",
    options: [
      "Custom Date",
      "Last 7 days",
      "Last 30 days",
      "Last 60 days",
      "Last 90 days",
    ],
  },
  {
    label: "Sale category",
    options: [
      "Sale category",
      "Auction",
      "Dealership",
      "Fixed Price",
      "Wholesale",
    ],
  },
];

const CarsFilter = () => {
  const [activeButton, setActiveButton] = useState<"asc" | "desc">("asc");

  const handleLeftButtonClick = () => {
    setActiveButton("asc");
  };

  const handleRightButtonClick = () => {
    setActiveButton("desc");
  };

  return (
    <ColorWrapper>
      <Container>
        <Title>Used car sales for Audi A5</Title>
        <FilterContainer>
          <SelectContainer>
            {filterOptions.map((item) => (
              <Select key={item.label}>
                {item.options?.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            ))}
          </SelectContainer>
          <BtnContainer>
            <ApplyBtn>Apply</ApplyBtn>
            <ClearBtn>Clear</ClearBtn>
          </BtnContainer>
        </FilterContainer>
        <InfoContainer>
          <DataContainer>
            <Data>Records: 124</Data>
            <Data>Average KM: 94200</Data>
            <Data>Average age: 8yrs</Data>
          </DataContainer>
          <SortContainer>
            <SortDropdown>
              <option>Sort by Age</option>
            </SortDropdown>
            <SortButtonContainer>
              <LeftSortButton
                active={activeButton === "asc"}
                onClick={handleLeftButtonClick}
              >
                Asc
              </LeftSortButton>
              <RightSortButton
                active={activeButton === "desc"}
                onClick={handleRightButtonClick}
              >
                Desc
              </RightSortButton>
            </SortButtonContainer>
          </SortContainer>
        </InfoContainer>
      </Container>
    </ColorWrapper>
  );
};

export default CarsFilter;
