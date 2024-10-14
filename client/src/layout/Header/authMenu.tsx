import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authTokenExpired } from "@utils/authExpired";

const AuthMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsModalOpen(true);
    navigate("/");
  };

  const authToken = localStorage.getItem("authToken");

  return (
    <div>
      {authToken ? (
        authTokenExpired(authToken) ? (
          <div onClick={() => navigate("/login")}>로그인</div>
        ) : (
          <div onClick={handleLogout}>로그아웃</div>
        )
      ) : (
        <div onClick={() => navigate("/login")}>로그인</div>
      )}
      {isModalOpen && <div>로그아웃이 되었습니다!</div>}
    </div>
  );
};

export default AuthMenu;
