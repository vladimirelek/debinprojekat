import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Korpa from "../../Komponente/Korpa/korpa";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./navbar.style.css";
const NavBar = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const funkcija = () => setIsCartOpen(!isCartOpen);
  return (
    <Fragment>
      <div className="navigation-container">
        <div className="nav-titles">
          <Link className="nav-title" to={"/"}>
            LOGO
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/auth"}>
            LOGIN
          </Link>
          <Link className="nav-link" onClick={funkcija}>
            KORPA
          </Link>
        </div>
      </div>
      {isCartOpen && <Korpa />}
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
