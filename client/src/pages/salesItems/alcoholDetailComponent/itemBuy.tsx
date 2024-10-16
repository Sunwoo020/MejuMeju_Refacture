import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { ItemOrder } from "@utils/types";
import { createItemCart } from "@utils/api";
import ClickFavoriteItem from "@components/common/clickFavorite";
import PriceDisplay from "@components/common/priceDisplay";
import { ButtonLight, ButtonDark } from "@components/common/commonButton";
import QuantityControl from "@pages/salesItems/alcoholDetailComponent/quantityControl";
import Alert from "@components/common/commonAlert";
import * as styled from "../styles";
import { ItemDatailProps } from "../interface";

const AlcoholItemBuy = ({ data }: ItemDatailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isModal, setIsModal] = useState<boolean>(false);

  const currentDate: Date = new Date();
  const currentDateNum: number = Math.floor(currentDate.getTime() / 1000);

  const expDataNum: number | null = Number(localStorage.getItem("exp"));

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const navigate = useNavigate();

  const HandlerClickCart = async () => {
    if (expDataNum && expDataNum > currentDateNum) {
      await createItemCart(data.itemId, quantity);
      setIsModal(true);
    } else {
      navigate("/login");
    }
  };

  const HandlerClickOrder = (): void => {
    const items: ItemOrder = {
      itemId: data.itemId,
      titleKor: data.titleKor,
      price: data.price * quantity,
      profile: data.profile,
      quantity,
    };
    navigate("/payment", {
      state: { items: [items] },
    });
  };
  const HandlerCart = (): void => {
    navigate("/cart");
  };

  return (
    <>
      <styled.AlcoholDetailContainer>
        <styled.ReviewTitleBox>
          <img src={`${data.profile}?${new Date().getTime()}`} />
        </styled.ReviewTitleBox>
        <styled.StyledItemBuyBox>
          <div className="buy_titlebox">
            <p className="buy_title">{data.titleKor}</p>
            <div className="item_like">
              <ClickFavoriteItem
                itemId={data.itemId}
                icon={AiFillHeart}
                color="#e4e5e9"
                activeColor="#D43635"
                size={30}
              />
            </div>
          </div>
          <div className="buy_price">
            <div className="buy_item_content">
              <span className="buy_item_content_title">판매가</span>
              <span className="buy_price_text">
                <PriceDisplay price={data.price} />원
              </span>
            </div>
            <div className="buy_item_content">
              <span className="buy_item_content_title">용량</span>
              <span>{data.capacity}ml</span>
            </div>
          </div>
          <div className="buy_count">
            <p>현재 남은 수량 중 최대 {data.quantity}개 구매 가능</p>
            <div className="quantity_box">
              <QuantityControl
                quantity={quantity}
                maxQuantity={data.quantity}
                onQuantityChange={handleQuantityChange}
              />
              <div className="item_price">
                <PriceDisplay price={data.price * quantity} />원
              </div>
            </div>
          </div>
          <div className="buy_cart">
            <ButtonLight width="100%" height="100%" fontSize="14px" fontWeight="500" onClick={HandlerClickCart}>
              장바구니
            </ButtonLight>
            <ButtonDark width="100%" height="100%" fontSize="14px" fontWeight="500" onClick={HandlerClickOrder}>
              구매하기
            </ButtonDark>
          </div>
        </styled.StyledItemBuyBox>
      </styled.AlcoholDetailContainer>
      {isModal && (
        <Alert text="장바구니로 이동하시겠습니까?" onClickCancel={() => setIsModal(false)} onClickOk={HandlerCart} />
      )}
    </>
  );
};

export default AlcoholItemBuy;
