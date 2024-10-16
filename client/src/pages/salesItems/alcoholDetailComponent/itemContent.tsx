import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { AlcoholListData } from "@utils/types";
import { getItemsList } from "@utils/api";
import AlcoholListItem from "@pages/salesItems/alcoholPage/AlcoholListItem";
import * as Type from "../util";
import * as styled from "../styles";

export const AlcoholItemContent = ({ data }: Type.ItemDatailProps) => {
  const [itemData, setItemData] = useState<AlcoholListData[] | null>(null);
  const scrollRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getItemsList(1, 12, "latest", data.categories[0]);
        setItemData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [data.categories]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const handleClickItem = (id: number): void => {
    window.location.href = `/alcohol/detail/${id}`;
  };

  return (
    <styled.AlcoholItemContainer>
      <styled.ReviewTitleBox>
        <h2 className="content_titletext">DETAIL</h2>
      </styled.ReviewTitleBox>
      <div className="detail_box">
        <styled.AlcoholListBox>
          <div>
            <p className="content_datail_title">TASTING NOTES</p>
            <ul className="content_text_box">
              <li>
                <div className="content_note_bold">Aroma</div>
                <div className="content_detail_text">{data.aroma}</div>
              </li>
              <li>
                <div className="content_note_bold">Taste</div>
                <div className="content_detail_text">{data.taste}</div>
              </li>
              <li>
                <div className="content_note_bold">Finish</div>
                <div className="content_detail_text">{data.field}</div>
              </li>
            </ul>
          </div>
          <div>
            <p className="content_datail_title">INFORMATION</p>
            <ul className="content_text_box">
              <li>
                <div className="content_info_bold">Category</div>
                {data.categories.map((item, idx) => (
                  <div key={idx} className="content_detail_text">
                    {item}
                    {idx < data.categories.length - 1 ? ", " : ""}
                  </div>
                ))}
              </li>
              <li>
                <div className="content_info_bold">Volume</div>
                <div className="content_detail_text">{data.capacity}ml</div>
              </li>
              <li>
                <div className="content_info_bold">ABV</div>
                <div className="content_detail_text">{data.volume}%</div>
              </li>
              <li>
                <div className="content_info_bold">Country</div>
                <div className="content_detail_text">{data.country}</div>
              </li>
            </ul>
          </div>
        </styled.AlcoholListBox>
        <styled.DetailInfoBox>
          <div className="info_img_box">
            <img src={`${data.detailedProfile}?${new Date().getTime()}`} alt="description" />
          </div>
        </styled.DetailInfoBox>
        <styled.SuggestionTitle>
          <h2 className="content_titletext">이런 상품은 어때요?</h2>
        </styled.SuggestionTitle>
        {itemData && (
          <styled.ScrollContainer>
            {itemData.length >= 5 && (
              <styled.ScrollBtn onClick={() => handleScroll("left")}>
                <FaArrowAltCircleLeft size={45} color="lightgray" />
              </styled.ScrollBtn>
            )}
            <styled.SuggestionBox ref={scrollRef}>
              {itemData.map((item) => (
                <li key={item.itemId} onClick={() => handleClickItem(item.itemId)}>
                  <AlcoholListItem item={item} />
                </li>
              ))}
            </styled.SuggestionBox>
            {itemData.length >= 4 && (
              <styled.ScrollBtn onClick={() => handleScroll("right")}>
                <FaArrowAltCircleRight size={45} color="lightgray" />
              </styled.ScrollBtn>
            )}
          </styled.ScrollContainer>
        )}
      </div>
    </styled.AlcoholItemContainer>
  );
};

export default AlcoholItemContent;
