import React from "react";
import { Container, ContentWrapp } from "./Container";

const ContainerWrapp = ({ children }) => {
  return (
    <Container>
      <ContentWrapp>{children}</ContentWrapp>
    </Container>
  );
};

export default ContainerWrapp;
