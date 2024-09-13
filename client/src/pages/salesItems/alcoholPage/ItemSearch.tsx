import { useEffect, useState } from "react";
import * as styled from "../styles";
import { BsSearch } from "react-icons/bs";
import { getItemSearch } from "@utils/api";
import { AlcoholListData, SearchProps } from "@utils/types";

const ItemSearch = ({ setSearchWord, setData, currentPage, setTotalData, size }: SearchProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<AlcoholListData[] | null>(null);
  const [searchTotal, setSearchTotal] = useState<number>(0);

  useEffect(() => {
    const fecthData = async () => {
      if (searchInput !== "") {
        try {
          const res = await getItemSearch(currentPage, size, searchInput);

          setSearchResult(res.data.data);
          setSearchTotal(res.data.pageInfo.totalElements);
        } catch {}
      }
    };
    fecthData();
  }, [searchInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearchItem();
  };

  const handlePreviewOnclick = (item: AlcoholListData) => {
    setTotalData([item].length);
    setData([item]);
    setSearchInput("");
    setSearchResult(null);
    setSearchWord(item.titleKor);
  };

  const handleSearchItem = () => {
    setData(searchResult);
    setTotalData(searchTotal);
    setSearchWord(searchInput);
    setSearchInput("");
    setSearchResult(null);
  };

  return (
    <styled.ItemSearchContainer>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="원하는 주류를 검색하세요." value={searchInput} onChange={handleInputChange} />
        <button type="submit">
          <BsSearch size={20} color={"#181818"} onClick={handleSearchItem} />
        </button>
      </form>
      <styled.SearchResultList>
        {searchResult &&
          searchResult.map((item, idx) => (
            <styled.SearchResultItem key={idx} onClick={() => handlePreviewOnclick(item)}>
              {item.titleKor}
            </styled.SearchResultItem>
          ))}
      </styled.SearchResultList>
    </styled.ItemSearchContainer>
  );
};

export default ItemSearch;
