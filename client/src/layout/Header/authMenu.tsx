import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const authTokenExpired = () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) return true;
  const decodedToken = JSON.parse(atob(authToken.split(".")[1]));
  return decodedToken.exp < Math.floor(Date.now() / 1000);
};

const AuthMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsModalOpen(true);
    navigate("/");
  };

  return (
    <div>
      {localStorage.getItem("authToken") ? (
        authTokenExpired() ? (
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
