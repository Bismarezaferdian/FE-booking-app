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

const PropertyPart = () => {
  const { data, loading } = useFetch(
    "http://localhost:8000/api/v1/hotel?feature=true&limit=4"
  );
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
        {loading ? (
          "please wait is loading "
        ) : (
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
              {image &&
                data.map((item, i) => (
                  <SwiperSlide>
                    <PartItems key={i}>
                      {/* <PartImg src={item.photo[0]} /> */}

                      <div>
                        <PartImg src={image[i]} />
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
          </>
        )}
      </PartContainer>
    </PropertySec>
  );
};

export default PropertyPart;
