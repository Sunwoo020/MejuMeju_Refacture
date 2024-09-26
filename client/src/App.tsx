import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "@pages/home/Home";
import Cart from "@pages/cart/Cart";
import Place from "@pages/map/Place";
import Alcohol from "@pages/salesItems/Alcohol";
import HelpCenter from "@pages/myPage/HelpCenter";
import AlcoholDetail from "@pages/salesItems/AlcoholDetail";
import Login from "@pages/login/LoginForm";
import FindEmail from "@pages/login/FindEmail";
import FindPassword from "@pages/login/FindPassword";
import SignupInput from "@pages/signUp/SignupInput";
import SignupSelection from "@pages/signUp/SignupSelection";
import SignupTerm from "@pages/signUp/SignupTerm";
import LikePage from "@pages/myPage/LikeListPage";
import OrderPage from "@pages/myPage/OrderListPage";
import ChangeInfoPage from "@pages/myPage/ChangeInfoPage";
import Payment from "@pages/payment/Payment";
import PaymentConfirm from "@pages/payment/PaymentConfirm";
import FailPage from "@pages/payment/failPage";
import CheckoutChang from "@pages/payment/chekOutModal";
import ChatComponent from "@components/chat/ChatComponent";
import Layout from "@layout/index";
import ReviewEdit from "@pages/myPage/ReviewEdit";

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
