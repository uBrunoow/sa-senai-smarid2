import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Promo1 from "/src/assets/IMG/Promo SA.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Swiper1() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: "progressbar",
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="slide-container"
            >
                <SwiperSlide>
                    <div className="card2 swiper-slide">
                        <div className="image-content2">
                            <div className="card-image2 Card_image_1"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card2 swiper-slide">
                        <div className="image-content2">
                            <div className="card-image2 Card_image_2">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card2 swiper-slide">
                        <div className="image-content2">
                        <div className="card-image2 Card_image_3">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card2 swiper-slide">
                        <div className="image-content2">
                        <div className="card-image2 Card_image_4">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
