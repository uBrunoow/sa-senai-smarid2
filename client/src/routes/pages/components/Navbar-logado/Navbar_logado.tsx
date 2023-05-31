import "./Navbar_logado.sass";
import { useContext, useState } from "react";
import { IoCart } from "react-icons/io5";
import Sun from "/src/assets/IMG/sun.svg";
import Conta from "/src/assets/IMG/Rectangle 335.svg";
import { BsSearch } from "react-icons/bs";

import "/src/components/Navbar/navbar.sass";

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
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import Switch from "react-switch";
import { InputText, Navbar } from "./styles";

interface Props {
  toggleTheme(): void;
}

const NavbarLogado: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState("");
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
          <div className="logo">Logo</div>
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
                onChange={({ target }) => setSearchValue(target.value)}
                value={searchValue}
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
          </div>

          <div className="light-dark">
            <img src={Sun} />
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.3, colors.primary)}
              onColor={colors.secundary}
            />
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

export default NavbarLogado;
