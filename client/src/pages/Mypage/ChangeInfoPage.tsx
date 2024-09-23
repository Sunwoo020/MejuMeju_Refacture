import React, { useEffect } from "react";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./style";
import useAxiosAll from "@hooks/useAxiosAll";
import Alert from "@components/common/AlertModal";
import axios from "axios";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import * as Type from "./util";

const InfoTable = ({ setBody, userInfo, isOauth }: Type.TableProsp) => {
  const subTitle = ["이름", "닉네임", "생년월일", "전화번호", "이메일"];
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isDisabled, setIsDisabled] = useState(true); // 비밀번호 형식대로 입력 확인후 비밀번호 확인 란 활성화
  useEffect(() => {
    if (userInfo) {
      setPhone(userInfo.phone);
      setDisplayName(userInfo.displayName);
    }
  }, [userInfo]);
  useEffect(() => {
    if (setBody) {
      setBody({ phone, displayName, password, passwordCheck });
    }
  }, [phone, displayName, password, passwordCheck]);

  const handleDisplay = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/); // 숫자만 입력 가능, 배열로서 앞의 3개, 4개, 4개 숫자 저장
    if (val) {
      setPhone(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`, // 전화번호 형식의 문자열로 숫자 저장되도록 함
      );
    }
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const val = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(e.target.value); // 문자, 숫자, 특수문자로 조합된 8자리 이상으로 비밀번호가 구성되었는지 확인 // 문자와 숫자로 조합된 8자리 이상으로 비밀번호가 구성되었는지 확인
    if (val) {
      // true
      setPassword(e.target.value); // 비밀번호를 저장
      setIsDisabled(false); // 비밀번호 확인 input disable 해제
    } else {
      //false
      setIsDisabled(true); // 비밀번호 확인 input disable
    }
  };
  const handlePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };
  return (
    <styled.StyledTable>
      <tbody>
        {userInfo === null
          ? null
          : Object.keys(userInfo).map((key, idx) => {
              if (idx > 5) return null;
              return (
                <tr key={idx}>
                  <styled.StyledTh>{subTitle[idx]}</styled.StyledTh>
                  {key === "displayName" || key === "phone" ? (
                    <styled.StyledTd>
                      <input
                        value={key === "phone" ? phone : displayName}
                        onChange={key === "phone" ? handlePhone : handleDisplay}
                      ></input>
                    </styled.StyledTd>
                  ) : (
                    <styled.StyledTd>{userInfo[key as keyof Type.Datatype]}</styled.StyledTd>
                  )}
                </tr>
              );
            })}
        {isOauth ? null : (
          <>
            <tr>
              <styled.StyledTh>비밀번호변경</styled.StyledTh>
              <styled.StyledTd>
                <form>
                  <input onChange={handlePassword} autoComplete="off" type="password"></input>
                </form>

                {isDisabled ? (
                  <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                    변경할 비밀번호를 문자, 숫자, 특수기호를 결합해 8자 이상 작성하세요
                  </p>
                ) : null}
              </styled.StyledTd>
            </tr>
            <tr>
              <styled.StyledTh>비밀번호변경확인</styled.StyledTh>
              <styled.StyledTd>
                <form>
                  <input
                    disabled={isDisabled}
                    onChange={handlePasswordCheck}
                    type="password"
                    placeholder="비밀번호를 먼저 올바르게 입력하세요"
                    autoComplete="off"
                  ></input>
                </form>
              </styled.StyledTd>
            </tr>
          </>
        )}
      </tbody>
    </styled.StyledTable>
  );
};
const Modal = ({ email }: { email: string }) => {
  const [isOpen, setIsOpen] = useState(false); //false를 모달 닫힌걸로 생각함.
  const [password, setPassword] = useState("");
  const [doAxios, , err, ok] = useAxiosAll();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const navigate = useNavigate();
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const DeleteHandler = () => {
    doAxios("delete", "/members", { username: email, password });
    localStorage.removeItem("authToken"); // 토큰 지우기
    localStorage.removeItem("refresh"); // refresh 지우기
    localStorage.removeItem("memberId"); //
    localStorage.removeItem("exp");
    localStorage.removeItem("iat");
  };
  useEffect(() => {
    if (err) {
      setAlertMessage("비밀번호가 틀렸습니다");
      setShowAlert(true);
    }
  }, [err]);
  useEffect(() => {
    if (ok) {
      setAlertMessage("탈퇴에 성공했습니다!");
      setShowAlert(true);
      setIsOk(true);
    }
  }, [ok]);
  const okGotoMain = () => {
    // 회원가입 성공시 알림창 확인 onClick 핸들러
    setShowAlert(false);
    navigate("/");
  };
  return (
    <>
      <styled.ModalContainer>
        {showAlert ? <Alert text={alertMessage} onClickOk={isOk ? okGotoMain : () => setShowAlert(false)} /> : null}
        <ButtonLight width="200px" height="40px" onClick={openModalHandler}>
          회원탈퇴
        </ButtonLight>
        {isOpen ? (
          <styled.ModalBackdrop onClick={openModalHandler}>
            <styled.ModalView onClick={(event) => event.stopPropagation()}>
              <styled.WindowCloseBtn onClick={openModalHandler}>X</styled.WindowCloseBtn>
              <form className="password-container">
                비밀번호
                <input type="password" onChange={passwordHandler}></input>
              </form>
              <p>정말로 탈퇴하시겠습니까?</p>
              <styled.CloseBtn>
                <styled.ModalCloseBtn onClick={DeleteHandler}>YES</styled.ModalCloseBtn>
                <styled.ModalCloseBtn onClick={() => navigate("/mypage/likepage")}>NO</styled.ModalCloseBtn>
              </styled.CloseBtn>
            </styled.ModalView>
          </styled.ModalBackdrop>
        ) : null}
      </styled.ModalContainer>
    </>
  );
};

const ChangeInfoPage = () => {
  const navigate = useNavigate();
  const [doAxios, data, err] = useAxiosAll();
  const [body, setBody] = useState<Type.Bodytype>({
    displayName: "",
    phone: "",
    password: "",
    passwordCheck: "",
  });
  const [userInfo, setUserInfo] = useState<Type.Datatype | null>(null);
  const [isOauth, setIsOauth] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");

  useEffect(() => {
    if (err) {
      localStorage.setItem("needLogin", "needLogin");
      navigate("/login");
    }
  }, [err]);
  useEffect(() => {
    if (
      "oauth2Registered" in data &&
      "realName" in data &&
      "displayName" in data &&
      "birthDate" in data &&
      "phone" in data &&
      "email" in data
    ) {
      if (data.oauth2Registered) {
        setIsPass(true);
        setIsOauth(true);
      }
      const formData = {
        realName: data.realName,
        displayName: data.displayName,
        birth: data.birthDate,
        phone: data.phone,
        email: data.email,
      };
      setUserInfo(formData as Type.Datatype);
    }
  }, [data]);

  useEffect(() => {
    doAxios("get", "/members", {}, true);
  }, []);
  const patchOnclick = () => {
    const phoneValid = body.phone.replace(/-/g, "").length === 11; //모든 번호자리 입력해야 통화

    if (!phoneValid) {
      setAlertMessage("전화번호를 모두 기입하세요!");
      setShowAlert(true);
      return;
    }
    if (body.password !== "") {
      // 비밀번호가 빈 문자열이 아닐때
      if (body.password === body.passwordCheck) {
        // 확인란과 일치할 때 비밀번호 수정 허용
        doAxios("patch", "/members", body, true);
        setAlertMessage("정보수정을 성공했습니다!");
        setShowAlert(true);
        setIsOk(true);
      } else {
        // 일치하지 않거나, 빈 문자열일 때 에러 알림
        setAlertMessage("비밀번호와 비밀번호 확인이 일치 않거나\\정보가 모두 기입되지 않았습니다!");
        setShowAlert(true);
      }
    } else if (body.displayName && body.phone) {
      // 비밀번호가 빈문자열이고 이름, 번호 값이 있을 때
      if (body.displayName !== "" && body.phone !== "") {
        const patchData = { displayName: body.displayName, phone: body.phone };
        const newData = Object.assign({}, patchData);
        doAxios("patch", "/members", newData, true);
        setAlertMessage("정보수정을 성공했습니다!");
        setShowAlert(true);
        setIsOk(true);
      } else {
        setAlertMessage("이름 및 전화번호가 입력되어야 합니다!");
        setShowAlert(true);
      }
    }
  };
  const checkPasswordHandle = (e: ChangeEvent<HTMLInputElement>) => {
    // 아이디 핸들러
    setCheckPassword(e.target.value);
  };
  const okGotoMain = () => {
    // 수정 성공시 알림창 확인 onClick 핸들러
    setShowAlert(false);
    navigate("/");
  };
  const CheckAxios = () => {
    const body = {
      username: userInfo?.email,
      password: checkPassword,
    };
    function convertToSeconds(dateString: string): string {
      // dateString을 Date 객체로 변환합니다.
      const date = new Date(dateString);

      // '밀리초' 단위의 시간을 얻은 후, 이를 '초' 단위로 변환합니다.
      const seconds = Math.floor(date.getTime() / 1000);

      return `${seconds}`;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const token = res.headers.authorization;
        const iat_sec = convertToSeconds(res.headers.iat);
        const exp_sec = convertToSeconds(res.headers.exp);
        localStorage.setItem("authToken", token.replace(/^Bearer\s/, "")); // 토큰 저장
        localStorage.setItem("refresh", res.headers.refresh); // refresh 토큰 저장
        localStorage.setItem("exp", exp_sec); // 토큰 만료시간 저장
        localStorage.setItem("memberId", res.headers["x-member-id"]); // member id 저장
        localStorage.setItem("iat", iat_sec); // refresh 토큰 생성 시간 저장
        setIsPass(true);
      })
      .catch(() => {
        setAlertMessage("비밀번호를 확인해주세요!");
        setShowAlert(true);
      });
  };
  const checkHandler = () => {
    CheckAxios();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      CheckAxios();
    }
  };
  return (
    <>
      {showAlert ? <Alert text={alertMessage} onClickOk={isOk ? okGotoMain : () => setShowAlert(false)} /> : null}
      {isPass ? (
        <styled.TotalStyled>
          <styled.InfoContainer>
            <p>회원정보수정</p>
            <styled.InfoBodyupStyled>
              <InfoTable setBody={setBody} userInfo={userInfo} isOauth={isOauth}></InfoTable>
            </styled.InfoBodyupStyled>
            <styled.InfoBodydownStyled>
              <ButtonDark width="200px" height="40px" onClick={patchOnclick}>
                정보수정
              </ButtonDark>
              {userInfo && !isOauth ? <Modal email={userInfo.email}></Modal> : null}
            </styled.InfoBodydownStyled>
          </styled.InfoContainer>
        </styled.TotalStyled>
      ) : (
        <styled.CheckContainer>
          <div className="title">비밀번호를 입력하세요!</div>
          <form>
            <input autoComplete="off" onKeyDown={handleKeyDown} type="password" onChange={checkPasswordHandle} />
          </form>
          <ButtonDark width="100px" height="40px" onClick={checkHandler}>
            확인
          </ButtonDark>
        </styled.CheckContainer>
      )}
    </>
  );
};

export default ChangeInfoPage;
