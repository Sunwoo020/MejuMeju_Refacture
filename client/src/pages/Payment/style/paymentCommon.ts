import styled from "styled-components";
import * as Common from "@styles/Common";

export const PaymentSection = styled.section`
  ${Common.FlexCenterCol};
  margin-top: 150px;
  width: 100%;
`;

export const PaymentTitle = styled.h2`
  ${Common.fontSize(24)};
  font-weight: bold;
`;
export const ButtonStyle = styled.div`
  ${Common.FlexRow};
  justify-content: space-between;
  align-items: center;
  width: 25%;
  padding-bottom: 200px;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
export const FlexCenterDiv = styled.div`
  ${Common.FlexCenter};
`;

export const FlexCenterRowDiv = styled.div`
  ${Common.FlexCenterRow};
  justify-content: space-between;
  width: 100%;
`;

export const FlexColDiv = styled.div`
  ${Common.FlexCol};
  justify-content: flex-start;
  width: 100%;
`;

export const TotalQuantityPriceDiv = styled.div`
  ${Common.FlexCenter};
  width: 100%;
  height: 100%;
  border: 1px solid rgba(60, 60, 60, 0.1);
`;

export const PlaceholderDiv = styled.div`
  color: #c3c3c3;
  &:focus {
    outline: none;
  }
`;
