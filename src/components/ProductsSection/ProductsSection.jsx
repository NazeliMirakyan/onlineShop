import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { addToBasket } from "../../redux/actions/basketActions";
import { getProducts } from "../../redux/middleware";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Products.module.css";

const ProductsSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.productList);
  const categoryList = useSelector((store) => store.productReducer.categoryList);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const list = categoryList.length === 0 ? products : categoryList;
 
  const handleAddToBasket = (item) => {
    dispatch(addToBasket(item));
    toast(`${item.title} has been added to your basket!`);
  };

  return (
    <div className={style.container}>
      <div className={style.products_container}>
        {list.length !== 0 &&
          list.products.map((item) => (
            <ProductItem key={item.id} item={item} handleAddToBasket={handleAddToBasket} />
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsSection;
