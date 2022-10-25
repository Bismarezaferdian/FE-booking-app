// const useAxiosPost = (url, payload) => {
//

import axios from "axios";
import { useState } from "react";

export const useAxiosPost = async (url, payload) => {
  //   const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(true);
  try {
    await axios.post(`${process.env.REACT_APP_HOST}${url},${payload}`);
    // setData(response.data);
    // console.log(response);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoaded(false);
  }

  return { error, loaded };
};
