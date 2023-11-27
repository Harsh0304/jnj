import "./Slider.css";
import slide1 from "../../img/s1.png";
import slide2 from "../../img/s2.png";
import slide3 from "../../img/s3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <section>
      <div className="container slides__container">
        <div className="heading">
          <h2> ☑️ Schedule your ECP Visit</h2>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="slider__content">
              <img src={slide1} alt="slider1" />
              <p>Find nearest ECP for contact lens</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__content">
              <img src={slide2} alt="slider2" />
              <p>Find nearest ECP for contact lens</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__content">
              <img src={slide3} alt="slider3" />
              <p>Find nearest ECP for contact lens</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
