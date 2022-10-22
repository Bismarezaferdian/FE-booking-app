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
  PropertySec,
  Rating,
  RatingWrapp,
} from "./PartStyle";
import { Skeleton } from "@mui/material";

const PropertyPart = () => {
  const { data, loading } = useFetch("/api/v1/hotel?feature=true&limit=4");
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
  // console.log(data);
  // image dumy
  const image = [Part, Part2, Part3, Part4];

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <PropertySec>
      <PartContainer>
        <>
          <Swiper
            slidesPerView={views.innerWidth <= 768 ? 2 : 4}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            draggable={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data &&
              image.map((item, i) => (
                <SwiperSlide key={i}>
                  {loading ? (
                    <>
                      <Skeleton
                        variant="rectangular"
                        width={160}
                        height={118}
                      />
                      <Skeleton width="80%" />
                      <Skeleton width="30%" />
                      <Skeleton width="80%" />
                    </>
                  ) : (
                    <PartItems>
                      {/* <PartImg src={item.photo[0]} /> */}

                      <div>
                        <PartImg src={item} />
                      </div>

                      <PartTitleWrapp>
                        <PartTitle to={`/hotels/${data[i]?._id}`}>
                          {" "}
                          {data[i]?.name}
                        </PartTitle>
                        <PartCity>{data[i]?.city}</PartCity>
                        <PartPrice>
                          starting from {rupiah(data[i]?.cheapestPrice)}
                        </PartPrice>
                        {data[i]?.rating && (
                          <RatingWrapp>
                            <PartRating>{data[i]?.rating}</PartRating>
                            <Rating>Exellent</Rating>
                          </RatingWrapp>
                        )}
                      </PartTitleWrapp>
                    </PartItems>
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      </PartContainer>
    </PropertySec>
  );
};

export default PropertyPart;
