import * as styled from "../styles";
import { AlcoholListProps } from "@utils/types/alcoholInterface";
import { Link } from "react-router-dom";
import AlcoholListItem from "@pages/salesItems/alcoholPage/alcoholListItem";
import Pagination from "@pages/salesItems/alcoholPage/pagination";

const AlcoholList = ({ data, totalData, currentPage, setCurrentPage, size }: AlcoholListProps) => {
  return (
    <styled.AlcoholListContainer>
      {data && (
        <styled.AlcoholListBox>
          {data.map((item) => (
            <li key={item.itemId}>
              <Link to={`/alcohol/detail/${item.itemId}`}>
                <AlcoholListItem item={item} />
              </Link>
            </li>
          ))}
        </styled.AlcoholListBox>
      )}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={size} totalData={totalData} />
    </styled.AlcoholListContainer>
  );
};

export default AlcoholList;
