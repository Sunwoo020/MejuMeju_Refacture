import { useRef, useEffect, useState } from "react";
import { useHover } from "usehooks-ts";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "./Logoutmodal";
import * as Type from "./util";
import * as styled from "./styles";

const Header: React.FC = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  function authTokenExpired() {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      // authToken이 없는 경우
      return true; // 만료된 것으로 처리
    }

    // authToken이 있는 경우
    const decodedToken = decodeAuthToken(authToken);
    const expSeconds = decodedToken.exp;
    const nowSeconds = Math.floor(Date.now() / 1000);

    return expSeconds < nowSeconds; // 만료된 경우 true, 유효한 경우 false 반환
  }

  function decodeAuthToken(authToken: string) {
    // authToken을 디코딩하는 로직을 구현해야 합니다.
    // 실제로 사용하는 JWT 디코딩 라이브러리 등을 활용하면 됩니다.
    // 예시로는 페이로드에 exp 필드가 있다고 가정하고 처리하고 있습니다.
    const payload = authToken.split(".")[1];
    const decodedPayload = atob(payload);
    const { exp } = JSON.parse(decodedPayload);
    return { exp };
  }

  const handleLogout = () => {
    // 로컬 스토리지에서 authToken 제거
    localStorage.removeItem("authToken");
    localStorage.removeItem("refresh");
    localStorage.removeItem("exp");
    localStorage.removeItem("memberId");
    localStorage.removeItem("iat");
    setIsModalOpen(true);
    navigate("/");
  };

  const toggleAccordionMenu = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const useScroll = (): Type.ScrollState => {
    const [state, setState] = useState<Type.ScrollState>({ x: 0, y: 0 });

    const onScroll = (): void => {
      setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };

  const { y } = useScroll();

  return (
    <styled.HeaderContainer hovering={(isHover || false).toString()} y={y} pathname={pathname}>
      <nav>
        <div ref={hoverRef} className="hoverlayer">
          <styled.LogoContainer hovering={(isHover || false).toString()} y={y}>
            <div className="tag" onClick={() => navigate("/")}>
              <styled.WhiteMainlogo
                className="mainlogo"
                hovering={(isHover || false).toString()}
                y={y}
                pathname={pathname}
              />
            </div>
            <styled.Ulist className="ull" hovering={(isHover || false).toString()} y={y}>
              <ul className="banner1">
                Product
                <styled.StyledList
                  className="li1"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/alcohol")}
                >
                  주류 리스트
                </styled.StyledList>
              </ul>
              <ul className="banner2">
                Order
                <styled.StyledList
                  className="li4"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/cart")}
                >
                  장바구니
                </styled.StyledList>
              </ul>
              <ul className="banner3">
                My Page
                <styled.StyledList
                  className="li3"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/mypage/likepage")}
                >
                  찜
                </styled.StyledList>
                <styled.StyledList
                  className="li5"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/mypage/orderpage")}
                >
                  주문 내역
                </styled.StyledList>
                <styled.StyledList
                  className="li6"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/mypage/changeinfo")}
                >
                  개인 정보 수정
                </styled.StyledList>
              </ul>
              <ul className="banner4">
                Help
                <styled.StyledList
                  className="li7"
                  hovering={(isHover || false).toString()}
                  y={y}
                  onClick={() => navigate("/helpcenter")}
                >
                  자주 묻는 질문
                </styled.StyledList>
              </ul>

              <ul className="banner6">
                {localStorage.getItem("authToken") ? (
                  // authToken이 있는 경우
                  authTokenExpired() ? ( // authToken이 만료된 경우
                    <div onClick={() => navigate("/login")}>로그인</div>
                  ) : (
                    <div onClick={handleLogout}>로그아웃</div>
                  )
                ) : (
                  <div onClick={() => navigate("/login")}>로그인</div>
                )}
              </ul>
            </styled.Ulist>

            <styled.AccordionMenu hovering={(isHover || false).toString()} y={y}>
              {isAccordionOpen ? (
                <div
                  onBlur={() => setIsAccordionOpen(!isAccordionOpen)}
                  className="onclick"
                  onClick={toggleAccordionMenu}
                >
                  Menu
                </div>
              ) : (
                <div className="onclick" onClick={toggleAccordionMenu}>
                  Menu
                </div>
              )}
              {isAccordionOpen && (
                <>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/alcohol");
                      toggleAccordionMenu();
                    }}
                  >
                    주류 리스트
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/cart");
                      toggleAccordionMenu();
                    }}
                  >
                    장바구니
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/mypage/likepage");
                      toggleAccordionMenu();
                    }}
                  >
                    찜
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/mypage/orderpage");
                      toggleAccordionMenu();
                    }}
                  >
                    주문 내역
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/mypage/changeinfo");
                      toggleAccordionMenu();
                    }}
                  >
                    개인 정보 수정
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      navigate("/helpcenter");
                      toggleAccordionMenu();
                    }}
                  >
                    자주 묻는 질문
                  </styled.AccordionMenuItem>
                  <styled.AccordionMenuItem
                    className="li_padding"
                    hovering={(isHover || false).toString()}
                    y={y}
                    onClick={() => {
                      if (localStorage.getItem("authToken")) {
                        if (authTokenExpired()) {
                          {
                            navigate("/login");
                            toggleAccordionMenu();
                          }
                        } else {
                          {
                            handleLogout();
                            toggleAccordionMenu();
                          }
                        }
                      } else {
                        {
                          navigate("/login");
                          toggleAccordionMenu();
                        }
                      }
                    }}
                  >
                    {localStorage.getItem("authToken") ? (authTokenExpired() ? "로그인" : "로그아웃") : "로그인"}
                  </styled.AccordionMenuItem>
                </>
              )}
            </styled.AccordionMenu>
          </styled.LogoContainer>
        </div>
      </nav>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="modal">로그아웃이 되었습니다!</div>
        </Modal>
      )}
    </styled.HeaderContainer>
  );
};

export default Header;
