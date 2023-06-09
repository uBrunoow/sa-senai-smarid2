import "../Navbar/navbar.sass";

import Sun from "../Navbar/img/sun.svg";
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

import { Header, NavbarLink, SignIpButtonLink, SignUpButtonLink } from "./styles";

export function Navbar(){

  function AbrirSidebar() {
    var sidebar = document.getElementById("sidebar") as HTMLDivElement;

    if (sidebar.style.display == "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "block";
    }
  }

  function Close_sidebar() {
    var sidebar = document.getElementById("sidebar") as HTMLDivElement;
    sidebar.style.display = "none";
  }
  return (
    <div>
      <nav>
        <Header>
          <div className="container">
            <input type="checkbox" id="checkbox-menu" />
            <label htmlFor="checkbox-menu" onClick={AbrirSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png" alt="" />
          </div>
          <div className="navbar">
            <NavbarLink href={`/`}>Home</NavbarLink>
            <NavbarLink href={`/initialpage`}>Products</NavbarLink>
            <NavbarLink href="">Games</NavbarLink>
            <NavbarLink href={`/sobre`}>About</NavbarLink>
          </div>
          <div className="sign-in-up">
            <div className="sign-in">
              <button type="submit">
                <SignIpButtonLink href={`/login`}>Sign-in</SignIpButtonLink>
              </button>
            </div>
            <div className="sign-up">
              <button type="submit">
                <a href={`/login`}>Sign-up</a>
              </button>
            </div>
          </div>
        </Header>
      </nav>
      <main className="sidebar" id="sidebar">
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
              <AiFillHome className="Link_icon" /> Minha conta
            </li>
            <li>
              {" "}
              <BsFillPersonFill className="Link_icon" />
              Meus dados
            </li>
            <li>
              {" "}
              <IoBasketSharp className="Link_icon" />
              Meus pedidos
            </li>
            <li>
              {" "}
              <AiFillHeart className="Link_icon" />
              Favoritos
            </li>
            <li>
              {" "}
              <MdDiscount className="Link_icon" /> Ofertas do dia
            </li>
            <li>
              {" "}
              <IoFlash className="Link_icon" /> Acabaram de chegar
            </li>
            <li>
              {" "}
              <IoIosChatboxes className="Link_icon" /> Protocolos de atendimento
            </li>
            <li>
              {" "}
              <AiFillLike className="Link_icon" /> Avaliações
            </li>
            <li>
              {" "}
              <AiOutlineAim className="Link_icon" />
              Mais Procurados
            </li>
          </ul>
          <div className="logout">
            <button>Logout</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
