import * as styled from "./styles";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosAll from "@hooks/useAxiosAll";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import Alert from "@components/common/AlertModal";

const Find = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [doAxios, , err, ok] = useAxiosAll();

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    if (val) {
      setPhone(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`,
      );
    }
  };
  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const findHandler = () => {
    const body = {
      name,
      phone,
      email,
    };
    doAxios("post", "/members/find-", body, false);
  };
  useEffect(() => {
    if (err) {
      setAlertMessage("해당 정보로 가입된 회원정보가 없습니다!");
      setShowAlert(true);
    }
  }, [err]);
  useEffect(() => {
    if (ok) {
      setAlertMessage("해당 이메일로 임시 비밀번호를 발급했습니다!");
      setShowAlert(true);
    }
  }, [ok]);
  return (
    <styled.Container>
      {showAlert ? <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} /> : null}
      <styled.PasswordContentsContainer>
        <styled.TopContainer>
          <styled.Title className="label" fontSize="28px" fontWeight="500">
            비밀번호 찾기
          </styled.Title>
        </styled.TopContainer>
        <styled.PasswordMiddleContainer>
          <styled.InputContainer>
            <styled.Title fontSize="22px" fontWeight="400">
              회원 비밀번호 찾기
            </styled.Title>
            <div className="flex-row">
              <div className="flex-col">
                <input placeholder="이름" type="text" onChange={nameHandler} />
                <input placeholder="이메일" type="email" onChange={emailHandler} />
                <input value={phone} placeholder="전화번호" onChange={phoneHandler} />
              </div>
              <div className="button">
                <ButtonDark width="100%" height="100%" fontSize="18px" fontWeight="500" onClick={findHandler}>
                  비밀번호 찾기
                </ButtonDark>
              </div>
            </div>
          </styled.InputContainer>
          <styled.Contour />
          <styled.BottomContainer>
            <ButtonLight width="150px" height="45px" fontSize="18px" onClick={() => navigate("/findemail")}>
              이메일찾기
            </ButtonLight>
            <ButtonDark width="150px" height="45px" fontSize="18px" onClick={() => navigate("/login")}>
              로그인하기
            </ButtonDark>
          </styled.BottomContainer>
        </styled.PasswordMiddleContainer>
      </styled.PasswordContentsContainer>
    </styled.Container>
  );
};

export default Find;
