import style from "./Cart.module.css";

const CartItem = ({ item, handlePlus, handleMinus, handleDelete }) => {
  return (
    <div className={style.item}>
      <div className={style.img_container}>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className={style.text}>
        <p className={style.title}>{item.title}</p>
        <p className={style.price}>price: {item.price} $</p>
      </div>
      <div className={style.qty_container}>
        <div className={style.item_qty}>
          <p
            className={style.item_plus}
            onClick={() => handlePlus(item.id, item.quantity)}
          >
            +
          </p>
          <p className={style.item_count}>{item.quantity}</p>
          <p
            className={style.item_minus}
            onClick={() => handleMinus(item.id, item.quantity)}
          >
            -
          </p>
        </div>
      </div>
      <div className={style.sum}>{item.price * item.quantity} $</div>
      <div className={style.delete} onClick={() => handleDelete(item.id)}>
        X
      </div>
    </div>
  );
};

export default CartItem;
