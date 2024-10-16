import React, { useEffect } from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import Homefirst from "./homeMain";

const Home: React.FC = () => {
  const navigate = useNavigate();

  function convertToSeconds(dateString: string): string {
    const date = new Date(dateString);

    const seconds = Math.floor(date.getTime() / 1000);

    return `${seconds}`;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    const iatDate = urlParams.get("iat");
    const expDate = urlParams.get("exp");
    const memberId = urlParams.get("X-Member-ID");
    if (accessToken && refreshToken && iatDate && expDate && memberId) {
      localStorage.setItem("authToken", accessToken.replace(/^Bearer\s/, ""));
      localStorage.setItem("refresh", refreshToken);
      const iat_sec = convertToSeconds(iatDate);
      const exp_sec = convertToSeconds(expDate);
      localStorage.setItem("exp", exp_sec);
      localStorage.setItem("iat", iat_sec);
      localStorage.setItem("memberId", memberId);
      navigate("/");
    }
  }, []);
  return (
    <styled.HomeContainer>
      <Homefirst />
    </styled.HomeContainer>
  );
};
export default Home;
