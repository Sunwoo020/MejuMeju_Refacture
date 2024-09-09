import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import axios from "axios";
import Alert from "@components/common/AlertModal";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import * as styled from "./styles";

const url = `${process.env.REACT_APP_API_URL}`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("needLogin")) {
      setAlertMessage("로그인이 필요합니다!");
      setShowAlert(true);
      localStorage.removeItem("needLogin");
    }
  }, []);
  function convertToSeconds(dateString: string): string {
    dateString = dateString.replace("/", "T");
    const date = new Date(dateString);
    const seconds = Math.floor(date.getTime() / 1000);

    return `${seconds}`;
  }

  const userNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    LoginAxios();
  };
  const LoginAxios = () => {
    const body = {
      username,
      password,
    };
    axios
      .post(`${url}/auth/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const token = res.headers.authorization;

        const iat_sec = convertToSeconds(res.headers.iat);
        const exp_sec = convertToSeconds(res.headers.exp);
        const issued = res.headers["x-password-issued"];
        localStorage.setItem("authToken", token.replace(/^Bearer\s/, ""));
        localStorage.setItem("refresh", res.headers.refresh);
        localStorage.setItem("exp", exp_sec);
        localStorage.setItem("memberId", res.headers["x-member-id"]);
        localStorage.setItem("iat", iat_sec);
        if (issued === "false") {
          navigate("/");
        } else {
          navigate("/mypage/changeinfo");
        }
      })
      .catch(() => {
        setAlertMessage("이메일 혹은 비밀번호를 확인해주세요!");
        setShowAlert(true);
      });
  };
  const googleOAuthHandler = () => {
    window.location.assign(`${url}/oauth2/authorization/google`);
  };
  const facebookOAuthHandler = () => {
    window.location.assign(`${url}/oauth2/authorization/facebook`);
  };
  const kakaoOAuthHandler = () => {
    window.location.assign(`${url}/oauth2/authorization/kakao`);
  };
  const GotoSign = () => {
    navigate("/signup");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      LoginAxios();
    }
  };
  return (
    <styled.FormContainer>
      {showAlert ? <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} /> : null}
      <styled.FormContentsContainer>
        <styled.FormTopContainer>
          <styled.FormTitle className="top-title" fontSize="28px" fontWeight="500">
            로그인
          </styled.FormTitle>
        </styled.FormTopContainer>
        <styled.FormMiddleContainer>
          <styled.FormLoginContainer>
            <styled.FormTitle fontSize="22px" fontWeight="400">
              회원 로그인
            </styled.FormTitle>
            <div className="flex-row">
              <form className="flex-col">
                <input placeholder="이메일" type="email" onChange={userNameHandler} onKeyDown={handleKeyDown} />
                <input
                  placeholder="비밀번호"
                  type="password"
                  autoComplete="off"
                  onChange={passwordHandler}
                  onKeyDown={handleKeyDown}
                />
              </form>
              <div className="button">
                <ButtonDark width="100%" height="100%" fontSize="18px" fontWeight="500" onClick={handleLogin}>
                  로그인
                </ButtonDark>
              </div>
            </div>
          </styled.FormLoginContainer>
          <styled.FormOAuthSignUpBox onClick={googleOAuthHandler} type="google">
            <styled.FormOAuthIconContainer>
              <FcGoogle size="35" color="black" />
            </styled.FormOAuthIconContainer>
            <div className="desc">구글로 시작하기</div>
          </styled.FormOAuthSignUpBox>
          <styled.FormOAuthSignUpBox onClick={facebookOAuthHandler} type="naver">
            <styled.FormOAuthIconContainer>
              <TfiFacebook size="30" color="white" />
            </styled.FormOAuthIconContainer>
            <div className="desc">페이스북으로 시작하기</div>
          </styled.FormOAuthSignUpBox>
          <styled.FormOAuthSignUpBox onClick={kakaoOAuthHandler} type="kakao">
            <styled.FormOAuthIconContainer>
              <RiKakaoTalkFill size="35" color="black" />
            </styled.FormOAuthIconContainer>
            <div className="desc">카카오톡으로 시작하기</div>
          </styled.FormOAuthSignUpBox>
          <styled.FormContour />
          <styled.FormBottomContainer>
            <ButtonDark width="150px" height="100%" fontSize="18px" fontWeight="500" onClick={GotoSign}>
              회원가입
            </ButtonDark>
            <ButtonLight
              width="150px"
              height="100%"
              fontSize="16px"
              fontWeight="500"
              onClick={() => {
                navigate("/findemail");
              }}
            >
              이메일 찾기
            </ButtonLight>
            <ButtonLight
              width="150px"
              height="100%"
              fontSize="16px"
              fontWeight="500"
              onClick={() => {
                navigate("/findpassword");
              }}
            >
              비밀번호 찾기
            </ButtonLight>
          </styled.FormBottomContainer>
        </styled.FormMiddleContainer>
      </styled.FormContentsContainer>
    </styled.FormContainer>
  );
};
export default Login;
