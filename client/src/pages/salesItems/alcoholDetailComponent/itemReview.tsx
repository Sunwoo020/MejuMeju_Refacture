import { useState, useEffect } from "react";
import { BsArrowDownLeftCircleFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import { ItemReviewsType } from "@utils/types";
import { getItemReview } from "@utils/api";
import ReviewList from "@pages/salesItems/alcoholDetailComponent/reviewList";
import { ItemReviewsProps } from "../interface";
import * as styled from "../styles";

const AlcoholItemReview = ({ itemId }: ItemReviewsProps) => {
  const [reviews, setReviews] = useState<ItemReviewsType[] | null>(null);
  const [isReviewAll, setIsReviewALL] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getItemReview(itemId);
      try {
        setReviews(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const HandlerReviewAll = () => {
    setIsReviewALL(!isReviewAll);
  };

  return (
    <styled.AlcoholDetailContainer>
      <styled.ReviewTitleBox>
        <h2 className="review_titletext">REVIEW</h2>
        <button onClick={HandlerReviewAll}>
          <span>ALL</span>
          {!isReviewAll ? (
            <BsArrowUpRightCircleFill size={18} color={"#181818"} />
          ) : (
            <BsArrowDownLeftCircleFill size={18} color={"#181818"} />
          )}
        </button>
      </styled.ReviewTitleBox>
      {!isReviewAll ? (
        <>
          {reviews && reviews.length !== 0 ? (
            <ul>
              {reviews.slice(0, 3).map((item: ItemReviewsType) => (
                <li className="item_review_box" key={item.reviewId}>
                  {item.reviewImages.length > 0 ? (
                    <>
                      <div className="item_review_img">
                        <img src={item.reviewImages[0]} />
                      </div>
                      <div className="item_reivew_content">
                        <h4 className="review_content_title">{item.title}</h4>
                        <p className="review_content review_content_img">{item.content}</p>
                      </div>
                    </>
                  ) : (
                    <div className="review_only_text">
                      <h4 className="review_content_title">{item.title}</h4>
                      <p className="review_content review_content_text">{item.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="review_no">
              <p>작성된 리뷰가 없습니다.</p>
            </div>
          )}
        </>
      ) : reviews ? (
        <ReviewList reviews={reviews} itemId={itemId} />
      ) : null}
    </styled.AlcoholDetailContainer>
  );
};

export default AlcoholItemReview;
