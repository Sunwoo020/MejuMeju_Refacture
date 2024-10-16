import useHover from "@hooks/useHover";
import { useRef } from "react";
import * as styled from "./styles";

interface HeaderContainerProps {
  children: React.ReactNode;
  y: number;
  pathname: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children, y, pathname }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <styled.HeaderContainer hovering={(isHover || false).toString()} y={y} pathname={pathname}>
      <div ref={hoverRef}>{children}</div>
    </styled.HeaderContainer>
  );
};

export default HeaderContainer;
