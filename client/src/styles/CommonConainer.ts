import styled from "styled-components";
import * as Type from "@utils/types";
import * as Common from "@styles/Common";

export const ContainerStyle = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${Common.FlexCenterCol};
  gap: 20px;
`;

export const TitleStyle = styled.div<Type.TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TopContainerStyle = styled.div`
  ${Common.FlexRow};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const BottomContainerStyle = styled.div`
  ${Common.FlexCenterRow};
  gap: 15px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const InputContainerStyle = styled.div`
  ${Common.FlexCol};
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  margin-bottom: 10px;

  .flex-col {
    width: 70%;
    ${Common.FlexCol};
    justify-content: space-between;
    gap: 10px;

    input {
      border: 1px solid #b2b2b2;
      padding: 10px;
      ${Common.fontSize(16)};

      @media screen and (max-width: 768px) {
        ${Common.fontSize(14)};
      }
    }
  }

  .flex-row {
    ${Common.FlexRow};
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
      gap: 10px;
    }
  }

  .button {
    width: 30%;
  }
`;

export const StepStyle = styled.div<Type.StepProps>`
  ${Common.FlexCenterRow};
  color: ${({ type }) => (type === "on" ? "#A84448" : "#b2b2b2")};

  .text {
    margin-left: 5px;
    ${Common.fontSize(14)};
  }
`;

export const StepContainerStyle = styled.div`
  ${Common.FlexCenterRow};
  ${Common.fontSize(15)};

  @media screen and (max-width: 768px) {
    ${Common.fontSize(14)};
  }
`;
