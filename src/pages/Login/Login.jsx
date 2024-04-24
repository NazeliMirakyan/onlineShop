import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import style from "./Login.module.css";
import logo from "../../assets/images/logo.png";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <header className={style.navbar}>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.pages}>
          <Menu />
        </div>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
