import { Link } from "react-router-dom";
import style from './Products.module.css';

const ProductItem = ({ item, handleAddToBasket }) => (
    <div className={style.product}>
      <img src={item.thumbnail} alt={item.title} />
      <p className={style.title}>{item.title}</p>
      <p className={style.price}>Price: {item.price}$</p>
      <div className={style.buttons}>
        <Link to={`/${item.id}`}>
          <button className={style.blue_button}>Details</button>
        </Link>
        <button className={style.purple_button} onClick={() => handleAddToBasket(item)}>
          Add to Basket
        </button>
      </div>
    </div>
  );
  export default ProductItem