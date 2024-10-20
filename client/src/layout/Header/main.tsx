import HeaderContainer from "./headerContainer";
import LogoContainer from "./logoContainer";
import NavigationMenu from "./navigationMenu";
import AuthMenu from "./authMenu";
import * as Util from "./useScroll";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import useHover from "@hooks/useHover";

const Header = () => {
  const { y } = Util.useScroll();
  const pathname = useLocation().pathname;
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <HeaderContainer y={y} pathname={pathname}>
      <nav>
        <LogoContainer y={y} isHover={isHover} />
        <NavigationMenu y={y} isHover={isHover} />
        <AuthMenu />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
