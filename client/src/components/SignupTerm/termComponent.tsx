import * as styled from "./styles";
import { detailData } from "./termData";
import { isScrolledToBottom } from "./scrollUtil";
import React from "react";
import { TermProps } from "./interface";

const Term = ({ pos, setIsRead }: TermProps) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    isScrolledToBottom(scrollTop, clientHeight, scrollHeight) &&
      setIsRead((prevState) => {
        const newState = [...prevState];
        newState[pos] = false;
        return newState;
      });
  };

  return <styled.TermDetail onScroll={handleScroll}>{detailData[pos]}</styled.TermDetail>;
};

export default Term;
