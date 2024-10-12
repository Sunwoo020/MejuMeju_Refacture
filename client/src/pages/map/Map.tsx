import { useEffect, useState } from "react";
import { initializeMap } from "./util/mapUtil";
import CurrentLocationMarker from "./currentLocationMarker";
import ShopMarkers from "./shopMarkers";
import * as Type from "./util";

const MapContainer = ({ shoplist, setSelect }: Type.ShopProps) => {
  const [map, setMap] = useState<Type.Map | null>(null);

  useEffect(() => {
    const mapInstance = initializeMap();
    setMap(mapInstance);
  }, []);

  return (
    <div id="map" style={{ width: "800px", height: "500px" }}>
      {map && (
        <>
          <CurrentLocationMarker map={map} /> {/* 현재 위치 마커 */}
          <ShopMarkers map={map} shoplist={shoplist} setSelect={setSelect} /> {/* 가게 마커 */}
        </>
      )}
    </div>
  );
};

export default MapContainer;
