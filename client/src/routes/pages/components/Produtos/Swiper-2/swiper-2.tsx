import Stars from '/src/assets/IMG/img-produtos/Stars.svg'
import Produtos from '/src/assets/IMG/img-produtos/produto1.svg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="ofertas-container"
      >
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="primeiro-produto">
          <div className="promos">
              <div className="stars">
                  <img src={Stars} alt=""/>
              </div>
              <div className="produtos-restantes">
                  <p> Restam <br/>
                      <span>30</span> <br/>
                      unid.</p>
              </div>
              <div className="descontos">
                  <p>30% <br/>
                      OFF</p>
              </div>
          </div>
          <div className="img">
              <div className="produto-imagem">
                  <img src={Produtos} alt=""/>
              </div>
          </div>
          <div className="infos">
              <div className="produto-nome">
                  <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="produto-preco">
                  <p>R$ 3.799,99</p>
              </div>
          </div>
          <div className="comprar">
              <div className="btnComprar">
                  <button type="submit">
                        <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                  </button>
              </div>
          </div>
        </div>
      </SwiperSlide>


      
      
      </Swiper>
    </>
  );
}