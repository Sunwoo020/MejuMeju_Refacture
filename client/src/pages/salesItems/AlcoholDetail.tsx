import React, { useState, useEffect } from "react";
import * as styled from "./styles";
import { getItem } from "../../utils/api";
import { AlcoholData } from "../../utils/types/alcoholInterface";
import { useParams } from "react-router-dom";
import AlcoholItemBuy from "./alcoholDetailComponent/itemBuy";
import AlcoholItemReview from "./alcoholDetailComponent/itemReview";
import AlcoholItemContent from "./alcoholDetailComponent/itemContent";

const AlcoholDetail = () => {
  const { id } = useParams<string>();
  const [data, setData] = useState<AlcoholData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getItem(Number(id));
      try {
        const { data } = response;

        setData(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <styled.AlcoholDetailContainer className="main">
      {data && (
        <>
          <AlcoholItemBuy data={data} />
          <AlcoholItemReview itemId={data.itemId} reviewRating={data.reviewRating}></AlcoholItemReview>
          <AlcoholItemContent data={data} />
        </>
      )}
    </styled.AlcoholDetailContainer>
  );
};

export default AlcoholDetail;
