import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Header";
import FormInput from "../components/FormInput";

import axios from "axios";

import styles from "../styles/Login.module.css";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const [pageType, setPageType] = useState("LOGIN");
  const [phoneNumberRequired, setPhoneNumberRequired] = useState(false);
  const loginCharacter = useRef<any>(null);
  const loginForm = useRef<any>(null);
  const router = useRouter();

  // Login Credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Context Variables
  const { setToken, setUser } = useContext(UserContext);

  const backToLogin = () => {
    if (loginCharacter.current && loginForm.current) {
      loginCharacter.current.classList.remove(styles.RegisterCharacter);
      loginCharacter.current.classList.add(styles.AnimatedLoginCharacter);
      setPhoneNumberRequired(false);
      loginForm.current.classList.remove(styles.RegisterForm);
      loginForm.current.classList.add(styles.AnimatedLoginForm);
    }

    setTimeout(() => {
      setPageType("LOGIN");
    }, 2000);
  };

  const toRegister = () => {
    setPageType("REGISTER");
    setPhoneNumberRequired(true);
  };

  const changePage = () =>
    pageType === "LOGIN" ? toRegister() : backToLogin();

  const submitAuthentication = async (event: any) => {
    event.preventDefault();

    let credentials = {};

    if (pageType === "LOGIN") {
      credentials = {
        username: username,
        password: password,
      };
    } else {
      credentials = {
        username: username,
        password: password,
        email: email,
      };
    }

    try {
      const { data } = await axios.post(
        `${pageType === "LOGIN" ? "/auth/login" : "/register"}`,
        credentials
      );

      if (pageType === "LOGIN") {
        const user = await axios.post(
          "/auth/me",
          {},
          {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        );

        setUser(user.data);
        setToken(data.access_token);
        router.push("/games");
      } else {
        const { data } = await axios.post("/auth/login", {
          username: username,
          password: password,
        });

        const user = await axios.post(
          "/auth/me",
          {},
          {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        );

        setUser(user.data);
        setToken(data.access_token);
        router.push("/games");
      }
    } catch (e: any) {
      switch (e.response.status) {
        case 409:
          alert("Username Already Registered!");
          break;
        case 400:
          alert("Invalid Data");
          break;
        default:
          alert("Unknown Error");
          break;
      }

      console.error(e);
    }
  };

  return (
    <div className={styles.LoginPage}>
      <Head>
        <title>Riverblood | Login</title>
        <meta name="description" content="Riverblood Login Page" />
        <link rel="icon" href="/riverblood.svg" />
      </Head>
      <Header background={false} color="#6469FF" />
      <div className={styles.LoginContainer}>
        <img
          src="/Games/GOMICharacter.png"
          className={
            pageType === "REGISTER"
              ? `${styles.LoginCharacter} ${styles.RegisterCharacter}`
              : styles.LoginCharacter
          }
          ref={loginCharacter}
          alt="Login Character"
        />
        <div
          className={
            pageType === "REGISTER"
              ? `${styles.LoginForm} ${styles.RegisterForm}`
              : styles.LoginForm
          }
          ref={loginForm}
        >
          <form onSubmit={submitAuthentication}>
            <FormInput
              title="username"
              placeholder="enter your username"
              isPassword={false}
              stateVariable={setUsername}
            />
            <FormInput
              title="password"
              placeholder="enter your password"
              isPassword={true}
              stateVariable={setPassword}
            />
            {phoneNumberRequired ? (
              <FormInput
                title="email address (OPTIONAL)"
                placeholder="enter your email address"
                isPassword={false}
                stateVariable={setEmail}
              />
            ) : (
              <></>
            )}
            <button className={`${styles.LoginSubmitButton}`} type="submit">
              Submit
            </button>
          </form>
          <p className={styles.RegisterLink}>
            new here?{" "}
            <span onClick={changePage}>
              {pageType === "LOGIN" ? "Register" : "Login"} Now
            </span>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
