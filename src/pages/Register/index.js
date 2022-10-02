import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonReg,
  EmailRegister,
  PassRegister,
  RegisterCard,
  RegisterContainer,
  UserRegister,
} from "./RegisterStyel";

const Register = () => {
  const [createUser, setCreateUser] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        createUser
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <UserRegister id="userName" onChange={handleChange} />
        <EmailRegister id="email" onChange={handleChange} />
        <PassRegister id="password" onChange={handleChange} />
        <ButtonReg onClick={handleRegister}>Submit</ButtonReg>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
