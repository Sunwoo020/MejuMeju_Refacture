import styled from "styled-components";
import * as Common from "@styles/Common";

export const LikepageContainer = styled(Common.FlexCol)`
  width: 100vw;
  height: 100vh;
  max-width: 1250px;
  margin-top: 150px;
`;

export const PageTitleStyled = styled(Common.FlexRow)`
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding-right: 20px;
  > div {
    font-weight: 600;
  }
`;

export const InfoStyled = styled(Common.FlexCol)`
  flex-grow: 1;
  padding: 10px 0 10px 20px;
`;

export const TableStyled = styled(Common.FlexRow)`
  flex-grow: 8;
`;

export const LeftStyled = styled(Common.FlexCol)`
  flex-grow: 1;
  padding: 10px;
  box-shadow: 4px 4px 4px rgba(8, 8, 8, 0.4);
`;

export const EachList = styled(Common.FlexRow)`
  justify-content: space-around;
  margin: 5px 0;
`;

export const EachTitle = styled(Common.FlexRow)`
  flex-grow: 9;
  justify-content: space-around;
  align-items: center;
  flex-basis: 0;

  > img {
    width: 10%;
    height: 10rem;
    cursor: pointer;
  }

  .productname {
    ${({ theme }) => Common.fontSize(22)};
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  .productprice {
    ${({ theme }) => Common.fontSize(22)};
  }
`;

export const EachBtn = styled(Common.FlexCenterRow)`
  flex-grow: 1;
  gap: 10px;
  background-color: #f7f7f7;
  border: none;
`;

export const PagenationStyled = styled(Common.FlexCol)`
  flex-grow: 2;
`;
