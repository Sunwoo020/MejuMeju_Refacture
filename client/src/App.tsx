import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/home/home";
import Cart from "@pages/cart/cart";
import Place from "@pages/map/place";
import Alcohol from "@pages/salesItems/alcoholContainer";
import HelpCenter from "@pages/myPage/helpCenter";
import AlcoholDetail from "@pages/salesItems/alcoholDetail";
import Login from "@pages/login/login";
import FindEmail from "@pages/login/findEmail";
import FindPassword from "@pages/login/findPassword";
import SignupInput from "@pages/signUp/signUpInput";
import SignupSelection from "@pages/signUp/signUpSelect";
import SignupTerm from "@pages/signUp/signUpTerm";
import LikePage from "@pages/myPage/likeList";
import OrderPage from "@pages/myPage/orderList";
import ChangeInfoPage from "@pages/myPage/changeInfo";
import Payment from "@pages/payment/payment";
import PaymentConfirm from "@pages/payment/paymentConfirm";
import FailPage from "@pages/payment/failPage";
import CheckoutChang from "@pages/payment/chekOutModal";
import ChatComponent from "@components/chat/chat";
import Layout from "@layout/index";
import ReviewEdit from "@pages/myPage/reviewEdit";

const BodyContainer = styled.div`
  min-height: 100vh;
  ${({ theme }) => theme.common.flexCol};
`;

const App = () => {
  return (
    <BodyContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/alcohol/detail/:id" element={<AlcoholDetail />} />
          <Route path="/review/edit/:id" element={<ReviewEdit />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/term" element={<SignupTerm />} />
          <Route path="/mypage/likepage" element={<LikePage />} />
          <Route path="/mypage/orderpage" element={<OrderPage />} />
          <Route path="/mypage/changeinfo" element={<ChangeInfoPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkoutChang" element={<CheckoutChang />} />
          <Route path="/paymentconfirm" element={<PaymentConfirm />} />
          <Route path="/fail" element={<FailPage />} />
          <Route path="/place" element={<Place />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/signup" element={<SignupSelection />} />
          <Route path="/signup/input" element={<SignupInput />} />
          <Route path="/findemail/" element={<FindEmail />} />
          <Route path="/findpassword" element={<FindPassword />} />
        </Routes>
        <ChatComponent />
      </Layout>
    </BodyContainer>
  );
};

export default App;
