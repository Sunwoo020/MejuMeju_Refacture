import { RefObject, useState } from "react";
import { useEventListener } from "usehooks-ts";

function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener("mouseenter", () => setIsHovered(true), elementRef);
  useEventListener("mouseleave", () => setIsHovered(false), elementRef);

  return isHovered;
}

export default useHover;
