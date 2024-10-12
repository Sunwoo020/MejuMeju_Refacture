import * as styled from "./styles";
import * as Type from "@utils/types";

interface CartItemListProps {
  cartItems: Type.CartItemsProps;
  isCheckedItems: Record<number, boolean>;
  handleCheckItem: (id: number) => void;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  isCheckedAll: boolean;
  handleCheckAll: () => void;
}

const CartItemList: React.FC<CartItemListProps> = ({
  cartItems,
  isCheckedItems,
  handleCheckItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  isCheckedAll,
  handleCheckAll,
}) => {
  return (
    <styled.ListContainer>
      <styled.ListTitle>
        <styled.AllCheckboxContainer>
          <styled.CheckBox checked={isCheckedAll} onChange={handleCheckAll} />
          <styled.LabelAllSelect>전체 선택</styled.LabelAllSelect>
        </styled.AllCheckboxContainer>
        <div>제품 이미지</div>
        <div>제품명</div>
        <div>개수</div>
        <div>가격</div>
      </styled.ListTitle>
      {cartItems.itemCarts.map((item) => (
        <styled.CartItem key={item.itemId}>
          <styled.CheckboxContainer>
            <styled.CheckBox
              checked={isCheckedItems[item.itemId] || false}
              onChange={() => handleCheckItem(item.itemId)}
            />
            <label>선택</label>
          </styled.CheckboxContainer>
          <styled.ImgList>
            <img src={item.profile} alt={item.titleKor} />
          </styled.ImgList>
          <styled.InfoContainer>{item.titleKor}</styled.InfoContainer>
          <styled.EachTag>
            <styled.DecreaseButton disabled={item.quantity === 1} onClick={() => handleDecreaseQuantity(item.itemId)}>
              -
            </styled.DecreaseButton>
            <div>{item.quantity}</div>
            <styled.IncreaseButton onClick={() => handleIncreaseQuantity(item.itemId)}>+</styled.IncreaseButton>
          </styled.EachTag>
          <div>{item.price.toLocaleString()} 원</div>
        </styled.CartItem>
      ))}
    </styled.ListContainer>
  );
};

export default CartItemList;
