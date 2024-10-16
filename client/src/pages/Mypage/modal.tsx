import React, { useState, useEffect, ChangeEvent } from "react";
import * as styled from "./style";
import axiosInstance from "@utils/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import Alert from "@components/common/commonAlert";
import { ButtonLight } from "@components/common/commonButton";

const Modal = ({ email }: { email: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const navigate = useNavigate();

  const openModalHandler = () => setIsOpen(!isOpen);

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const DeleteHandler = async () => {
    try {
      await axiosInstance.delete("/members", {
        data: { username: email, password },
      });
      ["authToken", "refresh", "memberId", "exp", "iat"].forEach((item) => localStorage.removeItem(item));
      setAlertMessage("탈퇴에 성공했습니다!");
      setShowAlert(true);
      setIsOk(true);
    } catch (error) {
      setAlertMessage("비밀번호가 틀렸습니다");
      setShowAlert(true);
    }
  };

  const okGotoMain = () => {
    setShowAlert(false);
    navigate("/");
  };

  return (
    <>
      {showAlert && <Alert text={alertMessage} onClickOk={isOk ? okGotoMain : () => setShowAlert(false)} />}
      <ButtonLight width="200px" height="40px" onClick={openModalHandler}>
        회원탈퇴
      </ButtonLight>
      {isOpen && (
        <styled.ModalBackdrop onClick={openModalHandler}>
          <styled.ModalView onClick={(e) => e.stopPropagation()}>
            <styled.WindowCloseBtn onClick={openModalHandler}>X</styled.WindowCloseBtn>
            <input type="password" onChange={passwordHandler} />
            <p>정말로 탈퇴하시겠습니까?</p>
            <styled.CloseBtn>
              <styled.ModalCloseBtn onClick={DeleteHandler}>YES</styled.ModalCloseBtn>
              <styled.ModalCloseBtn onClick={() => navigate("/mypage/likepage")}>NO</styled.ModalCloseBtn>
            </styled.CloseBtn>
          </styled.ModalView>
        </styled.ModalBackdrop>
      )}
    </>
  );
};

export default Modal;
