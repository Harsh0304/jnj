import * as React from "react";
import Box from "@mui/material/Box";
import slide1 from "../../img/hightlight1.png";
import slide2 from "../../img/highlight2.avif";
import slide3 from "../../img/hightlight4.avif";
import tab2slide1 from "../../img/contactlens2.jpg";
import tab2slide2 from "../../img/contactlens3.jpg";
import tab2slide3 from "../../img/contactlens4.jpg";

import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "./LabTabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="container tab__container">
        <div className="heading">
          <h2> ☑️ Planning for your ECP visit</h2>
        </div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab label="What to expect" value="1" />
                <Tab label="Preparing your eye" value="2" />
                <Tab label="all about" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={slide2} alt="slider2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={slide3} alt="slider3" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
            <TabPanel value="2">
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
                    <img src={tab2slide1} alt="slider1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={tab2slide2} alt="slider2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={tab2slide3} alt="slider3" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
            <TabPanel value="3">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={slide2} alt="slider2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__content">
                    <img src={slide3} alt="slider3" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </section>
  );
}
