import "./korpa.style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CartItems from "../CartItems/cartitems";
const Korpa = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-container">
      <h1>artikall</h1>
    </div>
  );
};
export default Korpa;
