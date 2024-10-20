import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import * as Type from "./interface";

const LogoContainer = ({ y, isHover }: Type.LogoContainerProps) => {
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
