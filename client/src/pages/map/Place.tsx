import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonDark } from "@components/common/commonButton";
import { useDispatch } from "react-redux";
import { setMarker } from "../../utils/redux/slice/store";
import * as Type from "./util";
import * as styled from "./styles";

const MapContainer = lazy(() => import("./map"));

const Place = () => {
  const dispatch = useDispatch();
  const [shoplist, setShoplist] = useState<Type.Shopitem[]>([]);
  const navigate = useNavigate();
  const [select, setSelect] = useState<Type.Shopitem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 매장 데이터 가져오는 함수
  const fetchShoplist = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/marts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authToken"),
        },
      });
      setShoplist(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchShoplist();
  }, []);

  // 매장 선택 핸들러
  const handleSelect = () => {
    if (select) {
      dispatch(setMarker(select));
      navigate(-1);
    }
  };

  return (
    <styled.TotalStyled>
      <styled.PlaceContainer>
        <styled.MapBodyStyled>
          <styled.MapArticleStyled>
            {select && select?.name ? <p>{select?.name}</p> : <p>픽업매장을 선택하세요.</p>}
          </styled.MapArticleStyled>
          {/* MapContainer를 lazy loading하여 지도 렌더링 */}
          <Suspense fallback={<div>loading...</div>}>
            <MapContainer shoplist={shoplist} setSelect={setSelect} />
          </Suspense>
        </styled.MapBodyStyled>
        <styled.MapBottomStyled>
          <ButtonDark width="350px" height="50%" onClick={handleSelect}>
            선택
          </ButtonDark>
        </styled.MapBottomStyled>
      </styled.PlaceContainer>
    </styled.TotalStyled>
  );
};

export default Place;
