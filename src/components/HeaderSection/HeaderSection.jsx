import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import Slider from "./Slider";
import Category from "../CategorySection/Category";
import Menu from "../../pages/Menu/Menu";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.header_section}>
      <div className={style.navbar}>
        <LogoLink isOpen={isOpen} toggleCategoryMenu={toggleCategoryMenu} />
        <div className={style.pages}>
          <Menu/>
        </div>
      </div>
      {isOpen && <Category setIsOpen={setIsOpen} />}

      <div className={style.container}>
        <Slider />
      </div>
    </header>
  );
};

const LogoLink = ({ isOpen, toggleCategoryMenu }) => {
  return (
    <div className={style.logo}>
      <Link to="/" className={style.page}>
        <img src={logo} alt="Logo" />
      </Link>
      <div className={style.categories} onClick={toggleCategoryMenu}>
        <FontAwesomeIcon icon={isOpen ? faClose : faList} />
      </div>
    </div>
  );
};

export default HeaderSection;
