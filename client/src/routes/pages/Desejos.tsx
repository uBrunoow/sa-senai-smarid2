import "../sass/desejos.sass";
import F1 from "./components/Favorito/favorito";
import Footer from "./components/Footer/footer";

import { FaHeart } from "react-icons/fa";     

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
    </div>
  );
}
