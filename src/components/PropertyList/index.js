import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import {
  PropertyContainer,
  PropertyImg,
  PropertyItems,
  PropertySec,
  PropertySubTitle,
  PropertyTitle,
  PropertyTitleWrapp,
  PropertyHeadTitle,
} from "./PropertyStyle";
import { Skeleton } from "@mui/material";

function PropertyList(props) {
  const [views, setView] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  useEffect(() => {
    function handleWindowResize() {
      setView(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <PropertySec>
      <PropertyHeadTitle>Browse by property type</PropertyHeadTitle>
      <PropertyContainer>
        <>
          <Swiper
            slidesPerView={views.innerWidth <= 768 ? 2.5 : 5}
            spaceBetween={30}
            draggable={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {props.data?.map((item, i) => (
              <SwiperSlide key={i}>
                {props.loading ? (
                  <>
                    <Skeleton variant="rectangular" width={160} height={118} />
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                  </>
                ) : (
                  <PropertyItems>
                    <div>
                      <PropertyImg src={item.image} />
                    </div>
                    <PropertyTitleWrapp>
                      <PropertyTitle href="#search">{item.name}</PropertyTitle>
                      <PropertySubTitle>
                        {item.countAllProperties.length} property
                      </PropertySubTitle>
                    </PropertyTitleWrapp>
                  </PropertyItems>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </PropertyContainer>
    </PropertySec>
  );
}

export default PropertyList;
