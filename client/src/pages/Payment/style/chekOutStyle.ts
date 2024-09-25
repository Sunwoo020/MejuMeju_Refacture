import styled from "styled-components";
import * as Common from "@styles/Common";
export const Container = styled.div`
  padding: 1rem;
  z-index: 2;
  ${Common.FlexCenterCol};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 20px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px -2px 3px;
`;

export const Title = styled(Common.FontSizeStyle).attrs({ size: 32 })`
  margin-bottom: 5rem;
`;

export const Price = styled(Common.FontSizeStyle).attrs({ size: 24 })`
  margin-bottom: 1rem;
`;

export const PaymentWidgetWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PayButton = styled(Common.ButtonStyle)`
  font-size: 1.2rem;
`;

export const CheckoutBox = styled.div`
  ${Common.FlexCenterCol};
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  width: 600px;
  height: 720px;
  padding: 15px;
  .bt {
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
