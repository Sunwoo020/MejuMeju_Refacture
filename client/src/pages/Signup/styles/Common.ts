import styled from "styled-components";
import * as Common from "@styles/Common";

export const Container = styled(Common.Container)``;
export const TopContainer = styled(Common.TopContainer)``;
export const BottomContainer = styled(Common.BottomContainer)``;
export const Step = styled(Common.Step)``;
export const StepContainer = styled(Common.StepContainer)``;
export const InputContainer = styled(Common.InputContainer)``;

export const SingleInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #b2b2b2;
  background-color: #ededed;

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: calc(100% - 190px);
    padding: 10px;
    background-color: white;

    input {
      border: 1px solid #b2b2b2;
      padding: 5px 10px;
      font-size: 16px;
      width: 80%;

      @media screen and (max-width: 768px) {
        width: 75%;
        font-size: 12px;
      }
    }
  }
`;

export const ContentsContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  max-width: 700px;
  width: 100%;
  padding: 0 25px;
  gap: 40px;
  position: absolute;
  top: 15%;
  padding-bottom: 100px;
`;
