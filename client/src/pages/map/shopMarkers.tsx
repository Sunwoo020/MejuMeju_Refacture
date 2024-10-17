import { useEffect } from "react";
import * as Type from "./interface";

interface ShopMarkersProps {
  map: Type.Map;
  shoplist: Type.Shopitem[];
  setSelect: (el: Type.Shopitem) => void;
}

const ShopMarkers: React.FC<ShopMarkersProps> = ({ map, shoplist, setSelect }) => {
  useEffect(() => {
    shoplist.forEach((el) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        data: el,
      });

      const content =
        '<div className="overlayContainer" style="background-color: white; border:3px solid black">' +
        `<div style="color: black;" >${el.name}</div>` +
        `<div className="shopPhone">${el.phone}</div>` +
        "</div>";

      const customOverlay = new window.kakao.maps.CustomOverlay({
        content: content,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
      });

      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        customOverlay.setMap(map);
      });

      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        customOverlay.setMap(null);
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        setSelect(el);
      });
    });
  }, [map, shoplist, setSelect]);

  return null;
};

export default ShopMarkers;
