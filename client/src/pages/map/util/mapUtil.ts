import * as Type from "./";

export const initializeMap = (): Type.Map => {
  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(37.32569664033685, 127.10734442799804),
    level: 8,
  };
  return new window.kakao.maps.Map(container, options);
};

export const displayMarker = (map: Type.Map, locPosition: Type.LatLng, message: string) => {
  const marker = new window.kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  const infowindow = new window.kakao.maps.InfoWindow({
    content: message,
    removable: true,
  });
  infowindow.open(map, marker);
  map.setCenter(locPosition);
};
