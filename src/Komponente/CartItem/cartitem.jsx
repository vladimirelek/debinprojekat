import "./cartitem.style.css";
const CartItem = ({ item }) => {
  return (
    <div className="kontenjer">
      <div className="podaci">
        <h1 className="ime-artikla">{item.name}</h1>
        <p className="ostali-podaci">
          Cijena:{item.price}$ x {item.quantity}
        </p>
      </div>

      <img
        className="slika"
        src={item.imageUrl}
        alt="deba zlato nema slike"
      ></img>
    </div>
  );
};
export default CartItem;
