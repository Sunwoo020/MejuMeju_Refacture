export interface LatLng {
  getLat: () => number;
  getLng: () => number;
}
export interface MapOptions {
  center: LatLng;
  level: number;
}
export interface Map {
  setCenter: (latlng: LatLng) => void;
}
export interface MarkerOptions {
  map: Map;
  position: LatLng;
  data?: string | object;
}
export interface Marker {
  setMap: (map: Map | null) => void;
}
export interface InfoWindowOptions {
  content: string | HTMLElement;
  removable?: boolean;
}
export interface InfoWindow {
  open: (map: Map, marker: Marker) => void;
  close: () => void;
}
export interface CustomOverlayOptions {
  content: string | HTMLElement;
  position: LatLng;
}
export interface CustomOverlay {
  setMap: (map: Map | null) => void;
}

export interface Shopitem {
  address: string;
  choice: boolean;
  comment: string;
  lat: number;
  lng: number;
  marketId: number;
  name: string;
  phone: string;
  workTime: string;
}
export interface ShopProps {
  shoplist: Shopitem[];
  setSelect: React.Dispatch<React.SetStateAction<Shopitem | null>>;
}
declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLng;
        Map: new (container: HTMLElement | null, options: MapOptions) => Map;
        Marker: new (options: MarkerOptions) => Marker;
        CustomOverlay: new (options: CustomOverlayOptions) => CustomOverlay;
        InfoWindow: new (options: InfoWindowOptions) => InfoWindow; // 추가된 부분
        event: {
          addListener: (target: Marker | Map, type: string, callback: () => void) => void;
        };
      };
    };
  }
}
