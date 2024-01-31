import React, { useContext } from "react";
import Jakarta from "../../assets/images/jakarta-display.jpg";
import Bandung from "../../assets/images/bandung-display.jpg";
import Surabaya from "../../assets/images/surabaya-display.jpg";
import Bogor from "../../assets/images/bogor-display.jpg";
import Semarang from "../../assets/images/semarang-display.jpg";
import Yogyakarta from "../../assets/images/yogyakarta-display.jpg";
import useFetch from "../../hooks/useFetch";
import {
  FeatureContainer,
  FeatureImg,
  FeatureItems,
  FeatureSec,
  FeatureSubTitle,
  FeatureTitle,
  FeatureTitleWrapp,
} from "./FeatureElement";
import { Skeleton } from "@mui/material";
import { SearchContext } from "../../context/SearchContext";
import { Navigate } from "react-router-dom";

const Feature = () => {
  const { dispatch } = useContext(SearchContext);

  const { data, loading } = useFetch("/api/v1/place/count");
  const handleClick = (city) => {
    console.log(city);
    // e.preventDefault();
    dispatch({
      type: "NEW_SEARCH",
      payload: city,
    });
    Navigate("/hotels", { state: city });
  };

  return (
    <FeatureSec>
      <FeatureContainer>
        {data.map((item) => (
          <div key={item._id}>
            <FeatureItems onClick={() => handleClick(item.city)}>
              <FeatureImg src={item.image} />
              <FeatureTitleWrapp>
                <FeatureTitle>{item.city}</FeatureTitle>
                <FeatureSubTitle>
                  {item.countAllHotel.length} Properties
                </FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
          </div>
        ))}

        {/* {loading
          ? datas.map((item) => (
              <div key={item.id}>
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width={window.innerWidth < 480 ? 180 : 300}
                  height={window.innerHeight < 480 ? 240 : 380}
                />
              </div>
            ))
          : datas.map((item) => (
              <div key={item.id}>
                <FeatureItems>
                  <FeatureImg src={item.img} />
                  <FeatureTitleWrapp>
                    <FeatureTitle>{item.city}</FeatureTitle>
                    <FeatureSubTitle>
                      {data[item.id]} Properties
                    </FeatureSubTitle>
                  </FeatureTitleWrapp>
                </FeatureItems>
              </div>
            ))} */}
      </FeatureContainer>
    </FeatureSec>
  );
};

export default Feature;

// const dataFeature = [
//   {
//     id: 1,
//     city: "Jakarta",
//     img: Jakarta,
//   },
//   {
//     id: 2,
//     city: "bogor",
//     img: Bogor,
//   },
//   {
//     id: 3,
//     city: "bandung",
//     img: Bandung,
//   },
//   {
//     id: 4,
//     city: "Yogjakarta",
//     img: Yogyakarta,
//   },
//   {
//     id: 5,
//     city: "surabaya",
//     img: Surabaya,
//   },
//   {
//     id: 6,
//     city: "semarang",
//     img: Semarang,
//   },
// ];
