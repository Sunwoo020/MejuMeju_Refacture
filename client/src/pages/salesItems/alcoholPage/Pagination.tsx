import React from "react";
import * as styled from "../styles";
import { PaginationProps } from "@utils/types";

const Pagination = ({ currentPage, setCurrentPage, itemsPerPage, totalData }: PaginationProps) => {
  const totalPgaes = Math.ceil(totalData / itemsPerPage);

  const handleClickPage = (pageNum: number): void => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  const PaginationBtns = () => {
    const btns = [];
    for (let i = 1; i <= totalPgaes; i++) {
      btns.push(
        <styled.StyledPaginationBtn key={i} onClick={() => handleClickPage(i)} disabled={currentPage === i}>
          {i}
        </styled.StyledPaginationBtn>,
      );
    }

    return btns;
  };

  return <styled.PaginationContainer>{PaginationBtns()}</styled.PaginationContainer>;
};

export default Pagination;
