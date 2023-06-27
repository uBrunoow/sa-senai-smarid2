// Importar estilo do sass
import "../sass/desejos.sass";

// Importar componentes
import F1 from "./components/Favorito/favorito";
<<<<<<< HEAD
import Footer from "./components/Footer/footer";
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";

// Importar icones
import { FaHeart } from "react-icons/fa";     
=======
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";
import { FaHeart } from "react-icons/fa";  
import Footer from "./components/Footer/footer";   
>>>>>>> bf8ce5ae7a09dedd3bde8d673b1cca6020123e6d

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
