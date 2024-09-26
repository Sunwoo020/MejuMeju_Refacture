import { useSearchParams } from "react-router-dom";
import * as styled from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function authTokenExpired(authToken: string) {
  if (!authToken) {
    return true;
  }

  const decodedToken = decodeAuthToken(authToken);
  const expSeconds = decodedToken.exp;
  const nowSeconds = Math.floor(Date.now() / 1000);

  return expSeconds < nowSeconds;
}

function decodeAuthToken(authToken: string) {
  const payload = authToken.split(".")[1];
  const decodedPayload = atob(payload);
  const { exp } = JSON.parse(decodedPayload);
  return { exp };
}

export default function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  const access_token = `Bearer ${authToken}`;
  useEffect(() => {
    if (!access_token || authTokenExpired(access_token)) {
      navigate("/");
      return;
    }
  });

  return (
    <styled.Failstyle>
      <div>
        <h1>결제 실패</h1>
        <div className="reason">{`${searchParams.get("message")}`}</div>
      </div>
    </styled.Failstyle>
  );
}
