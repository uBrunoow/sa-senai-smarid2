import "../sass/desejos.sass";
import F1 from "./components/Favorito/favorito";
import Footer from "./components/Footer/footer";

import { FaHeart } from "react-icons/fa";
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";



export default function Desejos() {
  return (
    <div className="Body_page">
      <main className="favoritos">
        <div className="favoritos-content">
          <div className="titulo-favoritos">
            <FaHeart id="Coracao" />
            <h1>Meus favoritos</h1>
          </div>
          <F1 />
          <F1 />
          <F1 />
          <F1 />
          <F1 />
          <F1 />
        </div>
      </main>
      <Footer />
    </div>
  );
}
