import * as styled from "./styles";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import Alert from "@components/common/AlertModal";
import useAxiosAll from "@hooks/useAxiosAll";
import * as Common from "@styles/CommonConainer";

const FindEmail = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isFind, setIsFind] = useState("");
  const [doAxios, data, err, ok] = useAxiosAll();

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
  useEffect(() => {
    if (err) {
      setAlertMessage("이름과 전화번호에 해당하는 이메일이 없습니다!");
      setShowAlert(true);
    }
  }, [err]);
  useEffect(() => {
    if (ok) {
      setAlertMessage("이메일을 찾았습니다!");
      setShowAlert(true);
    }
  }, [ok]);
  useEffect(() => {
    if (data && "email" in data) {
      const email = data.email as string;
      const half = email.indexOf("@");
      const front = email.slice(0, Math.ceil(half / 2));
      const masked = Array(Math.floor(half / 2))
        .fill("*")
        .join("");
      setAlertMessage("이메일을 찾았습니다!");
      setShowAlert(true);
      setIsFind(`${front}${masked}${email.slice(Math.ceil(half))}`);
    }
  }, [data]);
  const findEmailHandler = () => {
    const body = {
      name,
      phone,
    };
    doAxios("post", "/members/find-id", body, false);
  };
  return (
    <Common.Container>
      {showAlert ? <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} /> : null}
      <styled.EmailContentsContainer>
        <Common.TopContainer>
          <Common.Title className="label" fontSize="28px" fontWeight="500">
            이메일 찾기
          </Common.Title>
        </Common.TopContainer>
        <styled.EmailMiddleContainer>
          <Common.InputContainer>
            <Common.Title fontSize="22px" fontWeight="400">
              회원 이메일 찾기
            </Common.Title>
            <div className="flex-row">
              <div className="flex-col">
                <input placeholder="이름" type="text" onChange={nameHandler} />
                <input value={phone} placeholder="전화번호" onChange={phoneHandler} />
              </div>
              <div className="button">
                <ButtonDark width="100%" height="100%" fontSize="18px" fontWeight="500" onClick={findEmailHandler}>
                  이메일 찾기
                </ButtonDark>
              </div>
            </div>
          </Common.InputContainer>
          {isFind ? (
            <>
              <styled.Contour />
              <div>
                가입된 이메일<div className="found">{isFind}</div>
              </div>
            </>
          ) : null}
          <styled.Contour />
          <Common.BottomContainer>
            <ButtonLight
              width="150px"
              height="45px"
              fontSize="18px"
              borderRadius="2px"
              border="solid 1px lightgray"
              onClick={() => navigate("/findpassword")}
            >
              비밀번호찾기
            </ButtonLight>
            <ButtonDark
              width="150px"
              height="45px"
              fontSize="18px"
              borderRadius="2px"
              onClick={() => navigate("/login")}
            >
              로그인하기
            </ButtonDark>
          </Common.BottomContainer>
        </styled.EmailMiddleContainer>
      </styled.EmailContentsContainer>
    </Common.Container>
  );
};

export default FindEmail;
