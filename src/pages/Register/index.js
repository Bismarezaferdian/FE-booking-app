import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Dot } from "../../components/Navbar/NavbarStyle";
import {
  ErrorMsg,
  // InputEmail,
  // InputPassword,
  // InputUser,
  InputWrapp,
  LinkTo,
  LogButton,
  LoginCard,
  LoginContainer,
  LoginFooter,
  LoginHeadTitle,
  LoginWrapp,
  SpanContent,
} from "../Login/LoginStyle";

const MyTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errTxt, setErrTxt] = useState(false);
  const [createUser, setCreateUser] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      createUser.userName === undefined ||
      createUser.email === undefined ||
      createUser.password === undefined
    ) {
      setErrTxt(true);
    }
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_HOST}/api/v1/auth/register`,
        createUser
      );
      toast("success create account !");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      // console.log(error);
      setErrTxt(true);
      setError(error.response.data);
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
            {/* <InputUser id="userName" onChange={handleChange} />
            <InputEmail id="email" onChange={handleChange} />
            <InputPassword id="password" onChange={handleChange} /> */}
            <MyTextField
              label="User Name"
              variant="outlined"
              size="small"
              color="error"
              placeholder="user name"
              id="userName"
              autoFocus
              // backgroundColor="red"
              onChange={handleChange}
              required
              error={errTxt}
              helperText={error ? "is required" : ""}
            />
            <MyTextField
              label="Email"
              variant="outlined"
              size="small"
              placeholder="email"
              id="email"
              color="error"
              onChange={handleChange}
              required
              error={errTxt}
              helperText={error ? "is required" : ""}
            />
            <MyTextField
              label="password"
              variant="outlined"
              type="password"
              size="small"
              placeholder="password"
              id="password"
              color="error"
              onChange={handleChange}
              required
              error={errTxt}
              helperText={error ? "is required" : ""}
            />
            {error && <ErrorMsg>{error.message}</ErrorMsg>}
          </InputWrapp>
          <LogButton onClick={HandleRegister} disabled={loading ? true : false}>
            Register
          </LogButton>
          <LoginFooter>
            <SpanContent>
              have an account ? <LinkTo to="/login">Sign In</LinkTo>
            </SpanContent>
          </LoginFooter>
        </LoginCard>
      </LoginWrapp>
      {/* {error && <span>{error.message}</span>} */}
    </LoginContainer>
  );
};

export default Register;
