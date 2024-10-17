import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@components/common/commonAlert";
import * as styled from "./styles";
import * as Common from "@styles/commonContainer";
import LoginForm from "./loginForm";
import OAuthButtons from "./oAuthButton";
import FooterButtons from "./footerButton";

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

  const convertToSeconds = (dateString: string): string => {
    dateString = dateString.replace("/", "T");
    const date = new Date(dateString);
    const seconds = Math.floor(date.getTime() / 1000);

    return `${seconds}`;
  };

  const handleLogin = () => {
    LoginAxios();
  };

  const LoginAxios = () => {
    const body = { username, password };

    axios
      .post(`${url}/auth/login`, body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const token = res.headers.authorization;
        const iat_sec = convertToSeconds(res.headers.iat);
        const exp_sec = convertToSeconds(res.headers.exp);
        localStorage.setItem("authToken", token.replace(/^Bearer\s/, ""));
        localStorage.setItem("refresh", res.headers.refresh);
        localStorage.setItem("exp", exp_sec);
        localStorage.setItem("memberId", res.headers["x-member-id"]);
        localStorage.setItem("iat", iat_sec);
        navigate(res.headers["x-password-issued"] === "false" ? "/" : "/mypage/changeinfo");
      })
      .catch(() => {
        setAlertMessage("이메일 혹은 비밀번호를 확인해주세요!");
        setShowAlert(true);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <styled.FormContainer>
      {showAlert && <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} />}
      <styled.FormContentsContainer>
        <styled.FormTopContainer>
          <Common.Title className="top-title" fontSize="28px" fontWeight="500">
            로그인
          </Common.Title>
        </styled.FormTopContainer>
        <styled.LoginMiddleContainer>
          <LoginForm
            username={username}
            password={password}
            onUsernameChange={(e) => setUsername(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            onLogin={handleLogin}
          />
          <OAuthButtons
            onGoogleClick={() => window.location.assign(`${url}/oauth2/authorization/google`)}
            onFacebookClick={() => window.location.assign(`${url}/oauth2/authorization/facebook`)}
            onKakaoClick={() => window.location.assign(`${url}/oauth2/authorization/kakao`)}
          />
          <styled.Contour />
          <FooterButtons />
        </styled.LoginMiddleContainer>
      </styled.FormContentsContainer>
    </styled.FormContainer>
  );
};

export default Login;
