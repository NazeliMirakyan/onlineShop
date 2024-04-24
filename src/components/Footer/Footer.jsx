import style from "./Footer.module.css";
import { paymentIcons } from "../../data/paymentIconsData";
import { socialLinks } from "../../data/socialLinksData";

const Footer = () => {
  const renderSocialLinks = () => (
    <ul>
      {socialLinks.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );

  const renderPaymentIcons = () => (
    <ul>
      {paymentIcons.map((icon, index) => (
        <li key={index}>
          <img src={icon} alt="" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={style.footerContainer}>
      <div className={style.container}>
        <div className={style.socialList}>{renderSocialLinks()}</div>
        <div className={style.socialList}>{renderPaymentIcons()}</div>
      </div>
      <p className={style.footerTitle}>© 2035 Caraft.</p>
    </div>
  );
};

export default Footer;