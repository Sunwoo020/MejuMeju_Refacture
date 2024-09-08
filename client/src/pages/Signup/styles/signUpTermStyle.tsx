import styled from "styled-components";
import * as Types from "./";

export const BottomContainer1 = styled.div`
  ${({ theme }) => theme.common.flexCenterRow}
  gap: 15px;
`;

export const Container1 = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
`;
export const TermContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 50px;
  max-width: 700px;
  width: 80%;
  padding-bottom: 60px;
  position: absolute;
  top: 15%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 25px;
  }
`;
export const Title1 = styled.div<Types.TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    font-size: 18px;
  }
`;
export const TopContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    margin-bottom: 0px;
  }
`;
export const StepContainer1 = styled.div`
  font-size: 18px;
  ${({ theme }) => theme.common.flexCenterRow};
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    font-size: 16px;
  }
`;
export const Step1 = styled.div<Types.StepProps>`
  ${({ theme }) => theme.common.flexCenterRow};
  color: ${({ type }) => (type === "on" ? "#A84448" : "#b2b2b2")};
  .text {
    margin-left: 5px;
    font-size: 14px;
  }
`;
export const MiddleContainer1 = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
    font-size: 14px;
    border: none;
  }
  .title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #434242;
  }
  .check-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .front {
      ${({ theme }) => theme.common.flexCenterRow};
    }
    .red {
      color: #a84448;
      margin-right: 5px;
    }
    .detail {
      float: right;
      font-size: 14px;
      cursor: pointer;
    }
  }
  input {
    width: 20px;
    height: 20px;
  }
`;
