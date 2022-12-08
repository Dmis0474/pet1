import React from "react";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может бть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false)


  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const authUser = (email, password, e) => {
    // console.log("email, pass", email, password);
    e.preventDefault();
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => console.log(response.data.items));
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(String(e.target.value).toLowerCase())) {
      setEmailError("");
    } else {
      setEmailError("Некорректный email");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 18) {
      setPasswordError("пароль должен содержать более 3 и менее 8 символов");
      if (!e.target.value) {
        setPasswordError("пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <form className={styles.registrationForm}>
      <h2 className={styles.header}>Duals App</h2>
      <img src="deals.png" alt="" className={styles.img} />
      <div className={styles.inputWrapper}>
        {/* <input
          type="text"
          placeholder="login"
          className={styles.registrationInput}
        />
        {emailError && emailDirty && <div>{emailError}</div>} */}
        <div className={styles.emailWrapper}>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="email@gmail.com"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
          />
          {emailError && emailDirty && (
            <div className={styles.error}>{emailError}</div>
          )}
        </div>
        <div className={styles.emailWrapper}>
          <input
            value={password}
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="password"
            className={styles.registrationInput}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
          />
          {passwordError && passwordDirty && (
            <div className={styles.error}>{passwordError}</div>
          )}
           <img
            src="showPassword.png"
            className={styles.showPassword}
            onClick={()=>setPasswordVisible(!passwordVisible) }
          />
        </div>
        
      </div>
      <button
        className={styles.registrationButton}
        // disabled={!formValid}
        onClick={(e) => authUser(email, password, e)}
      >
        Login
      </button>
      <a className={styles.switchButton} onClick={() => props.changeForm('registr')}>Registration</a>
    </form>
  );
};

export default LoginForm;
