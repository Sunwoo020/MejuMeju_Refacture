import { useEffect, useState } from "react";
import * as Type from "../interface";

export const useScroll = (): Type.ScrollState => {
  const [state, setState] = useState<Type.ScrollState>({ x: 0, y: 0 });

  const onScroll = (): void => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};
