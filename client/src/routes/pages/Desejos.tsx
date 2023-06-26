import "../sass/desejos.sass";
import F1 from "./components/Favorito/favorito";
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";
import { FaHeart } from "react-icons/fa";  
import Footer from "./components/Footer/footer";   

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
