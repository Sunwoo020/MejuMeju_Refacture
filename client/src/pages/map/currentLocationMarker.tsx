import { useEffect } from "react";
import * as Type from "./util";
import { displayMarker } from "./util/mapUtil";

interface CurrentLocationMarkerProps {
  map: Type.Map;
}

const CurrentLocationMarker: React.FC<CurrentLocationMarkerProps> = ({ map }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude,
          lon = position.coords.longitude;
        const locPosition = new window.kakao.maps.LatLng(lat, lon),
          message = "<div>현재위치</div>";

        displayMarker(map, locPosition, message);
      });
    } else {
      const locPosition = new window.kakao.maps.LatLng(37.57022168346011, 126.98314742271637),
        message = "<div>여기아니에요</div>";
      displayMarker(map, locPosition, message);
    }
  }, [map]);

  return null;
};

export default CurrentLocationMarker;
