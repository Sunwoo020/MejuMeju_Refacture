import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import * as Type from "./util";

const LogoContainer: React.FC<Type.LogoContainerProps> = ({ y, isHover }) => {
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
