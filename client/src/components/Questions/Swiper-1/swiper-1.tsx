import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import Aspas from "/src/assets/IMG/image 12.svg";
import { CardSwiper, ParagraphSwiper } from "./styles";

export default function Swiper1() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="quest-container"
      >
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper className="card swiper-slide">
            <div className="image-content">
              <div className="text-quest">
                <ParagraphSwiper className="q-p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </ParagraphSwiper>
              </div>
            </div>
            <div className="card-content">
              <div className="user-quest">
                <div className="imagem-questions"></div>
                <div className="user-infos">
                  <h1>Name</h1>
                  <p>in company</p>
                </div>
                <div className="user-image">
                  <img src={Aspas} />
                </div>
              </div>
            </div>
          </CardSwiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
