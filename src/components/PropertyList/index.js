import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import Hotel1 from "../../assets/images/property-hotel.jpg";
import Hotel2 from "../../assets/images/property-hotel2.jpg";
import Villa from "../../assets/images/property-villa.jpg";
import Villa2 from "../../assets/images/property-villa2.jpg";
import Villa3 from "../../assets/images/property-villa3.jpg";
import useFetch from "../../hooks/useFetch";
import {
  PropertyContainer,
  PropertyImg,
  PropertyItems,
  PropertySec,
  PropertySubTitle,
  PropertyTitle,
  PropertyTitleWrapp,
  PropertyHeadTitle,
  WrappSkeleton,
} from "./PropertyStyle";
import { Skeleton } from "@mui/material";

function PropertyList() {
  const [views, setView] = useState(getWindowSize());
  const { data, loading } = useFetch("/api/v1/properties/count");

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

  // const view = window.screen.width;
  // console.log(views.innerWidth);
  // const Image = [Hotel1, Hotel2, Villa, Villa2, Villa3];
  return (
    <PropertySec>
      <PropertyHeadTitle>Browse by property type</PropertyHeadTitle>
      <PropertyContainer>
        <>
          <Swiper
            slidesPerView={views.innerWidth <= 768 ? 3 : 5}
            spaceBetween={30}
            draggable={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                {loading ? (
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
