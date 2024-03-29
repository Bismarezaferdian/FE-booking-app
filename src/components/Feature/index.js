import React, { useContext } from "react";
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
import { GetCity } from "../../hooks/fetchApi";

const Feature = () => {
  const { dispatch } = useContext(SearchContext);

  // const { data, loading } = useFetch("/api/v1/place/count");
  const { city, cityLoading, cityError } = GetCity();

  if (cityLoading) {
    return (
      <>
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={window.innerWidth < 480 ? 180 : 300}
          height={window.innerHeight < 480 ? 240 : 380}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={window.innerWidth < 480 ? 180 : 300}
          height={window.innerHeight < 480 ? 240 : 380}
        />
      </>
    );
  }

  const handleClick = (city) => {
    // e.preventDefault();
    dispatch({
      type: "NEW_SEARCH",
      payload: city,
    });
    Navigate("/hotels", { state: city });
  };

  return (
    <FeatureSec id="hotel">
      <FeatureContainer>
        {cityLoading && (
          <>
            {city?.map((item) => (
              <div key={item.id}>
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width={window.innerWidth < 480 ? 180 : 300}
                  height={window.innerHeight < 480 ? 240 : 380}
                />
              </div>
            ))}
          </>
        )}

        {city?.map((item) => (
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
