import { useState, useEffect, useCallback } from "react";
import { IconType } from "react-icons";
import { getItemLike, createItemLike, deleteItemLike } from "@utils/api";
import { useNavigate } from "react-router-dom";

interface ClickFavoriteCProps {
  itemId: number;
  icon: IconType;
  color: string;
  activeColor: string;
  size: number;
}

const ClickFavoriteItem = ({ itemId, icon: Icon, color, activeColor, size }: ClickFavoriteCProps) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const currentDateNum: number = Math.floor(new Date().getTime() / 1000);
  const expDataNum: number | null = Number(localStorage.getItem("exp"));

  const isLoggedIn = expDataNum && expDataNum > currentDateNum;

  useEffect(() => {
    isLoggedIn && fetchData();
  }, [isLoggedIn]);

  const fetchData = useCallback(async () => {
    try {
      const response = await getItemLike(itemId);
      setIsFavorited(response.data.data.like);
    } catch (err) {
      console.log(err);
    }
  }, [itemId]);

  const handleFavoriteToggle = () => {
    isLoggedIn ? (isFavorited ? deleteItemLike(itemId) : createItemLike(itemId)) : navigate("/login");

    isLoggedIn && setIsFavorited(!isFavorited);
  };

  return (
    <Icon
      onClick={handleFavoriteToggle}
      style={{ color: isFavorited ? activeColor : color, cursor: "pointer" }}
      size={size}
    />
  );
};

export default ClickFavoriteItem;
