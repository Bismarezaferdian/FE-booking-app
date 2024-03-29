import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
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
import { combineStore } from "../../zustand/store";

const MostHotel = () => {
  const { propertyType, isLoadingProperty, errorProperty } = combineStore();
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

  // useEffect(() => {
  //   combineStore.persist.rehydrate();
  // }, []);

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
            {propertyType?.map((item, i) => (
              <SwiperSlide key={i}>
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

// {props.loading ? (
//   <>
//     <Skeleton variant="rectangular" width={160} height={118} />
//     <Skeleton width="80%" />
//     <Skeleton width="30%" />
//     <Skeleton width="80%" />
//   </>
// ) : (
