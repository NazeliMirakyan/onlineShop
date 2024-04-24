import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import style from "./SingleProduct.module.css";
import { addToBasket } from "../../redux/actions/basketActions";
import { getSingleProduct } from "../../redux/middleware";
import Menu from "../Menu/Menu";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleItem = useSelector((state) => state.productReducer.singleItem);

  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getSingleProduct(id))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, id]);

  const changeImg = (img) => {
    setImg(img);
  };

  const handleAddToBasket = (item) => {
    dispatch(addToBasket(item));
    toast(`${item.title} has been added to your basket!`)
  };

  if (loading) {
    return (
      <div className={style.loaderContainer}>
        <ClipLoader className={style.loader} size={100} color='#5334df'/>
      </div>
    );
  }

  return (
    <>
      <header className={style.navbar}>
        <div className={style.logo}>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.pages}>
          <Menu />
        </div>
      </header>
      <div className={style.single_product_container}>
        <h3>{singleItem.title}</h3>
        <div className={style.single_item}>
          <div className={style.img_container}>
            <img src={!img ? singleItem.thumbnail : img} alt="" />
            <div className={style.slider_images}>
              {singleItem.images &&
                singleItem.images.map((img) => (
                  <div key={img} onClick={() => changeImg(img)}>
                    <img src={img} alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className={style.text_container}>
            <p className={style.description}>description</p>
            <p className={style.item_description}>{singleItem.description}</p>
            <p>
              <b>Price:</b> {singleItem.price}$
            </p>
            <p>
              <b>Rating:</b> {singleItem.rating}
            </p>
            <button
              className={style.purple_button}
              onClick={() => handleAddToBasket(singleItem)}
            >
              add to basket
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default SingleProduct;
