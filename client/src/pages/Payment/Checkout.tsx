import { useEffect, useRef } from "react";
import { PaymentWidgetInstance, loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import * as styled from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemOrder } from "@utils/types";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function chekOut() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance["renderPaymentMethods"]> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const items = location.state ? location.state.items : [];
  const user = location.state ? location.state.user : [];

  const { totalPrice } = items.reduce(
    (acc: { totalquantity: number; totalPrice: number }, item: ItemOrder) => {
      acc.totalquantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { totalquantity: 0, totalPrice: 0 },
  );

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods("#payment-widget", totalPrice);

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(totalPrice, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [totalPrice]);

  return (
    <styled.Container>
      <styled.CheckoutBox>
        <styled.Title>주문서</styled.Title>
        <styled.Price>{`${totalPrice.toLocaleString()}원`}</styled.Price>
        <styled.PaymentWidgetWrapper id="payment-widget" />
        <div className="bt">
          <styled.PayButton onClick={() => navigate(-1)}>취소하기</styled.PayButton>
          <styled.PayButton
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;

              try {
                await paymentWidget?.requestPayment({
                  orderId: nanoid(),
                  orderName: user.id,
                  customerName: user.name,
                  customerEmail: user.email,
                  successUrl: `${window.location.origin}/paymentconfirm`,
                  failUrl: `${window.location.origin}/fail`,
                });
              } catch (error) {}
            }}
          >
            결제하기
          </styled.PayButton>
        </div>
      </styled.CheckoutBox>
    </styled.Container>
  );
}
