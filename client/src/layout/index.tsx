import Header from "./Header/Header";
import Main from "./Main/index";
import { ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
