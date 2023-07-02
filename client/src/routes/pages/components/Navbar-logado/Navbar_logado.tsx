// Importar estilo do sass
import "./Navbar_logado.sass";

// Importar imagens
import Sun from "/src/assets/IMG/sun.svg";
import Conta from "/src/assets/IMG/Rectangle 335.svg";

// Importar usabilidade do react
import { useContext, useState } from "react";

// Importar imagens
import { IoCart } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBasketSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { MdDiscount } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";
import { InputText, Navbar } from "./styles";

// NAO SEI OQ É
import "/src/components/Navbar/navbar.sass";
import Cookies from "js-cookie";

export function NavbarLogado() {
  function AbrirSidebar() {
    var sidebar = document.getElementById("sidebar2") as HTMLDivElement;

    if (sidebar.style.display == "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "block";
    }
  }
  function Close_sidebar() {
    var sidebar = document.getElementById("sidebar2") as HTMLDivElement;
    sidebar.style.display = "none";
  }

  const handleLogout = () => {
    // Remover o token dos cookies
    Cookies.remove("jwtToken");
    
    // Redirecionar para a página de login ou página inicial
    window.location.href = "/login";
  };

  return (
    <div>
      <nav>
        <Navbar>
          <div className="container">
            <input type="checkbox" id="checkbox-menu" />
            <label htmlFor="checkbox-menu" onClick={AbrirSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png"
              alt=""
            />
          </div>
          <div className="navbar"></div>
          <div className="account-search-cart">
            <div className="input-wrapper">
              <button className="Icons_navbar">
                <BsSearch className="Icon_search" />
              </button>
              <InputText
                placeholder="Search.."
                className="Input_wrapper_text"
                name="text"
                type="text"
              />
            </div>

            <div className="cart-button">
              <a href={`/carrinho`}>
                <IoCart className="Cart-Icons" />
              </a>
              <span className="cart-status">1</span>
            </div>
            <div className="account-button">
              <div className="account-img">
                <a className="Cart_link" href={`/conta`}>
                  <img src={Conta} />
                </a>
              </div>
            </div>
            <div className="Logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </Navbar>
      </nav>
      <main className="sidebar" id="sidebar2">
        <div className="flex-conta">
          <div className="conta_sidebar">
            <img src="https://i1.sndcdn.com/artworks-bEMhExX1BoD6F5Tu-atmOiw-t500x500.jpg" />
            <h1>Olá user</h1>
          </div>
          <div className="fechar-sidebar" id="Close_sidebar">
            <AiOutlineClose className="Icon_close" onClick={Close_sidebar} />
          </div>
        </div>
        <div className="Links-sidebar">
          <ul>
            <li>
              {" "}
              <AiFillHome className="Link_icon" />
              <a href="/conta" className="Links">
                Minha conta
              </a>
            </li>
            <li>
              {" "}
              <BsFillPersonFill className="Link_icon" />
              <a href="" className="Links">
                Meus dados
              </a>
            </li>
            <li>
              {" "}
              <IoBasketSharp className="Link_icon" />
              <a href="/hisorico" className="Links">
                Meus pedidos
              </a>
            </li>
            <li>
              {" "}
              <AiFillHeart className="Link_icon" />
              <a href="/lista-de-desejos" className="Links">
                Favoritos
              </a>
            </li>
            <li>
              {" "}
              <MdDiscount className="Link_icon" />
              <a href="" className="Links">
                Ofertas do dia
              </a>
            </li>
            <li>
              {" "}
              <IoFlash className="Link_icon" />
              <a href="" className="Links">
                Acabaram de chegar
              </a>
            </li>
            <li>
              {" "}
              <IoIosChatboxes className="Link_icon" />
              <a href="" className="Links">
                Protocolos de atendimento
              </a>
            </li>
            <li>
              {" "}
              <AiFillLike className="Link_icon" />
              <a href="" className="Links">
                Avaliações
              </a>
            </li>
            <li>
              {" "}
              <AiOutlineAim className="Link_icon" />
              <a href="" className="Links">
                Mais Procurados
              </a>
            </li>
          </ul>
          <div className="logout">
            <button>Logout</button>
          </div>
        </div>
      </main>
    </div>
  );
}
