import * as styled from "./styles";
import { ButtonLight } from "@components/common/commonButton";
import { CartSummaryProps } from "./interface";

const CartSummary = ({ totalQuantity, totalPrice, handleDeleteSelectedItems }: CartSummaryProps) => {
  return (
    <styled.DeleteLine>
      <ButtonLight width="120px" height="50px" fontSize="12px" onClick={handleDeleteSelectedItems}>
        선택한 제품 삭제
      </ButtonLight>
      <styled.TotalSummary>
        <b>
          <b className="b-title">총 개수</b>
          <b>{totalQuantity > 0 ? `${totalQuantity.toLocaleString()}개` : "0개"}</b>
        </b>
        <b>
          <b className="b-title">총 결제 금액</b>
          <b>{totalPrice > 0 ? `${totalPrice.toLocaleString()} 원` : "0원"}</b>
        </b>
      </styled.TotalSummary>
    </styled.DeleteLine>
  );
};

export default CartSummary;
