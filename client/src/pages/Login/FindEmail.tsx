import * as styled from "./styles";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import Alert from "@components/common/AlertModal";
import useAxiosAll from "@hooks/useAxiosAll";

const FindEmail = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState(""); // 전화번호 input 상태
  const [name, setName] = useState(""); // 이름 input 상태
  const [alertMessage, setAlertMessage] = useState(""); // 알람창 메시지 상태
  const [showAlert, setShowAlert] = useState(false); // 알람창 띄우기 상태
  const [isFind, setIsFind] = useState(""); // 찾은 이메일 상태
  const [doAxios, data, err, ok] = useAxiosAll(); // axios 요청 응답 에러여부 상태

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 전환번호 입력 핸들러
    //전환번호 양식대로 입력 작성되도록 유효성 검사 실시
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    if (val) {
      setPhone(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`,
      );
    }
  };
  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 이름 입력 핸들러
    setName(e.target.value);
  };
  useEffect(() => {
    if (err) {
      //에러 실패 시
      setAlertMessage("이름과 전화번호에 해당하는 이메일이 없습니다!");
      setShowAlert(true);
    }
  }, [err]);
  useEffect(() => {
    if (ok) {
      // 이메일 찾기 성공 시
      setAlertMessage("이메일을 찾았습니다!");
      setShowAlert(true);
    }
  }, [ok]);
  useEffect(() => {
    if (data && "email" in data) {
      // data 상태에 정상 저장 되었을 시
      // 받은 이메일을 marked 처리해 저장
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
    // 이메일 찾기 핸들러
    const body = {
      name,
      phone,
    };
    doAxios("post", "/members/find-id", body, false); // post매소드로 이름과 번호를 담아 이메일 찾기 요청 실시
  };
  return (
    <styled.Container>
      {showAlert ? <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} /> : null}
      <styled.EmailContentsContainer>
        <styled.TopContainer>
          <styled.Title className="label" fontSize="28px" fontWeight="500">
            이메일 찾기
          </styled.Title>
        </styled.TopContainer>
        <styled.EmailMiddleContainer>
          <styled.InputContainer>
            <styled.Title fontSize="22px" fontWeight="400">
              회원 이메일 찾기
            </styled.Title>
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
          </styled.InputContainer>
          {isFind ? (
            <>
              <styled.Contour />
              <div>
                가입된 이메일<div className="found">{isFind}</div>
              </div>
            </>
          ) : null}
          <styled.Contour />
          <styled.BottomContainer>
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
          </styled.BottomContainer>
        </styled.EmailMiddleContainer>
      </styled.EmailContentsContainer>
    </styled.Container>
  );
};

export default FindEmail;
