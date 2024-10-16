import styled, { css } from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";
import * as Type from "@utils/types";

const sharedStarStyles = css<{ size?: number }>`
  font-size: ${(props) => props.size || 16}px;

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    font-size: 12px;
  }
`;

const StyledFaStar = styled(FaStar)`
  ${sharedStarStyles}
`;

const StyledFaStarHalf = styled(FaStarHalf)`
  ${sharedStarStyles}
`;

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
