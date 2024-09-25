import * as CommonList from "./";
import styled from "styled-components";
import * as Common from "@styles/Common";

export const OrderpageContainer = CommonList.PageContainer;

export const PeriodStyled = styled(Common.FlexCenterRow)`
  border: 3px solid black;
  flex-grow: 2;
  > p {
    margin: 0 10px;
  }
  > button {
    margin-left: 10px;
  }
`;

export const OrderEachList = styled(CommonList.EachList)`
  flex-grow: 5;
  flex-basis: 0;
  box-shadow: 4px 4px 4px rgba(8, 8, 8, 0.4);
  padding: 10px;
  .startdate {
    ${({ theme }) => Common.fontSize(22)};
    font-weight: 600;
  }
  .productname {
    cursor: pointer;
  }
`;

export const DatePart = styled(Common.FlexRow)`
  justify-content: flex-end;
  ${({ theme }) => Common.fontSize(18)};
  color: #046404;
  font-weight: 600;
`;

export const OrderEachBtn = styled(CommonList.EachBtn)`
  flex-grow: 1;
  flex-basis: auto;
  gap: 5px;
`;
