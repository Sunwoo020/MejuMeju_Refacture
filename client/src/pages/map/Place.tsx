import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonDark } from "@components/common/Button";
import { useDispatch } from "react-redux";
import { setMarker } from "../../utils/redux/slice/store";
import * as Type from "./util";
import * as styled from "./styles";
const MapComponent = lazy(() => import("./Map"));

const Place = () => {
  const dispatch = useDispatch();
  const [shoplist, setShoplist] = useState<Type.Shopitem[]>([]);
  const navigate = useNavigate();
  const [select, setSelect] = useState<Type.Shopitem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const King = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/marts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setShoplist(res.data.content);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    King();
  }, []);

  const handleSelect = () => {
    dispatch(setMarker(select));
    navigate(-1);
  };

  return (
    <>
      <styled.TotalStyled>
        <styled.PlaceContainer>
          <styled.MapBodyStyled>
            <styled.MapArticleStyled>
              {select && select?.name !== null ? <p>{select?.name}</p> : <p>픽업매장을 선택하세요.</p>}
            </styled.MapArticleStyled>
            <Suspense fallback={<div>loading</div>}>
              <MapComponent shoplist={shoplist} setSelect={setSelect} />
            </Suspense>
          </styled.MapBodyStyled>
          <styled.MapBottomStyled>
            <ButtonDark width="350px" height="50%" onClick={handleSelect}>
              선택
            </ButtonDark>
          </styled.MapBottomStyled>
        </styled.PlaceContainer>
      </styled.TotalStyled>
    </>
  );
};

export default Place;
