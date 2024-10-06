import styled from "styled-components";
import * as Common from "@styles/Common";

export const ModalContainer = styled(Common.FlexCenter)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  max-width: 300px;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Message = styled.div`
  ${Common.fontSize(16)};
  margin-bottom: 20px;
`;

export const Button = styled(Common.ButtonStyle)`
  padding: 8px 16px;
`;
