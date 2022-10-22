import React from "react";
import {
  CompletedCountainer,
  CompletedText,
  CompletedWrapp,
} from "./CompletedStyle";

const Completed = () => {
  return (
    <CompletedCountainer>
      <CompletedWrapp>
        <CompletedText>Yay Completed Payment</CompletedText>
      </CompletedWrapp>
    </CompletedCountainer>
  );
};

export default Completed;
