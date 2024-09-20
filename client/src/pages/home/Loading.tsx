import React from "react";
import * as styled from "./styles"; // 스타일 파일 경로에 맞게 수정하세요

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
