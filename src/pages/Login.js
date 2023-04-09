import React, { useEffect } from "react";
import { Flex, Button, Text, Image } from "theme-ui";
import login from "../asset/icons/login.gif";
import ViredLogo from "../asset/icons/HeroViredLogo.svg";
import VLogo from "../asset/icons/viredLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../components/Loader/Loader";

const Login = () => {
  let navigate = useNavigate();
  // const handleNavigate = () => {
  //   logIn();
  //   navigate('/');
  // };

  const { isUser, isLoaded } = useSelector((state) => state.auth);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_AUTH_REDIRECT;
  };

  useEffect(() => {
    if (isUser && isLoaded) {
      return navigate(from, { replace: true });
    }
  }, [isUser, isLoaded, from, navigate]);

  return !isLoaded ? (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
    </Flex>
  ) : (
    <Flex
      sx={{
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image width="500px" src={login} alt="LOGIN" />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Image
          sx={{ width: "300px" }}
          src={ViredLogo}
          alt="hero-vired logo"
        ></Image>

        <Button
          onClick={handleLogin}
          sx={{
            height: "48px",
            borderRadius: "28px",
            border: "none",
            outline: "none",
            backgroundColor: "#0A60A6",
            fontSize: "21px",
            fontWeight: "500",
            margin: "0 0 80px 20px",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={VLogo} sx={{ width: "20px" }} alt="vired-icon" />
          <Text sx={{ marginLeft: "15px" }}>Log in with Hero Vired</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
