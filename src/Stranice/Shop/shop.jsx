import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.style.css";
import ITEMS from "../../shop-data.json";
import Kartice from "../../Komponente/Kartice/kartice";
const Shop = () => {
  const { items } = useContext(ShopContext);

  return (
    <div className="all-cards-container">
      {items.map((item) => (
        <Kartice item={item} />
      ))}
    </div>
  );
};
export default Shop;
