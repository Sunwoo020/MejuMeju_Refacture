import * as styled from "./styles";
import { detailData } from "./termData";
import { isScrolledToBottom } from "./scrollUtil";
import React from "react";

interface TermProps {
  pos: number;
  setIsRead: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Term: React.FC<TermProps> = ({ pos, setIsRead }) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (isScrolledToBottom(scrollTop, clientHeight, scrollHeight)) {
      setIsRead((prevState) => {
        const newState = [...prevState];
        newState[pos] = false;
        return newState;
      });
    }
  };

  return <styled.TermDetail onScroll={handleScroll}>{detailData[pos]}</styled.TermDetail>;
};

export default Term;
