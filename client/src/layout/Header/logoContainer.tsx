import { useNavigate } from "react-router-dom";
import * as styled from "./styles";

interface LogoContainerProps {
  y: number;
  isHover: boolean;
}

const LogoContainer: React.FC<LogoContainerProps> = ({ y, isHover }) => {
  const navigate = useNavigate();

  return (
    <styled.LogoContainer hovering={isHover.toString()} y={y}>
      <div className="tag" onClick={() => navigate("/")}>
        <styled.WhiteMainlogo className="mainlogo" hovering={isHover.toString()} y={y} />
      </div>
    </styled.LogoContainer>
  );
};

export default LogoContainer;
