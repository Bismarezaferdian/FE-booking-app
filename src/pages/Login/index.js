import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import { ToastContainer, toast } from "react-toastify";
import {
  ErrorMsg,
  InputWrapp,
  LinkTo,
  LogButton,
  LoginCard,
  LoginContainer,
  LoginFooter,
  LoginHeadTitle,
  LoginWrapp,
  SpanContent,
} from "./LoginStyle";
import "react-toastify/dist/ReactToastify.css";
import { Dot } from "../../components/Navbar/NavbarStyle";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const MyTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const Login = () => {
  const [err, setErr] = useState(false);
  const [credentials, setCredentials] = useState({
    userName: undefined,
    password: undefined,
  });

  console.log(process.env.REACT_APP_API_HOST);

  const navigate = useNavigate();
  const { error, loading, dispatch } = useContext(AuthContext);

  const successAlert = () => {
    // window.alert("Invalid Credentials");
    toast("success login !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/login`,
        credentials
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      successAlert();
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setErr(true);
    }
  };

  return (
    <LoginContainer>
      <ToastContainer />
      <LoginHeadTitle>
        Traveler
        <Dot />
        com{" "}
      </LoginHeadTitle>
      <LoginWrapp>
        <LoginCard>
          {/* <LogTitle> Login</LogTitle> */}
          <InputWrapp>
            <MyTextField
              label="User Name"
              variant="outlined"
              size="small"
              type="text"
              color="error"
              placeholder="user name"
              id="userName"
              autoFocus
              onChange={handleChange}
              required
              error={err}
              helperText={error ? "is required" : ""}
            />
            <MyTextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              color="error"
              placeholder="password"
              id="password"
              // backgroundColor="red"
              onChange={handleChange}
              required
              error={err}
              helperText={error ? "is required" : ""}
            />
            {/* <InputUser id="userName" onChange={handleChange} />
            <InputPassword id="password" onChange={handleChange} /> */}
            {error && <ErrorMsg>{error.message}</ErrorMsg>}
          </InputWrapp>
          <LogButton onClick={handleClick} disabled={loading ? true : false}>
            Login
          </LogButton>
          <LoginFooter>
            <SpanContent>
              Don't have an account? <LinkTo to="/register">Sign Up</LinkTo>
            </SpanContent>
          </LoginFooter>
        </LoginCard>
      </LoginWrapp>
    </LoginContainer>
  );
};

export default Login;
