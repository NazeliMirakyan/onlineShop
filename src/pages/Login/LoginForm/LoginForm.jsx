import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./LoginForm.module.css";
import google from "../../../assets/images/google.png";
import apple from "../../../assets/images/apple.png";
import facebook from "../../../assets/images/facebook.png";

const SocialLink = ({ link, image, text }) => (
  <Link to={link} className={style.social_link}>
    <div className={style.social_link_container}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  </Link>
);

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      setMessageType("error-message");
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error-message");
    } else {
      setMessage("Sign-in successful!");
      setMessageType("success-message");
    }
  };
  return (
    <div className={style.signin_container}>
      <div className={style.signin_form}>
        <form className={style.form} onSubmit={handleSignUp}>
          <label>USERNAME: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>EMAIL ADDRESS:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>PASSWORD:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>CONFIRM PASSWORD:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button>SIGN UP</button>
          <p
            className={
              messageType === "success-message" ? style.success : style.error
            }
          >
            {message}
          </p>
        </form>
      </div>
      <div className={style.info}>
        <h2 className={style.signIn_header}>OR SIGN IN WITH...</h2>
        <div className={style.social_links}>
          <SocialLink link="https://myaccount.google.com/" image={google} text="GOOGLE" />
          <SocialLink link="https://www.apple.com/" image={apple} text="APPLE" />
          <SocialLink link="https://www.facebook.com/" image={facebook} text="FACEBOOK" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
