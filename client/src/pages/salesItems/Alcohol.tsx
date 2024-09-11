import { useState, useEffect } from "react";
import { AlcoholListData } from "@utils/types/AlcholInterfaces";
import { getItemsList } from "@utils/api";
import AlcoholList from "@pages/salesItems/alcoholPage/AlcoholList";
import SortingUtils from "@pages/salesItems/alcoholPage/SortingUtils";
import ItemSearch from "@pages/salesItems/alcoholPage/ItemSearch";
import * as styled from "./styles";

const Alcohol = () => {
  const [searchWord, setSearchWord] = useState<string>(""); // 검색 키워드
  const [data, setData] = useState<AlcoholListData[] | null>(null);
  const [totalData, setTotalData] = useState<number | null>(null);

  const size = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabCategories = ["전체", "위스키", "와인", "브랜디", "보드카", "럼", "테킬라", "사케", "기타"];
  const [sortBy, setSortBy] = useState<string>("latest");

  useEffect(() => {
    setSearchWord("");
    const fetchData = async () => {
      const response = await getItemsList(currentPage, size, sortBy, tabCategories[currentTab]);
      try {
        const { data } = response;

        setData(data.data);
        setTotalData(data.pageInfo.totalElements);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [currentTab, sortBy, currentPage]);

  const handleClickTab = (idx: number): void => {
    setCurrentTab(idx);
    setCurrentPage(1);
  };

  return (
    <styled.AlcoholContainer className="main">
      <styled.AlcoholTabNavBox>
        <styled.TabNav>
          {tabCategories.map((tab, idx) => {
            return (
              <li
                key={idx}
                className={currentTab === idx ? "sub_tab tab_selected" : "sub_tab"}
                onClick={() => handleClickTab(idx)}
              >
                {tab}
              </li>
            );
          })}
        </styled.TabNav>
        {typeof totalData === "number" ? (
          <ItemSearch
            setSearchWord={setSearchWord}
            setData={setData}
            currentPage={currentPage}
            setTotalData={setTotalData}
            size={size}
          />
        ) : null}
      </styled.AlcoholTabNavBox>
      {searchWord ? (
        <styled.SearchTextbox>
          <span className="string_text">{searchWord}</span>
          <span className="default_text">에 대한 검색결과</span>
        </styled.SearchTextbox>
      ) : null}
      {typeof totalData === "number" ? (
        <>
          <SortingUtils totalData={totalData} setSortBy={setSortBy} />
          <AlcoholList
            data={data}
            totalData={totalData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            size={size}
          />
        </>
      ) : null}
    </styled.AlcoholContainer>
  );
};

export default Alcohol;
