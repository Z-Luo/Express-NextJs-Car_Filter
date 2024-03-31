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

interface CarsFilterProps {
  onFilterChange: (filterName: string, value: any) => void;
  selectedFilters: Object;
  onApply: () => void;
  data: {
    count: number;
    averageKm: number;
    averageAgeString: string;
  };
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
    label: "make",
    options: ["Make", "Audi", "BMW", "Mercedes", "Toyota", "Honda", "Ford"],
  },
  {
    label: "model",
    // optionsByMake: {
    //   Audi: ["A3", "A4", "A5", "Q3", "Q5"],
    //   BMW: ["3 Series", "5 Series", "X3", "X5"],
    //   Mercedes: ["C-Class", "E-Class", "GLC", "GLE"],
    //   Toyota: ["Corolla", "Camry", "RAV4", "Highlander"],
    //   Honda: ["Civic", "Accord", "CR-V", "Pilot"],
    //   Ford: ["Focus", "Fusion", "Escape", "Explorer"],
    // },
    options: ["Model", "A3", "A4", "A5", "A7", "Q3", "Q5"],
  },
  {
    label: "year",
    options: [
      "Year",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
    ],
  },
  {
    label: "odometer",
    options: [
      "Odometer",
      "0-50000",
      "50001-100000",
      "100001-200000",
      "200001-300000",
    ],
  },
  {
    label: "condition",
    options: [
      "All Car Conditions",
      "Excellent",
      "Above Average",
      "Average",
      "Poor",
    ],
  },
  {
    label: "state",
    options: ["State", "ACT", "NSW", "QLD", "SA", "TAS", "VIC", "WA"],
  },
  {
    label: "custom date",
    options: [
      "Custom Date",
      "Last 7 days",
      "Last 30 days",
      "Last 60 days",
      "Last 90 days",
    ],
  },
  {
    label: "sale category",
    options: [
      "Sale category",
      "Auction",
      "Dealership",
      "Fixed Price",
      "Wholesale",
    ],
  },
];

const CarsFilter: React.FC<CarsFilterProps> = ({
  onFilterChange,
  selectedFilters,
  onApply,
  data,
}) => {
  const [activeButton, setActiveButton] = useState<"asc" | "desc">("asc");

  const { count, averageKm, averageAgeString } = data || {};

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
              <Select
                key={item.label}
                onChange={(e) => {
                  onFilterChange(item.label, e.target.value);
                }}
              >
                {item.options?.map((option, i) => (
                  <option key={i} value={option} disabled={i === 0}>
                    {option}
                  </option>
                ))}
              </Select>
            ))}
          </SelectContainer>
          <BtnContainer>
            <ApplyBtn onClick={onApply}>Apply</ApplyBtn>
            <ClearBtn>Clear</ClearBtn>
          </BtnContainer>
        </FilterContainer>
        <InfoContainer>
          <DataContainer>
            <Data>
              Records: <b>{count}</b>
            </Data>
            <Data>
              Average KM: <b>{averageKm}</b>
            </Data>
            <Data>
              Average age: <b>{averageAgeString}</b>
            </Data>
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
