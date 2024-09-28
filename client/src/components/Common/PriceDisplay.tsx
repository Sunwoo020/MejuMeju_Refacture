import { PriceRegular } from "@utils/priceUtils";
import * as Type from "@utils/types";

const PriceDisplay = ({ price }: Type.PriceType) => {
  return <>{PriceRegular(price)}</>;
};

export default PriceDisplay;
