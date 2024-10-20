import React from "react";
import * as styled from "./styles";
import * as Type from "./interface";

const Modal = ({ children, onClose }: Type.ModalProps) => {
  return (
    <styled.ModalContainer>
      <styled.ModalContent>
        <styled.Message>{children}</styled.Message>
        <styled.Button onClick={onClose}>확인</styled.Button>
      </styled.ModalContent>
    </styled.ModalContainer>
  );
};

export default Modal;
