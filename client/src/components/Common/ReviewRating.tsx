import { StyledFaStar, StyledFaStarHalf } from "./styles";
import * as Type from "@utils/types";

const ReviewRating = ({ reviewRating, size = 16 }: Type.reviewRatingProps) => {
  return (
    <>
      {[...Array(5)].map((_, index) =>
        index < reviewRating ? (
          index < Math.floor(reviewRating) ? (
            <StyledFaStar key={index} size={size} color="#e48b48" style={{ marginRight: 2 }} />
          ) : (
            <StyledFaStarHalf key={index} size={size} color="#e48b48" style={{ marginRight: 2 }} />
          )
        ) : (
          <StyledFaStar key={index} size={size} color="#e4e5e9" style={{ marginRight: 2 }} />
        ),
      )}
    </>
  );
};

export default ReviewRating;
