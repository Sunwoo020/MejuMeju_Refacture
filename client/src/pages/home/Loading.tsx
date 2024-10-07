import React from "react";
import * as styled from "./styles";
export default function HomeLoading() {
  return (
    <styled.LoadingContainer>
      <div className="loader">
        <styled.WaveInner>
          <styled.LoadingText>Loading</styled.LoadingText>
        </styled.WaveInner>
        <styled.Cup />
      </div>
    </styled.LoadingContainer>
  );
}
