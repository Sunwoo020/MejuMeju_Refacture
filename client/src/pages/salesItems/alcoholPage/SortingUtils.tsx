import { useState } from "react";
import * as styled from "../styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { SortItemsProps } from "@utils/types";

const SortItemType = ["최신순", "할인순", "낮은 가격순", "높은 가격순", "판매순"];
type SortItem = (typeof SortItemType)[number];

const sortOptions: Record<SortItem, string> = {
  최신순: "latest",
  할인순: "discountRate",
  "낮은 가격순": "lowPrice",
  "높은 가격순": "highPrice",
  판매순: "sales",
};

const SortingUtils = ({ totalData, setSortBy }: SortItemsProps) => {
  const [isSortTab, setIsSortTab] = useState<boolean>(false);
  const [sortTab, setSortTab] = useState<SortItem>("최신순");

  const handleClickSortItems = (item: SortItem): void => {
    setSortTab(item);
    setIsSortTab(false);
    setSortBy(sortOptions[item]);
  };

  return (
    <styled.SortingUtilsContainer>
      <div>총 {totalData ? totalData : 0}개</div>
      <div className="sort_item_box">
        <button onClick={() => setIsSortTab(!isSortTab)}>
          <span>{sortTab}</span>
          {isSortTab ? <MdArrowDropUp size="30px" /> : <MdArrowDropDown size="30px" />}
        </button>
        {isSortTab && (
          <ul>
            {SortItemType.filter((item) => item !== sortTab).map((item) => (
              <li key={item} onClick={() => handleClickSortItems(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </styled.SortingUtilsContainer>
  );
};

export default SortingUtils;
