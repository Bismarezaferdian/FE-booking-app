import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import Part from "../../assets/images/property-part.jpg";
import Part2 from "../../assets/images/property-part2.jpg";
import Part3 from "../../assets/images/property-part3.jpg";
import Part4 from "../../assets/images/property-part4.jpg";
import useFetch from "../../hooks/useFetch";
import {
  PartCity,
  PartContainer,
  PartImg,
  PartItems,
  PartPrice,
  PartRating,
  PartTitle,
  PartTitleWrapp,
  PropertyHeadTitle,
  PropertySec,
  PropertyWrapp,
  Rating,
  RatingWrapp,
} from "./PartStyle";
import { Skeleton } from "@mui/material";

const MostHotel = (props) => {
  const [views, setView] = useState(getWindowSize());

  console.log(props);
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

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <PropertySec>
      <PropertyWrapp>
        <PropertyHeadTitle>Home Gues Loved</PropertyHeadTitle>

        <PartContainer>
          {/* <> */}
          <Swiper
            slidesPerView={views.innerWidth <= 768 ? 2.5 : 4}
            spaceBetween={30}
            draggable={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {props?.data?.map((item, i) => (
              <SwiperSlide key={i}>
                {props.loading ? (
                  <>
                    <Skeleton variant="rectangular" width={160} height={118} />
                    <Skeleton width="80%" />
                    <Skeleton width="30%" />
                    <Skeleton width="80%" />
                  </>
                ) : (
                  <PartItems>
                    <div>
                      <PartImg src={item.photo[0]} />
                    </div>
                    <PartTitleWrapp>
                      <PartTitle to={`/hotels/${item._id}`}>
                        {" "}
                        {item.name}
                      </PartTitle>
                      <PartCity>{item.city}</PartCity>
                      <PartPrice>
                        starting from {rupiah(item.cheapestPrice)}
                      </PartPrice>
                      {item.rating && (
                        <RatingWrapp>
                          <PartRating>{item.rating}</PartRating>
                          <Rating>Exellent</Rating>
                        </RatingWrapp>
                      )}
                    </PartTitleWrapp>
                  </PartItems>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </> */}
        </PartContainer>
      </PropertyWrapp>
    </PropertySec>
  );
};

export default MostHotel;
