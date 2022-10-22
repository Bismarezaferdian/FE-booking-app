import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import { ToastContainer, toast } from "react-toastify";
import {
  InputPassword,
  InputUser,
  LogButton,
  LogCard,
  LogContainer,
  LogTitle,
} from "./LoginStyle";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const viewToas = () => toast("success login");

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    toast("success login");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/api/v1/auth/login`,
        credentials
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err.response.data);
    }
  };

  return (
    <LogContainer>
      <ToastContainer />
      <LogCard>
        <LogTitle> Login</LogTitle>
        <InputUser id="userName" onChange={handleChange} />
        <InputPassword id="password" onChange={handleChange} />
        <LogButton onClick={handleClick}>Login</LogButton>
      </LogCard>
      {error && <span>{error.message}</span>}
    </LogContainer>
  );
};

export default Login;
