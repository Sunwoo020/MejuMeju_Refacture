import { useSearchParams } from "react-router-dom";
import * as styled from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authTokenExpired } from "@utils/authExpired";

export default function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/");
      return;
    }
  }, [navigate, authToken]);

  return (
    <styled.Failstyle>
      <div>
        <h1>결제 실패</h1>
        <div className="reason">{`${searchParams.get("message")}`}</div>
      </div>
    </styled.Failstyle>
  );
}
