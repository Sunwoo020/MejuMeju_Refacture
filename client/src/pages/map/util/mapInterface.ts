import * as Type from "./";
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
        LatLng: new (lat: number, lng: number) => Type.LatLng;
        Map: new (container: HTMLElement | null, options: Type.MapOptions) => Type.Map;
        Marker: new (options: Type.MarkerOptions) => Type.Marker;
        CustomOverlay: new (options: Type.CustomOverlayOptions) => Type.CustomOverlay;
        event: {
          addListener: (target: Type.Marker | Type.Map, type: string, callback: () => void) => void;
        };
      };
    };
  }
}
