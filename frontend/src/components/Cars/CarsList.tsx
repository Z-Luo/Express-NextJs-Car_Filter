import styled from "styled-components";
import { useState, useEffect } from "react";
import { ICar } from "./Cars";
import { color, devices, sizes } from "@/constants/variable";

interface CarListProps {
  data: {
    docs: ICar[];
    count: number;
    averageKm: number;
    averageAgeString: string;
  };
  itemsToShow: number;
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
  margin: 70px auto 40px auto;
  max-width: 1400px;
  width: 100%;
  border-collapse: collapse;

  @media ${devices.laptop} {
    margin: 0 auto 40px auto;
    max-width: calc(100vw - 50px);
  }
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid grey;
`;

const StyledTh = styled.th`
  font-weight: 600;
  padding: 24px 20px;
  text-align: left;
  @media ${devices.laptop} {
    display: none;
  }
`;
const StyledTd = styled.td`
  padding: 20px;
  text-align: left;
  vertical-align: top;

  @media ${devices.laptop} {
    display: block;
    padding: 3px;
  }
`;

const MobileTitleGroup = styled.div`
  padding-top: 40px;
`;

const MobileInfoGroup = styled.div`
  padding: 10px 10px 40px 0px;
`;

const NoData = styled.div`
  margin: 0 auto;
  background-color: ${color.primaryColor};
  height: 600px;
  display: flex;
  justify-content: center;
  padding-top: 250px;
  color: ${color.textColor};
  font-size: 18px;
  width: 100%;
`;

const CarsList: React.FC<CarListProps> = ({ data, itemsToShow }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > sizes.laptop);
  const { docs } = data || {};

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > sizes.laptop);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {isDesktop ? (
            <tbody>
              {docs.slice(0, itemsToShow).map((item) => (
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
          ) : (
            <tbody>
              {docs.slice(0, itemsToShow).map((item) => (
                <StyledTr key={item._id}>
                  <MobileTitleGroup>
                    <StyledTd>
                      <strong>
                        {item.make} {item.model} {item.year}
                      </strong>
                    </StyledTd>
                    <StyledTd>{item.description}</StyledTd>
                  </MobileTitleGroup>
                  <MobileInfoGroup>
                    {Object.values(item)
                      .slice(5)
                      .map((value) => (
                        <StyledTd key={item._id}>
                          &#8226;{" "}
                          {value === "true" || value === false ? (
                            <>{value === "true" ? "Yes" : "No"}</>
                          ) : (
                            <>{value}</>
                          )}
                        </StyledTd>
                      ))}
                  </MobileInfoGroup>
                </StyledTr>
              ))}
            </tbody>
          )}
        </StyledTable>
      ) : (
        <NoData>No records available</NoData>
      )}
    </>
  );
};

export default CarsList;
