import useHover from "@hooks/useHover";
import { useRef } from "react";
import * as styled from "./styles";
import * as Type from "./interface";

const HeaderContainer = ({ children, y, pathname }: Type.HeaderContainerProps) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <styled.HeaderContainer hovering={(isHover || false).toString()} y={y} pathname={pathname}>
      <div ref={hoverRef}>{children}</div>
    </styled.HeaderContainer>
  );
};

export default HeaderContainer;
