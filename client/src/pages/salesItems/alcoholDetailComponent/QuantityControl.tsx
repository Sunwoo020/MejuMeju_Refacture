import * as styled from "../styles";
import { QuantityProps } from "../interface";

const QuantityControl = ({ quantity, maxQuantity, onQuantityChange }: QuantityProps) => {
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);

    if (maxQuantity >= newQuantity) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <styled.QuantityControlBox>
      <button className={quantity > 1 ? "quantity_btn" : "quantity_btn decrement "} onClick={handleDecrement}>
        -
      </button>
      <div className="input_box">
        <input className="quantity_input" type="number" value={quantity} onChange={handleQuantityChange} />
      </div>
      <button className={quantity < maxQuantity ? "quantity_btn" : "quantity_btn decrement "} onClick={handleIncrement}>
        +
      </button>
    </styled.QuantityControlBox>
  );
};

export default QuantityControl;
