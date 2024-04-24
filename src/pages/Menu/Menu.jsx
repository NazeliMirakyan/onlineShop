import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { faCartShopping, faUser, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Menu.module.css";

const Menu = () => {
  const quantity = useSelector((state) => state.basketReducer.itemQuantity);

  return (
    <div className={style.menu}>
      <NavLinkItem to="/login" icon={faUser} />
      <NavLinkItem to="/questions" icon={faCircleQuestion} />
      <BasketLink quantity={quantity} />
      <Outlet />
    </div>
  );
};

const NavLinkItem = ({ to, icon }) => (
  <Link to={to} className={style.page}>
    <FontAwesomeIcon icon={icon} />
  </Link>
);

const BasketLink = ({ quantity }) => (
  <Link to="/cart" className={style.basket}>
    <p className={style.items_count}>{quantity}</p>
    <FontAwesomeIcon icon={faCartShopping} className={style.basket_icon} />
  </Link>
);

export default Menu;
