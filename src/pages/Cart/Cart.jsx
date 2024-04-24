import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import style from "./Cart.module.css";

import logo from "../../assets/images/logo.png";
import { adjustQty, deleteFromBasket } from "../../redux/actions/basketActions";
import OrderDetails from "./OrderDetails/OrderDetails";
import Menu from "../Menu/Menu";

const Cart = () => {
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basketReducer.basketList);

  const handlePlus = (id, quantity) => {
    dispatch(adjustQty(id, quantity + 1));
  };

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(adjustQty(id, quantity - 1));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteFromBasket(id));
  };

  return (
    <>
      <header className={style.navbar}>
        <div className={style.logo}>
          <Link to="/" className={style.page}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.pages}>
          <Menu/>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.cart_container}>
          <div className={style.basket_title}>
            <h3>{basketList.length === 0 ? "Your Basket is empty" : "Your Basket"}</h3>
          </div>
          {basketList.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <OrderDetails />
      </div>
    </>
  );
};

export default Cart;
