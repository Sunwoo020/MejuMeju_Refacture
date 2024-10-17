import * as styled from "../styles";
import ReviewRating from "@components/common/reviewRating";
import PriceDisplay from "@components/common/priceDisplay";
import * as Type from "../interface";

const AlcoholListItem = ({ item }: Type.ItemProps) => {
  return (
    <styled.AlcoholItemContainer>
      <div className="item_img">
        <img src={`${item.profile}?${new Date().getTime()}`} />
      </div>
      <div className="item_content">
        <p className="item_title">{item.titleKor}</p>
        <div>
          <span className="item_discount_rate">{item.discountRate}%</span>
          <span className="item_price">
            <PriceDisplay price={item.price} />원
          </span>
        </div>
        <div className="item_review_rating">
          <ReviewRating size={16} reviewRating={item.reviewRating} />
          <p>({item.reviewCount})</p>
        </div>
      </div>
    </styled.AlcoholItemContainer>
  );
};

export default AlcoholListItem;
