import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItemReview } from "@utils/api";
import ReviewEdit from "@pages/myPage/ReviewEdit";
import { FormattedDate } from "@utils/dateUtils";
import Alert from "@components/common/AlertModal";
import ReviewRating from "@components/common/ReviewRating";
import * as Type from "../util";
import * as styled from "../styles";

const ReviewList = ({ reviews, itemId }: Type.ItemReviewListProps) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("memberId");
  const [isEditing, setIsEditing] = useState<Record<number, boolean>>({});
  const [isModal, setIsModal] = useState<Record<number, boolean>>({});

  const HandleUpdateReview = (reviewId: number): void => {
    setIsEditing((prevState) => ({ ...prevState, [reviewId]: true }));

    const reviewUpdate: Type.ReveiwUpdateProps = {
      mode: "edit",
      itemId,
      reviewId,
    };

    navigate(`/review/edit/${itemId}`, {
      state: { reviewUpdate },
    });
  };

  const HandleDeleteReview = async (reviewId: number) => {
    setIsModal((prevState) => ({ ...prevState, [reviewId]: true }));

    await deleteItemReview(itemId, reviewId);
    window.location.href = `/alcohol/detail/${itemId}`;
  };

  return (
    <styled.ReviewListContainer>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.reviewId}>
              <div className="review_title">
                <div>
                  <span className="font_small">{review.displayName}</span>
                  <span className="gap">|</span>
                  <span className="font_small">{FormattedDate(review.createdAt)}</span>
                  <span className="gap">|</span>
                  <ReviewRating size={15} reviewRating={review.rating} />
                </div>
                <div>
                  {userId === review.memberId.toString() && !isEditing[review.reviewId] && (
                    <button className="review_update" onClick={() => HandleUpdateReview(review.reviewId)}>
                      수정
                    </button>
                  )}
                  {userId === "1" || userId === review.memberId.toString() ? (
                    <button
                      className="review_delete"
                      onClick={() => setIsModal((prevState) => ({ ...prevState, [review.reviewId]: true }))}
                    >
                      삭제
                    </button>
                  ) : null}
                  {isModal[review.reviewId] && (
                    <Alert
                      text={`리뷰를 삭제하시겠습니까?`}
                      onClickCancel={() => setIsModal((prevState) => ({ ...prevState, [review.reviewId]: false }))}
                      onClickOk={() => HandleDeleteReview(review.reviewId)}
                    />
                  )}
                </div>
              </div>
              <div className="review_content">
                {review.reviewImages ? (
                  <>
                    <p className="content_title">{review.title}</p>
                    <div className="review_img">
                      {review.reviewImages.map((image, idx) => (
                        <img src={image} key={idx} />
                      ))}
                    </div>
                    {!isEditing[review.reviewId] ? <p>{review.content}</p> : <ReviewEdit />}
                  </>
                ) : (
                  <>
                    <p className="content_title">{review.title}</p>
                    {!isEditing[review.reviewId] ? <p>{review.content}</p> : <ReviewEdit />}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="review_no">
          <p>작성된 리뷰가 없습니다.</p>
        </div>
      )}
    </styled.ReviewListContainer>
  );
};

export default ReviewList;
