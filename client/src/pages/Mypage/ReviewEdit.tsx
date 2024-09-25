import { useEffect, useState } from "react";
import { MdRateReview } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { RequestData } from "@utils/types/AlcholInterfaces";
import { createItemReview, getReviewDetail, updateItemReview, getItem } from "@utils/api";
import Alert from "@components/common/AlertModal";
import { ButtonLight } from "@components/common/Button";
import * as styled from "./style";

const ReviewEdit = () => {
  const location = useLocation();
  const reviewCreate = location.state.reviewCreate ?? null;
  const reviewUpdate = location.state.reviewUpdate ?? null;

  const navigate = useNavigate();
  const [itemImg, setItemImg] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");

  const mode: string = reviewUpdate?.mode || "create";
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemId = reviewUpdate?.itemId ?? reviewCreate?.itemId;

        if (itemId === null || itemId === undefined) {
          console.log("err");
          return;
        }

        const resItem = await getItem(itemId);
        const itemData = resItem.data.data;
        setItemImg(itemData.profile);
        setItemName(itemData.titleKor);

        if (reviewUpdate && reviewUpdate.reviewId !== null) {
          const resReview = await getReviewDetail(reviewUpdate.itemId, reviewUpdate.reviewId);
          const reviewData = resReview.data.data;

          setTitle(reviewData.title);
          setContent(reviewData.content);
          setRating(reviewData.rating);
          setExistingImages(reviewData.reviewImages || []);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [reviewCreate, reviewUpdate]);

  const handleSubmit = async () => {
    try {
      if (!title || !content || !rating) {
        alert("후기 내용을 전부 다 입력해주세요.");
        return;
      }
      const formData = new FormData();

      if (selectedImages.length >= 1) {
        for (let i = 0; i < selectedImages.length; i++) {
          formData.append("file", selectedImages[i]);
        }
      }

      const requestBody: RequestData = {
        title,
        content,
        rating,
      };

      formData.append("requestBody", new Blob([JSON.stringify(requestBody)], { type: "application/json" }));

      if (mode === "create") {
        await createItemReview(reviewCreate.itemId, formData);
        navigate(`/alcohol/detail/${reviewCreate.itemId}`);
      } else if (mode === "edit" && reviewUpdate) {
        await updateItemReview(reviewUpdate.itemId, reviewUpdate.reviewId, formData);
        navigate(`/alcohol/detail/${reviewUpdate.itemId}`);
      }
      setIsModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileList = Array.from(files || []);

    if (selectedImages.length + fileList.length > 3) {
      alert("파일은 최대 3까지 추가가 가능합니다.");
      return;
    }
    if (fileList.length > 0) {
      setSelectedImages((prevImages) => [...prevImages, ...fileList]);
    }
    e.target.value = "";
  };

  const handleImageRemove = (idx: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== idx));
  };

  const handleCancelForm = (): void => {
    navigate("/");
  };

  return (
    <>
      <styled.ReviewEditContaienr className="main">
        <styled.ReviewFormBox>
          <form>
            <div className="review_intake_box">
              <MdRateReview size="32" color="#eebf78" />
              <h3>상품 리뷰 {mode === "edit" ? "수정" : "쓰기"}</h3>
            </div>
            <div className="item_info_box">
              <img src={itemImg} />
              <div className="review_cell">
                <span className="item_name">{itemName}</span>
                <div className="review_rating">
                  {[...Array(5)].map((_, idx) => (
                    <button type="button" key={idx} onClick={() => setRating(idx + 1)}>
                      <FaStar size="32" color={rating >= idx + 1 ? "#e48b48" : "#e4e5e9"} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <styled.ReviewContentBox>
              <div className="content_title">리뷰제목</div>
              <div className="content_input">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
            </styled.ReviewContentBox>
            <styled.ReviewContentBox>
              <div className="content_title">상세리뷰</div>
              <div className="content_input">
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                <p>상품 품질과 관계 없는 내용은 삭제될 수 있습니다.</p>
              </div>
            </styled.ReviewContentBox>
            <styled.ReviewContentBox>
              <div className="content_title">사진첨부</div>
              <div className="content_input">
                <p className="photo_info">사진은 최대 3개까지 첨부 가능합니다.</p>
                {mode !== "create" && (
                  <p className="photo_edit">(사진을 새로 추가할 경우, 기존에 업로드한 사진은 삭제됩니다.)</p>
                )}
                <label htmlFor="file_upload" className="img_upload_btn">
                  File Upload
                </label>
                <input id="file_upload" type="file" style={{ display: "none" }} multiple onChange={handleImageUpload} />
                <div className="file_box">
                  {selectedImages.length === 0
                    ? existingImages.map((imgUrl, idx) => (
                        <div className="img_box" key={idx}>
                          <img src={imgUrl} alt={`existing image ${idx}`} />
                        </div>
                      ))
                    : selectedImages.map((img, idx) => (
                        <div className="img_box" key={idx + existingImages.length}>
                          <img src={URL.createObjectURL(img)} alt={`image upload ${idx}`} />
                          <button type="button" onClick={() => handleImageRemove(idx)}>
                            이미지 삭제
                          </button>
                        </div>
                      ))}
                </div>
              </div>
            </styled.ReviewContentBox>
            <styled.ConfirmBtnBox>
              <div className="cancel_btn">
                <ButtonLight width="100%" height="100%" fontSize="14px" fontWeight="500" onClick={handleCancelForm}>
                  취소하기
                </ButtonLight>
              </div>
              <div className="confirm_btn" onClick={() => setIsModal(true)}>
                <button type="button">{mode === "edit" ? "수정하기" : "등록하기"}</button>
              </div>
            </styled.ConfirmBtnBox>
          </form>
        </styled.ReviewFormBox>
      </styled.ReviewEditContaienr>
      {isModal && (
        <Alert
          text={`${mode === "edit" ? "리뷰를 수정" : "리뷰를 등록"}하시겠습니까?`}
          onClickCancel={() => setIsModal(false)}
          onClickOk={handleSubmit}
        />
      )}
    </>
  );
};

export default ReviewEdit;
