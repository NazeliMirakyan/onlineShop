import Slider from "react-slick";
import { bannersData } from "../../data/bannersData";
import { settings } from "../../constants/sliderSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";

const Banner = () => {
  return(
    <Slider {...settings}>
      {bannersData.map((banner, index) => (
        <div key={index} className={style.banner}>
          <div className={style.text_container}>
            <h4 className={style.banner_title}>{banner.title}</h4>
            <p className={style.banner_text}>{banner.text}</p>
          </div>
          <div className={style.img_container}>
            <img src={banner.image} alt={`Banner ${index + 1}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
