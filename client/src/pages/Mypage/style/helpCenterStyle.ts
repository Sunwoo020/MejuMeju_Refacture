import styled from "styled-components";
import * as Common from "@styles/Common";

export const Container = styled(Common.FlexCenterCol)`
  padding: 0px 95px;
  min-height: 100vh;
`;

export const ContentsContainer = styled.div`
  max-width: 1250px;
  width: 100vw;
  position: absolute;
  top: 15%;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const PageName = styled.div`
  ${({ theme }) => Common.fontSize(35)};
  font-weight: 700;
  @media screen and (max-width: 768px) {
    ${({ theme }) => Common.fontSize(22)};
  }
`;

export const TopContainer = styled(Common.FlexCenterRow)`
  width: 100%;
  padding-bottom: 20px;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  position: relative;
  ${Common.fontSize(20)};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.themeColor};
  padding: 20px;
  color: white;
  @media screen and (max-width: 768px) {
    ${({ theme }) => Common.fontSize(16)};
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export const MiddleContainer = styled(Common.FlexCol)`
  gap: 30px;
  border: 1px solid gray;
  border-radius: 2px;
  @media screen and (max-width: 768px) {
    gap: 15px;
  }
`;
