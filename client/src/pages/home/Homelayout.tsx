import * as styled from "./styles";
import * as Common from "@styles/Common";

export function Homelayout1() {
  return (
    <styled.Homelayoutstyled1>
      <Common.FlexCenterRow className="glad">
        <Common.FlexRow className="glad-line">
          <div>Welcome</div>
          <div>To</div>
        </Common.FlexRow>
        <styled.Heading>
          <styled.BouncingText>매주 매일 매년 함께</styled.BouncingText>
        </styled.Heading>
        <Common.FlexRow className="glad-line">
          <div>Meju</div>
          <div>Meju</div>
        </Common.FlexRow>
      </Common.FlexCenterRow>
    </styled.Homelayoutstyled1>
  );
}

export function Homelayout2() {
  return (
    <styled.Homelayoutstyled2>
      <styled.Content>
        <styled.H2 primary={true}>오늘 한잔 어때 ?</styled.H2>
        <styled.H2>오늘 한잔 어때 ?</styled.H2>
      </styled.Content>
    </styled.Homelayoutstyled2>
  );
}

export function Homelayout3() {
  return (
    <styled.Homelayoutstyled3>
      <styled.Heading>
        <styled.BouncingText>매주</styled.BouncingText>
      </styled.Heading>
      <styled.Container>
        <styled.Animation>
          <styled.FirstAnimation>
            <styled.AnimatedText>휴식을 함께 할 때</styled.AnimatedText>
          </styled.FirstAnimation>
          <styled.SecondAnimation>
            <styled.AnimatedText>고된 하루를 마쳤을 때</styled.AnimatedText>
          </styled.SecondAnimation>
          <styled.ThirdAnimation>
            <styled.AnimatedText>사랑하는 사람과 함께할 때</styled.AnimatedText>
          </styled.ThirdAnimation>
        </styled.Animation>
        <p>늘 곁에 있겠습니다.</p>
      </styled.Container>
    </styled.Homelayoutstyled3>
  );
}

export function Homelayout4() {
  return (
    <styled.Homelayoutstyled4>
      <styled.Heading>
        {["M", "e", "j", "u", "M", "e", "j", "u"].map((letter, index) => (
          <styled.BouncingText key={index}>{letter}</styled.BouncingText>
        ))}
      </styled.Heading>
    </styled.Homelayoutstyled4>
  );
}

export function Homelayout5() {
  return (
    <styled.MainContainer>
      <styled.Heading1>오늘은 땡기는 술은?</styled.Heading1>
      <styled.Roller>
        <styled.RollText>
          Rum
          <br />
          Whisky
          <br />
          Vodka
          <br />
          Brandy
          <br />
          Tequila
          <br />
          Gin
          <br />
          Liqueur
          <br />
          <styled.SpareTime>So ju</styled.SpareTime>
        </styled.RollText>
      </styled.Roller>
    </styled.MainContainer>
  );
}
