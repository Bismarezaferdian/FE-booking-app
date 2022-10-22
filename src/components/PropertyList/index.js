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
  WrappSkeleton,
} from "./PropertyStyle";
import { Skeleton } from "@mui/material";

function PropertyList() {
  const [views, setView] = useState(getWindowSize());
  const { data, loading } = useFetch("/api/v1/hotel/countType");

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
  const Image = [Hotel1, Hotel2, Villa, Villa2, Villa3];
  return (
    <PropertySec>
      <PropertyContainer>
        <>
          <Swiper
            slidesPerView={views.innerWidth <= 768 ? 3 : 5}
            spaceBetween={30}
            draggable={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data &&
              Image.map((item, i) => (
                <SwiperSlide key={i}>
                  {loading ? (
                    <>
                      <Skeleton
                        variant="rectangular"
                        width={160}
                        height={118}
                      />
                      <Skeleton width="60%" />
                      <Skeleton width="60%" />
                    </>
                  ) : (
                    <PropertyItems>
                      <div>
                        <PropertyImg src={item} />
                      </div>
                      <PropertyTitleWrapp>
                        <PropertyTitle href="#search">
                          {data[i]?.type}
                        </PropertyTitle>
                        <PropertySubTitle>
                          {data[i]?.count} {data[i]?.type}
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
