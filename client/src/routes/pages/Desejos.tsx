// Importar estilo do sass
import "../sass/desejos.sass";

// Importar componentes
import F1 from "./components/Favorito/favorito";
import Footer from "./components/Footer/footer";
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";

// Importar icones
import { FaHeart } from "react-icons/fa";     

export default function Desejos() {
  return (
    <div className="Body_page">
      <NavbarLogado/>
      <main className="favoritos">
        <div className="favoritos-content">
          <div className="titulo-favoritos">
            <FaHeart id="Coracao" />
            <h1>Meus favoritos</h1>
          </div>
        {/* Componentes de favoritos */}
          <F1 />
          <F1 />
          <F1 />
          <F1 />
          <F1 />
          <F1 />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
