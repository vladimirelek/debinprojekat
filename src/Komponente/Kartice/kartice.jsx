import "./kartice.style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
const Kartice = ({ item }) => {
  const { setCartItems, cartItems } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="card-container">
      <h1>{item.name}</h1>
      <div className="image-container">
        <img src={item.imageUrl} alt="nema slike" />
      </div>
      <h2>CIJENA:{item.price}$</h2>
      <button className="button">Dodaj u korpu</button>
    </div>
  );
};
export default Kartice;
